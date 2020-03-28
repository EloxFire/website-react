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
        <div className="col-12 text-center">
          <p>Here's a full view of my public repos on Github. I put <i>almost</i> everything I do on Github !</p>
        </div>

        <div className="container d-flex flex-wrap justify-content-center">
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
    )
  }
}

export default Work;
