import React from 'react';

class App extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			data: 'Initial data..3. '
			
		};
		
		this.updateState = this.updateState.bind(this);
		
	}
	
	updateState(e){
		this.setState({data:e.target.value});
	}
	
	
   render() {
      return (
         <div>
           <Content myDataProp = {this.state.data} updateStateProp = {this.updateState}> </Content>
		   
		  
			
         </div>
      );
   }
}

class Content extends React.Component {
	
	componentWillMount(){
		console.log('Component WILl MOUNT');
	}
	
	componentDidMount(){
		console.log('Component DID MOUNT');
		
	}
	
	componentWillReceiveProps(newProps){
		console.log('Component WILL RECEIVE PROPS');
	}
	
	shouldComponentUpdate(newProps,newState){
		return true;
	}
	
	componentWillUpdate(newProps,nextState){
		console.log('Component WILL UPDATE');
	}
	
	componentDidUpdate(prevPops, prevState){
		console.log('Component DID UPDATE');
	}
	
	componentWillUnmount(){
		console.log('Component WILL UNMOUNT');
	}
	
	
	
	render(){
		return (
			<div>
				<input type='text' value = {this.props.myDataProp}
					onChange = {this.props.updateStateProp} />
				<h3>{this.props.myDataProp}</h3>
			</div>
		);
	}
	
	
}



class TableRow extends React.Component{
	
	render(){
		
		return (
			<tr>
				<td> {this.props.data.id}</td>
				<td> {this.props.data.name}</td>
				<td> {this.props.data.age} </td>
			</tr>
		);
		
	}
	
}

export default App;