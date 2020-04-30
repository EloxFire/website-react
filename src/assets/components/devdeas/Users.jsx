import React, {Component} from 'react';
import '../../sass/devdeas/users.scss';

class Users extends Component{
  render(){
    return(
      <div id="usersShare" className="pt-5">
        <h1 className="ml-5 devdeasSectionTitle"><span>&#60;</span><span>&#47;</span>For users<span>&#62;</span></h1>
        <p className="ml-5">Here you can upload any new idea. It'll be stored in my database and everyone will be able to see it so, be specific !</p>

        <div className="usersMb col-12 d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row justify-content-around">
          <div className="actionButton p-2 d-flex flex-column text-center justify-content-center"><h1><strong>+</strong></h1><p>Click here to upload an idea.</p></div>
          <div className="actionButton p-2 d-flex flex-column text-center justify-content-center"><h1><strong>+</strong></h1><p>Click here to see all the ideas.</p></div>
          <div className="actionButton p-2 d-flex flex-column text-center justify-content-center"><h1><strong>+</strong></h1><p>Click here to see developped ideas.</p></div>
        </div>

        <h1 className="ml-5 devdeasSectionTitle"><span>&#60;</span><span>&#47;</span>For developpers<span>&#62;</span></h1>
        <p className="ml-5">Here you can start developping an idea, share your progress and get help !</p>

        <div className="mb-5 col-12 d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row justify-content-around">
          <div className="actionButton p-2 d-flex flex-column text-center justify-content-center"><h1><strong>+</strong></h1><p>Click here to start coding an idea.</p></div>
          <div className="actionButton p-2 d-flex flex-column text-center justify-content-center"><h1><strong>+</strong></h1><p>Click here to share your code.</p></div>
          <div className="actionButton p-2 d-flex flex-column text-center justify-content-center"><h1><strong>+</strong></h1><p>Click here to get help.</p></div>
        </div>
      </div>
    )
  }
}

export default Users;
