import React, { Component } from 'react';
import '../sass/pages.scss';

class Login extends Component{

  componentDidMount(){
    document.title = "Enzo Avagliano - Admin";
  }

  render(){
    return(
      <div id="login">
        <div className="col-12 text-center">
        <form>
          <div class="form-group">
            <label for="userName">Email address</label>
            <input type="text" class="form-control" id="userName" placeholder="Your name"/>
          </div>
          <div class="form-group">
            <label for="userPass">Password</label>
            <input type="password" class="form-control" id="userPass" placeholder="Your password"/>
          </div>
          <button type="submit" class="btn btn-primary">Go to admin center</button>
        </form>
        </div>
      </div>
    )
  }
}

export default Login;
