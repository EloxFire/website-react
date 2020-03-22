import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReposData from './ReposData.jsx';
import '../sass/work.scss';


class Work extends Component{

  state = {
    repo: {}
  }

  getRepoData = () => {
    fetch("https://api.github.com/users/EloxFire/repos")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        repo: {
          name: data.name,
          url: data.url,
          create_date: data.created_at,
          last_update: data.updated_at
        }
      })
    })
  }
  render(){
    const {repo} = this.state;
    return(
      <div id="work">
        <h1 className="sectionTitlePurpleWithBorder">My work / projects.</h1>

        <div className="col-12 d-flex justify-content-center">
          <div className="workBody col-12 col-xs-12 col-sm-12 col-md-10 col-ld-10">
            
            <ReposData repo={repo}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
