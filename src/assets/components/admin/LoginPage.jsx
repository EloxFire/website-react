import React, { Component } from 'react';
import '../../sass/admin/login.scss';

class LoginPage extends Component{
  render(){
    return(
      <div id="login">
        <div className="container">
          <div className="text-center col-12">
            <h4><span>A</span>ccess admin page</h4>
          </div>
          <div className="bordered col-6 offset-3">
            <form className="">
              <div class="form-group">
                <label for="exampleInputEmail1"><span>U</span>sername</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your username"/>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1"><span>P</span>assword</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your password"/>
              </div>
              <button type="submit" class="btn btn-success">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage;
