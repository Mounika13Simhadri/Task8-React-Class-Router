import React, { Component }from 'react'
import { Navigate } from "react-router-dom";
class Login extends Component {
  constructor(props){
    super(props);
    this.state={username:"",
                password:"",
                valid:""
              }
  }
 
 handleInput=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}
validate=(e)=>{
  e.preventDefault();
  
  if(this.state.username!==""&&this.state.password!==""){
    if(this.state.username==="user")
    {
      if(this.state.password==="password")
      {
        this.setState({valid:true})
      
      }
      else{
        alert("Invalid Password")
      }
  }
  else{
    alert("Invalid Username")
  }
}
else{
  alert("Please fill the values")
}

}
  render() {

    return (
      <>
        <label className="header">USER LOGIN</label>
        {this.state.valid&&<Navigate to="/Dashboard" replace={true}/>}
        <form className="userLogin" onSubmit={(e)=>this.validate(e)}>
          <div>
            <label>UserName:</label>
            <input type="text" name="username" onChange={(e)=>this.handleInput(e)} value={this.state.username}/>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" onChange={(e)=>this.handleInput(e)} value={this.state.password}/>
            <br/>
          </div>
          <button>SUBMIT</button>
        </form>
      </>
    )
  }
}





export default Login
