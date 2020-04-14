import React, {Component} from 'react';
import Timestamp from 'react-timestamp';
import '../sass/work.scss';

let reposUrl = 'https://api.github.com/users/EloxFire/repos';
let userUrl = 'https://api.github.com/users/EloxFire';

class Work extends Component{
  constructor(props){
    super(props);
    this.state = {
      repositories : [],
      user: []
    };
  }

  componentDidMount(){
    document.title = "Enzo Avagliano - Work";
    Promise.all([
        fetch(reposUrl),
        fetch(userUrl)
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => this.setState({
        repositories: data1,
        user: data2
    }));
  }

  render(){
    const user = this.state.user;
    return(
      <div id="work">
        <h1 className="sectionTitlePurpleWithBorder">My work / projects.</h1>
        <div className="col-12 text-center mt-3 mb-3">
          <p>Here's a full view of my work on Github. Almost everything I do is public on Github !</p>
        </div>

        <div className="col-12 d-flex flex-lg-row flex-md-row flex-sm-column flex-xs-column flex-column justify-content-center">

          <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center mb-3">
            <div className="card cardUser cardLimited sticky-top p-2">
              <img className="userImgCard mb-2" src={user.avatar_url} alt="EloxFire's Github avatar"/>

              <h5 className="card-text">{user.name}</h5>
              <p className="card-title">{JSON.stringify(user.login)}</p>

              <p className="card-text">{user.bio}</p>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">Public repos : {user.public_repos}</li>
                <li className="list-group-item">Followers : {user.followers}</li>
              </ul>

              <a target="_blank" rel="noopener noreferrer" href={user.html_url} className="btn btn-primary mt-xs-1 mt-sm-1 mt-md-3 mt-lg-3">Go to profil</a>
            </div>
          </div>

          <div className="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 d-flex flex-wrap justify-content-center">
            {this.state.repositories.map(function(item, index){
              return(
                <div key={index} className="col-3 card mb-3 ml-3 mr-3">
                  <div className="card-body">
                    <div className="text-center">
                      <h5 className="card-title">{JSON.stringify(item.name)}</h5>
                    </div>
                    <div className="text-justify mb-2">
                      {item.description == null &&
                        <p className="card-text">No description.</p>
                      }
                      <p className="card-text">{item.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Langs : {item.language}</li>
                      <li className="list-group-item">Stars : {JSON.stringify(item.stargazers_count)}</li>
                      <li className="list-group-item">Forks : {JSON.stringify(item.forks)}</li>
                    </ul>
                    <a target="_blank" rel="noopener noreferrer" href={item.html_url} className="btn btn-primary mt-3 mb-3">Github</a>
                    <p className="card-text"><small className="text-muted">Last update : <Timestamp relative autoUpdate date={item.updated_at}/> </small></p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
