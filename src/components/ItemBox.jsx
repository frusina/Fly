import React from 'react';
import Superagent from 'superagent';


class ItemBox extends React.Component {
	
	constructor(){
		super();

		
	}
	
	
   render() {
      return (
         <div>
           <ItemList data = {this.props.data}> </ItemList>
         </div>
      );
   }
}

class ItemList extends React.Component {
	
	constructor(){
		super();
		
		this.reactStyle = {
			
			
			
		};
		
	}
	
	
	render(){
		
		//console.log(this.props);
		
		var itemNodes = this.props.data.map( (item,i) => {
			return (
				<Item key={i} data = {item}> </Item>
				)
		});
		
		return (
			<div className='itemList' >
				{itemNodes}
			</div>	
		);
	}

}



class Item extends React.Component{
	
	constructor(){
		super();
		
		this.reactStyle = {
			
			itemTitle:{
				fontWeight: 'bold',
				fontSize: '1.2em'
				
			},
			itemBorder:{
				borderRadius: '2pt',
				border: '1px solid grey',
				marginBottom: '4px',
				marginLeft: '3px'
				
			},
			itemImage: {
				margin: '0',
				padding: '0'
			},
			price: {
				color: 'green',
				fontWeight: 'bold',
				fontSize: '1.3em'
				
			}
			
		};
		
		
	
	}
	
	componentWillMount(){
		
		// modify description
		var DESCRIPTION_MAX_LEN = 140;
		var TITLE_MAX_LEN = 23;
		
		var description = this.props.data.description;
		
		
		if ( description.length > DESCRIPTION_MAX_LEN){
			description = description.substr(0,DESCRIPTION_MAX_LEN) + "...";
		}
		
		this.props.data.description = description;
		
		var title = this.props.data.title;
		
		if ( title.length > TITLE_MAX_LEN){
			title = title.substr(0,TITLE_MAX_LEN) + "...";
		}
		
		this.props.data.title = title;
		
		
		
		
		
	}
	
	
	
	
	transactionEvents(id,evt){
		
		//alert(id + " " +evt.target.className);
		Superagent
			.get('http://localhost:4567/hello')
			.send({data: 'hi'})
			//.set('Origin','*')
			.set('Accept','application/json')
			.end(function(err,res){
				console.log(res);
			});
			
				
			
		
	}
	
	
	render(){
		
		return (
			
			<div className='row' style={this.reactStyle.itemBorder}>
				<div className='col-sm-12'  >
					<div className='row'>
						<div className='col-sm-3' style={this.reactStyle.itemImage} >
							<img src={this.props.data.imageURL} height={"110"} width={"110"}></img>
						</div>
						<div className='col-sm-9'>
						
							<div className='row'>
								<div className='col-sm-9'  >
									<span style={this.reactStyle.itemTitle}>{this.props.data.title}</span><div/>
									{this.props.data.posted}
								</div>
								<div className='col-sm-3 text-left row-no-padding'  >
									<span style={this.reactStyle.price}> {this.props.data.price == 0 ? 'FREE' : '$' +this.props.data.price.toFixed(2)}</span>
								
								<div/>
										
									<div className='row '>
										<div className='col-sm-3'>
											<a onClick={(evt) =>  {this.transactionEvents(this.props.data.id,evt)}  } href='#'> <span className={this.props.data.buyNow ? 'fa fa-dollar' : ''}></span> </a>
										</div>
										<div className='col-sm-3'>
											<a onClick={(evt) =>  {this.transactionEvents(this.props.data.id,evt)}  } href='#'> <span className={this.props.data.trade ? 'fa fa-signing' : ''}></span> </a>
										</div>
										<div className='col-sm-3'>
											<a onClick={(evt) =>  {this.transactionEvents(this.props.data.id,evt)}  } href='#'> <span className={this.props.data.bid ? 'fa fa-balance-scale' : ''}></span> </a>
										</div>
										
									</div>
									
								</div>
								
							</div>
							<div className='row'>
								<div className='col-sm-12' >
									{this.props.data.description}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
		
	}
	
}

export default ItemBox;