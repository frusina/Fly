import React from 'react';
import ItemBox from './ItemBox.jsx'
import SellingBox from './SellingBox.jsx'

class App extends React.Component {
	
	constructor(){
		super();
		
		
		this.adjustColumn = this.adjustColumn.bind(this);
		
		this.styleCSS = {
			minimize: "col-sm-3",
			normal: "col-sm-6",
			maximize: "col-sm-9"
		
		};
		
		this.state = {
			normal: true,
			leftColumnState: 'col-sm-6',
			rightColumnState: 'col-sm-6'
		};
		
		this.reactStyle = {
			red: {
				backgroundColor: 'red'
			},
			grey: {
				backgroundColor: 'grey'
			}
			
		};
		
	}
	

	
	adjustColumn(){
		if (this.state.normal){
			this.setState({leftColumnState: this.styleCSS.minimize, 
							rightColumnState: this.styleCSS.maximize});
			this.state.normal = false;
		}else{
			this.setState({leftColumnState: this.styleCSS.normal, 
							rightColumnState: this.styleCSS.normal});
			this.state.normal = true;
		}
	}
	
	
	
	
	
   render() {
	   
	  
      return (
          <div className='container-fluid'>
		  
			  <div className='row'>
					<div className={this.state.leftColumnState} >
						<ItemBox data={this.props.data} > </ItemBox>
					</div>
					
					
					
				</div>
			  
			</div>
         
      );
   }
}


export default App;