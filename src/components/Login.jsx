import React, { Component } from 'react';
import '../sass/pages.scss';

class Login extends Component{

  constructor(props){
    super(props);

    this.state = {
      UserName: "",
      UserPass: "",
      response: [],
    };

    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangeUserPass = this.handleChangeUserPass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUserName(e){
    this.setState({
        UserName: e.target.value
    });
    console.log('onChange Name : ', this.state.UserName);
  }
  handleChangeUserPass(e){
    this.setState({
        UserPass: e.target.value
    });
    console.log('onChange Pass');
  }

  handleSubmit(e){
    e.preventDefault();

    let user = {
      name: this.state.UserName,
      pass: this.state.UserPass,
    };
    let infoDOM = document.getElementById('test');

    if(user.name == this.state.response[0].name && user.pass == this.state.response[0].pass){
      window.location.href = '/dash';
    }else{
      console.log("ERROR bad credentials");
      setTimeout(
        function() {
          window.location.reload(false);
        }
        .bind(this),
        500
      );
    }
  }

  getCredentials(){
    fetch("https://projects-enzoavagliano.fr:9000/getloginadminfos")
    .then(res => res.json())
    .then(res => this.setState({ response: res }));
  }

  componentDidMount(){
    document.title = "Enzo Avagliano - Admin";
    this.getCredentials();
  }

  render(){
    return(
      <div id="login" className="d-flex flex-column align-items-center justify-content-center">
        <div className="col-11 col-lg-5 p-5 border">
          <h2 className="mb-5">Access admin dashboard</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <input onChange={this.handleChangeUserName} type="text" className="form-control" id="userName" placeholder="Your name"/>
            </div>
            <div className="form-group">
              <label htmlFor="userPass">Password</label>
              <input onChange={this.handleChangeUserPass} type="password" className="form-control" id="userPass" placeholder="Your password"/>
            </div>
            <button type="submit" className="btn btn-success">Go to admin center</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
