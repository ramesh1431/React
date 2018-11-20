import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.getData=this.getData.bind(this);
        this.state={
            mysuccess:false
        }
    }
    
    // onHandleLogin() {
    //     /* using react router you can do this */
    //     alert("history")
    //     browserHistory.push('/');
    //   }
      getData(e) {
    var email= document.getElementById("inputEmail").value;
  
    var password=document.getElementById("inputPassword").value;
    localStorage.setItem("email" ,"ramesh@gmail.com");
    localStorage.setItem("password" ,"@gmail.com");
   
    if(email===localStorage.getItem("email")&& password===localStorage.getItem("password")) {
        this.setState({mysuccess:true})
     
    }else{
        console.log("failurer")
    }
      }
    
    render() {
        if(this.state.mysuccess===true){
            alert("ramesh"+this.state.mysuccess);
           
        }
        return (
           
            <div className="center">
             <li> <Link to='/loginSuccesss'>click</Link></li>
            <form className="col-md-4" >
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input ref="email" type="email" className="form-control" id="inputEmail" placeholder="Enter email" />

                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input ref="password" type="password" className="form-control" id="inputPassword" placeholder="Password" />
                </div>
            
                <button type="submit" className="btn btn-primary" onClick={this.getData}>Login</button>
            </form>
</div>
        );



    }

}
export default Login;