import React, {Component} from 'react';
import * as FIcons from 'react-icons/fa';
import Timestamp from 'react-timestamp';
import '../sass/pages.scss';

class Work extends Component{

  constructor(props){
    super(props);

    this.state = {
      profile: [],
      repos: [],
    }
  }

  date(){
    return Math.floor(Date.now()/1000);
  }

  getProfile(){
    fetch("https://api.github.com/users/EloxFire")
    .then(response => response.json())
    .then(data => {
      this.setState({
        profile: data
      })
    }).then(console.log(this.state.profile));;
  }

  getRepos(){
    fetch("https://api.github.com/users/EloxFire/repos")
    .then(response => response.json())
    .then(data => {
      this.setState({
        repos: data
      })
    });
  }

  componentDidMount(){
    this.getProfile();
    this.getRepos();
  }


  render(){
    return(
      <div id="work" className="col-12 d-flex flex-row justify-content-center align-items-center">
        <div className="col-3 h-100 p-5 d-flex flex-column justify-content-center">
          <div className="bordered mb-2">
            <img className="w-100" style={{borderRadius: "8px"}} src={this.state.profile.avatar_url} alt="Logo"/>
          </div>
          <div className="bordered mt-2 p-2">
            <h3>{this.state.profile.login}</h3>
            <h6><FIcons.FaGithub/> {this.state.profile.name}</h6>
            <h6><FIcons.FaTwitter/> @{this.state.profile.twitter_username}</h6>
            <hr style={{backgroundColor:"white"}}/>
            <p>{this.state.profile.bio}</p>
            <p>Feedbacks on my work are apreciated.</p>
          </div>
        </div>
        <div className="col-9 h-100 h-100 p-5 d-flex flex-column justify-content-center align-items-center">
          <div className="bordered w-100 p-2 d-flex flew-wrap justify-content-around">
            <div className="d-flex flex-column align-items-center">
              <h6>Public repos :</h6>
              <span>{this.state.repos.length}</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h6>Follower count :</h6>
              <span>{this.state.profile.followers}</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h6>Stars :</h6>
              <span>Test</span>
            </div>

            <div className="d-flex flex-column align-items-center">
              <h6>Joined since :</h6>
              <span><Timestamp relative date={this.state.profile.created_at} autoUpdate/></span>
            </div>
          </div>

          <div className="bordered w-100 p-2 d-flex flex-row mt-3 overflow-auto repos-container">
            {
              this.state.repos.map(function(item, index){
                return(
                  <div key={index} className="bordered ml-2 mr-2 repo">
                    <span>{item.name}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
