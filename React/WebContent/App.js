import React, { Component } from 'react';
import Login from '../component/Login';
import Success from '../component/loginSuccess';
import {Switch,Route} from 'react-router-dom';
import API from '../component/ApiCall';

class App extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			name : 'kiran'
		}
	}
  componentDidMount(){
  	
  }
  
  render() { 
  	var hello = 'Hello', world= 'World';
  
    return (
     
      <div className="App">
       <Switch>
      <Route path='/loginSuccesss' component={Success}></Route>
      </Switch>
      <API/>
        <div>
        { hello + ' ' +world}
        {
        	this.state.name
        }
        
        </div>
        <Login/>
      </div>
    );
  }
}


export default App;
