import React from "react";
import { Redirect } from "react-router-dom";


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      route : null,
      accessToken : null
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }


  async postData(){

    console.log("PostData called");
    const {username, password} = this.state.fields;

    const res = await fetch("http://localhost:4000/login/loginuser",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name: username,
        password:password
      })
    });

    const data = await res.json();
    /*if(data.status(200)) {

      alert("Login successfull");
      console.log("Login successfull")
    }else if(data.status(202)) {

      alert("Login unsuccessfull");
      console.log("Login unsuccessfull")
    }*/

    if(data.accessToken) {

      alert("Login successfull");
      console.log("Login Data : ",data," And accessToken : ",data.accessToken);
      this.setState({accessToken : data.accessToken});
      this.setState({route : "/"});
    }else {
      alert('Please enter valid credentials')
    }
  }



  submitLoginForm(e) {
    e.preventDefault();
    
    if (this.validateForm()) {
      this.postData();
        let fields = {};
        fields["usernamez"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
       
    }

  }
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter password.";
    }


    this.setState({
      errors: errors
    });
    return formIsValid;


  
  }

  render() {

    if(this.state.route!="/"){
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Customer Login</div>
        <form method="post" name="LoginForm"  onSubmit= {this.submitLoginForm}>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.fields.username} onChange={this.handleChange}/>
              <div className="errorMsg">{this.state.errors.username}</div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"  value={this.state.fields.password}  onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.password}</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn1" value="Login">
            Login
          </button>
        </div>
        </form>
      </div>
    );
  }else {
    return <Redirect to={{pathname:this.state.route,state:{accessToken : this.state.accessToken}}}/>;
  }
  }
}
