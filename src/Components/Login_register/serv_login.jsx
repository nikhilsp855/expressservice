import React from "react";


export class Splogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
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

  submitLoginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
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
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <form method="post"  name="LoginForm"  onSubmit= {this.submitLoginForm} >
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
  }
}
