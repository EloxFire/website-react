import React, {Component} from 'react';
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
        user_link: "",
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
          bio: data.bio,
          user_link: data.thml_url,
        }
      })
    });
  }

  getRepos(){
    fetch("https://api.github.com/users/EloxFire/repos")
    .then(response => response.json())
    .then(data => {
      this.setState({
        repos: data
      })
    }).then(console.log(this.state.repos));
  }

  componentDidMount(){
    this.getProfile();
    this.getRepos();
  }

  render(){
    return(
      <div id="work">
        <p>{this.state.profile.name}</p>
      </div>
    )
  }
}

export default Work;
