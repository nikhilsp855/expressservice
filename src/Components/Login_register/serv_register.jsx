import React from "react";



export class Spregister extends React.Component {
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

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["email"] = "";
        fields["password"] = "";
        fields["cpassword"] = "";
        fields["servname"] = "";
        fields["file"] = "";
        this.setState({fields:fields});
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

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
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
    if (!fields["servname"]) {
        formIsValid = false;
        errors["servname"] = "*Please enter service name.";
    }
    if (!fields["file"]) {
      formIsValid = false;
      errors["file"] = "*Please upload file.";
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
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username"  placeholder="username" value={this.state.fields.username} onChange={this.handleChange}/>
              <div className="errorMsg">{this.state.errors.username}</div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" value={this.state.fields.email}  onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.email}</div>
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
            <div className="form-group">
              <label htmlFor="service">Enter the service provided</label>
              <input type="text" name="service" placeholder="Service name" value={this.state.fields.servname} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.servname}</div>
            </div>
            <div className="form-group">
              <label htmlFor="document">Upload Document For Verification</label>
              <input type="file" name="file" value={this.state.fields.file} onChange={this.handleChange}/>
              <div className="errorMsg">{this.state.errors.file}</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn" value="Register">
            Register
          </button>
          </div> 
        </form>
        <h6>Password must contain atleast 8 characters including-
             An uppercase character,a lower character,
             a digit and a symbol.
        </h6>
      </div>
    );
  }
}
