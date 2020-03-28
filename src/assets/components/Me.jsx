import React, {Component} from 'react';
import GitData from './GitData.jsx';
import '../sass/me.scss';


function AboutCard(props){
  return(
    <div className="mt-3 d-flex flex-column text-center">
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  );
}

class Me extends Component{

  state = {
    user: {}
  }

  componentDidMount(){
    fetch("https://api.github.com/users/EloxFire")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        user: {
          name: data.name,
          repos: data.public_repos
        }
      })
    })
  }

  render(){
    const {user} = this.state;
    return(
      <div id="meBody" className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex flex-column">
        <h1 className="ml-3 sectionTitlePurpleWithBorder">About me.</h1>
        <div className="d-flex justify-content-center flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row">
          <div className="aboutMe col-11 col-xs-11 col-sm-11 col-md-5 col-lg-5 m-md-5 m-lg-5">
            <h3 className="littleSectionTitlePurple">Nice to meet you !</h3>
            <p>
            Hi ! My name's Enzo Avagliano. I'm a french computer engineering student in the beautiful town of Aix-en-Provence.
            I'm in second year out of 5 at Ynov Campus.
            </p>
            <h3 className="littleSectionTitlePurple">What I love ?</h3>
            <p>
            Computing.. of course, but I'm also in love with music, streaming, photography (more precisely astrophotography). But one thing is more important than all the others : friendship. It's the key to happiness.
            </p>
          </div>

          <div className="keyData d-flex flex-column col-11 col-xs-11 col-sm-11 col-md-5 col-lg-5 m-5">
            <h3 className="littleSectionTitleWhite">Some numbers.</h3>
            <div className="aboutDataContainer d-flex flex-wrap justify-content-around align-items-center">
              <AboutCard title="19" subtitle="years old"/>
              <AboutCard title="2" subtitle="hobbies"/>
              <AboutCard title="1" subtitle="code editor"/>
              <GitData user={user}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Me;
