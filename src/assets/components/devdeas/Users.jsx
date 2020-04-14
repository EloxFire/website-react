import React, {Component} from 'react';
import '../../sass/devdeas/users.scss';

class Users extends Component{
  render(){
    return(
      <div id="usersShare">
        <span>&#60;&#47;</span><span className="devdeasP">I'm a user</span><span>&#62;</span>
        <div className="stepsContainer d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row align-items-center col-12">
          <div className="devdeasCardUser">test</div>
          <div className="devdeasCardUser">test</div>
          <div className="devdeasCardUser">test</div>
        </div>
      </div>
    )
  }
}

export default Users;
