import React from 'react';

class SellingBox extends React.Component {
	
	constructor(props){
		super(props);
		
		
		
	}
	
	
   render() {
      return (
         <div>
           <SellingList data = {this.props.data}> </SellingList>
         </div>
      );
   }
}

class SellingList extends React.Component {
	
	render(){
		
		
		var itemNodes = this.props.data.map( (item,i) => {
			return (
					<SellingItem key={i} data = {item}> </SellingItem>
				)
		});
		
		return (
			<div className="sellingList">
				<table>
					<tbody>
						{itemNodes}
					</tbody>
				</table>
			</div>
		);
	}

}



class SellingItem extends React.Component{
	
	render(){
		
		return (
			
			<tr>
				<td> {this.props.data.imageURL}</td>
				<td> {this.props.data.title}</td>
				<td> {this.props.data.description} </td>
				<td> {this.props.data.price} </td>
				<td> {this.props.data.posted} </td>
				<td> {this.props.data.location} </td>
				<td> {this.props.data.id} </td>
			</tr>
			
		);
		
	}
	
}

export default SellingBox;