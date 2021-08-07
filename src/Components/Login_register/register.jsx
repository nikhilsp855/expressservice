import React from "react";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

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
    const res = await fetch("/login/register",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        username:username,
        password:password,
        pno: this.props.pno
      })
    })
    .then(response=>response.json())
    .then(data=>{
      if(data==='success')
      {
        alert("User registerd successfully");
      }
      else{
        alert("User Already Exists. Try Again with a different phone number.")
      }
    })
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {

        this.postData();
        let fields = {};
        fields["username"] = "";
        fields["password"] = "";
        fields["cpassword"] = "";
        this.setState({fields:fields});
        console.log(this.state.fields);
        alert("Registration request sent");
    }

  }
  validateForm() {

    let fields = this.state.fields;

    
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Enter password as per guidelines";
      }
    }

    if (!fields["cpassword"]) {
      formIsValid = false;
      errors["cpassword"] = "*Please confirm password.";
    }

    if (typeof fields["password"] !== "undefined" && typeof fields["cpassword"] !== "undefined") {
      if (fields["password"] != fields["cpassword"]) {
        formIsValid = false;
        errors["cpassword"] = "Passwords don't match.";
  
      }
  
  }

   

    this.setState({
      errors: errors
    });
    return formIsValid;


  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <form method="post" name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username"  placeholder="username" value={this.state.fields.username} onChange={this.handleChange}/>
              <div className="errorMsg">{this.state.errors.username}</div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.fields.password} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.password}</div>
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input type="password" name="cpassword" placeholder="confirm password" value={this.state.fields.cpassword} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.cpassword}</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn1" value="Register">
            Register
          </button>
          </div> 
        </form>
        <div className="guide">Password must contain atleast 8 characters including-
             An uppercase character,a lower character,
             a digit and a symbol.
        </div>
      </div>
    );
  }
}
