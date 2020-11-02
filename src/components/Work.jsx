import React, { Component } from "react";
import * as FIcons from "react-icons/fa";
import Timestamp from "react-timestamp";
import "../sass/pages.scss";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: [],
      repos: [],
    };
  }

  getProfile() {
    fetch("https://api.github.com/users/EloxFire")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          profile: data,
        });
      })
      .then(console.log(this.state.profile));
  }

  getRepos() {
    fetch("https://api.github.com/users/EloxFire/repos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          repos: data,
        });
      });
  }

  componentDidMount() {
    this.getProfile();
    this.getRepos();
  }

  render() {
    return (
      <div id="work" className="d-flex flex-column flex-lg-row">
        <div className="p-4 col-12 col-lg-3 nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <h1 className="white mb-3">My Work.</h1>
          <a className="nav-link mb-2 active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><FIcons.FaUser/> My profile</a>
          <a className="nav-link mb-2" id="v-pills-repos-tab" data-toggle="pill" href="#v-pills-repos" role="tab" aria-controls="v-pills-repos" aria-selected="false"><FIcons.FaBook/> My repositories</a>
          <a className="nav-link mb-2" id="v-pills-school-projects-tab" data-toggle="pill" href="#v-pills-school-projects" role="tab" aria-controls="v-pills-school-projects" aria-selected="false"><FIcons.FaUserGraduate/> School projects</a>
          <a className="nav-link mb-2" id="v-pills-personnal-initiative-tab" data-toggle="pill" href="#v-pills-personnal-initiative" role="tab" aria-controls="v-pills-personnal-initiative" aria-selected="false"><FIcons.FaLightbulb/> Personnal initiatives</a>
        </div>
        <div className="p-4 col-12 col-lg-9 tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade pl-0 pl-lg-5 show active " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <h1 className="white">My profile.</h1>
            <p className="white">Welcome on this page ! Here's à quick overview of my profile before accessing to my projects.</p>

            <div className="bordered col-12 pt-4 pb-4 d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
              <div className="col-12 col-lg-3">
                <img style={{maxWidth: "100%"}} src={this.state.profile.avatar_url} alt="Enzo Avagliano's logo"/>
              </div>
              <div className="col-12 col-lg-9 white mt-5 mt-lg-0">
                <h3 className="mb-4 border-bottom pb-2"><FIcons.FaUser/> {this.state.profile.name}</h3>
                <h5><FIcons.FaGithub/> {this.state.profile.login}</h5>
                <h5><FIcons.FaTwitter/> Twitter</h5>
                <h5><FIcons.FaBirthdayCake/> Nov 9, 2000</h5>
                <h5><FIcons.FaBook/> Public repositories : {this.state.repos.length}</h5>
                <div className="d-flex flex-column">
                  <h5><FIcons.FaCode/> BIO :</h5>
                  <p>{this.state.profile.bio}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade pl-0 pl-lg-5" id="v-pills-repos" role="tabpanel" aria-labelledby="v-pills-repos-tab">
            <h1 className="white">My repositories.</h1>
            <p className="white">Organized in alphabetical order [A-Z]</p>
            <div className="p-4 col-12 d-flex flex-wrap white justify-content-center">
            {
              this.state.repos.map(function(item, index){
                return(
                  <div key={index} className="repo-card m-3 p-2">
                    <div className="repo-header">
                      <h4 className="text-truncate">{item.name}</h4>
                    </div>
                    <div className="repo-body p-2">
                      {
                        item.description != null &&
                        <p>{item.description}</p>
                      }

                      {
                        item.description == null &&
                        <p className="mr-2"><FIcons.FaBan/> No description</p>
                      }
                    </div>
                    <div className="repo-lang d-flex align-items-baseline pl-2">
                      {
                        item.language != null &&
                        <p className="mr-2"><FIcons.FaFileCode/> {item.language}</p>
                      }

                      {
                        item.language == null &&
                        <p className="mr-2"><FIcons.FaFileCode/> Not specified</p>
                      }
                    </div>
                    <div className="repo-update d-flex align-items-baseline pl-2">
                      <p><FIcons.FaRedo/> : <Timestamp relative date={item.updated_at}/></p>
                    </div>
                    <div className="repo-footer">
                      <a className="nav-link white" target="_blank" href={item.html_url}>View on <FIcons.FaGithub/></a>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
          <div className="tab-pane fade pl-0 pl-lg-5" id="v-pills-school-projects" role="tabpanel" aria-labelledby="v-pills-school-projects-tab">
            <h1 className="white">My school projects.</h1>
            <div className="p-4 col-12 d-flex flex-wrap white justify-content-center">
              <h4>Specific sections are coming soon.</h4>
            </div>
          </div>
          <div className="tab-pane fade pl-0 pl-lg-5" id="v-pills-personnal-initiative" role="tabpanel" aria-labelledby="v-pills-personnal-initiative-tab">
            <h1 className="white">My personnal initiatives.</h1>
            <div className="p-4 col-12 d-flex flex-wrap white justify-content-center">
              <h4>Specific sections are coming soon.</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
