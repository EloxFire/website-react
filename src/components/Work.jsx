import React, {Component} from 'react';
import * as Icon from 'react-bootstrap-icons';
import '../sass/pages.scss';

class Work extends Component{

  constructor(props){
    super(props);

    this.state = {
      profile: {
        name: "",
        pseudo: "",
        blog: "",
        bio: "",
      },
      repos: [],
    }
  }

  getProfile(){
    fetch("https://api.github.com/users/EloxFire")
    .then(response => response.json())
    .then(data => {
      this.setState({
        profile: {
          name: data.name,
          pseudo: data.login,
          blog: data.blog,
          bio: data.bio
        }
      });
  }

  render(){
    return(
      <div id="work">

      </div>
    )
  }
}

export default Work;
