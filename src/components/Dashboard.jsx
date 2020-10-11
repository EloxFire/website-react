import React, {Component} from 'react';
import axios from 'axios';
import '../sass/pages.scss';

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      ideas: [],
      nonCertifiedIdeas: [],
      certifiedIdeas: [],
      ideaSelectionFieldCertification: "",
      ideaSelectionFieldDecertification: "",
    }

    this.handleChangeIdeaSelectionCertification = this.handleChangeIdeaSelectionCertification.bind(this);
    this.handleChangeIdeaSelectionDecertification = this.handleChangeIdeaSelectionDecertification.bind(this);
    this.handleSubmitIdeaCertification = this.handleSubmitIdeaCertification.bind(this);
  }

  getDevdeasIdeas(){
    fetch("https://projects-enzoavagliano.fr:9000/getideas")
    .then(res => res.json())
    .then(res => this.setState({
      ideas: res
    }));
  }

  getDevdeasNonCertifiedIdeas(){
    fetch("https://projects-enzoavagliano.fr:9000/getnoncertifiedideas")
    .then(res => res.json())
    .then(res => this.setState({
      nonCertifiedIdeas: res
    }));
  }

  getDevdeasCertifiedIdeas(){
    fetch("https://projects-enzoavagliano.fr:9000/getcertifiedideas")
    .then(res => res.json())
    .then(res => this.setState({
      certifiedIdeas: res
    }));
  }

  handleChangeIdeaSelectionCertification(e){
    this.setState({
      ideaSelectionFieldCertification: e.target.value
    });
    console.log("Changed field :", this.state.ideaSelectionFieldCertification);
  }

  handleChangeIdeaSelectionDecertification(e){
    this.setState({
      ideaSelectionFieldDecertification: e.target.value
    });
    console.log("Changed field :", this.state.ideaSelectionFieldDecertification);
  }

  handleSubmitIdeaCertification(e){
    e.preventDefault();

    let ic = {
      name: this.state.ideaSelectionFieldCertification,
    }

    axios.post('https://projects-enzoavagliano.fr:9000/certifyideas', ic)
      .then(res => console.log("data sent"))
      .catch(err => console.log(err.data));


    setTimeout(
      function() {
        window.location.reload(false);
      }
      .bind(this),
      500
    );
  }

  handleSubmitIdeaDecertification(e){
    e.preventDefault();

    let ic = {
      name: this.state.ideaSelectionFieldDecertification,
    }

    axios.post('https://projects-enzoavagliano.fr:9000/decertifyideas', ic)
      .then(res => console.log("data sent"))
      .catch(err => console.log(err.data));


    setTimeout(
      function() {
        window.location.reload(false);
      }
      .bind(this),
      500
    );
  }

  componentDidMount(){
    this.getDevdeasIdeas();
    this.getDevdeasNonCertifiedIdeas();
    this.getDevdeasCertifiedIdeas();
  }

  render(){
    return(
      <div id="dashboard" className="d-flex flex-column flex-lg-row">
        <div className="col-12 col-lg-3 p-4">
          <h2>Admin dashboard</h2>
          <div className="p-2 nav nav-pills flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <h4 className="mt-2">Skills</h4>
            <a className="nav-link active" id="v-pills-addskills-tab" data-toggle="pill" href="#v-pills-addskills" role="tab" aria-controls="v-pills-addskills" aria-selected="true">Add skills</a>
            <a className="nav-link" id="v-pills-removeskills-tab" data-toggle="pill" href="#v-pills-removeskills" role="tab" aria-controls="v-pills-removeskills" aria-selected="false">Remove skills</a>
            <a className="nav-link" id="v-pills-updateskills-tab" data-toggle="pill" href="#v-pills-updateskills" role="tab" aria-controls="v-pills-updateskills" aria-selected="false">Update skills</a>

            <h4 className="mt-5">Devdeas</h4>
            <a className="nav-link" id="v-pills-certifyideas-tab" data-toggle="pill" href="#v-pills-certifyideas" role="tab" aria-controls="v-pills-certifyideas" aria-selected="true">Certify ideas</a>
            <a className="nav-link" id="v-pills-decertifyideas-tab" data-toggle="pill" href="#v-pills-decertifyideas" role="tab" aria-controls="v-pills-decertifyideas" aria-selected="true">Decertify ideas</a>
            <a className="nav-link" id="v-pills-removeideas-tab" data-toggle="pill" href="#v-pills-removeideas" role="tab" aria-controls="v-pills-removeideas" aria-selected="false">Remove ideas</a>
            <a className="nav-link" id="v-pills-updateideas-tab" data-toggle="pill" href="#v-pills-updateideas" role="tab" aria-controls="v-pills-updateideas" aria-selected="false">Update idea fields</a>

            <h4 className="mt-5">Website</h4>
            <a className="nav-link" id="v-pills-updatetext-tab" data-toggle="pill" href="#v-pills-updatetext" role="tab" aria-controls="v-pills-updatetext" aria-selected="true">Update text</a>
          </div>
        </div>
        <div className="tab-content p-4 col-12 col-lg-9" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-addskills" role="tabpanel" aria-labelledby="v-pills-addskills-tab">
            <h2>Add new skill :</h2>
          </div>
          <div className="tab-pane fade" id="v-pills-removeskills" role="tabpanel" aria-labelledby="v-pills-removeskills-tab">
            <h2>Remove skill :</h2>
          </div>
          <div className="tab-pane fade" id="v-pills-updateskills" role="tabpanel" aria-labelledby="v-pills-updateskills-tab">
            <h2>Update skill :</h2>
          </div>

          <div className="tab-pane fade" id="v-pills-certifyideas" role="tabpanel" aria-labelledby="v-pills-certifyideas-tab">
            <h2>Certify an idea :</h2>
            <div className="mt-5">
              <form onSubmit={this.handleSubmitIdeaCertification} className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <label className="white" htmlFor="selectIdeaToCertify">Idea to certify :</label>
                  <select onChange={this.handleChangeIdeaSelectionCertification} id="selectIdeaToCertify" className="form-control form-control-sm">
                    {
                      this.state.nonCertifiedIdeas.map(function(item, index){
                        return(
                          <option key={index}>{item.name}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mb-2 bg-purple">Certify idea</button>
              </form>
            </div>
            <div className="ideasPanel col-12 col-lg-12 pt-3">
              <h4 className="white">Idea list :</h4>
              {
                this.state.nonCertifiedIdeas.map(function(item, index){
                  return(
                    <li className="white mt-3" style={{listStyleType: "none",textTransform:"uppercase",fontWeight:"bold"}} key={index}>
                      {item.name} <small className="white">{item.description}</small>
                    </li>
                  )
                })
              }
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-decertifyideas" role="tabpanel" aria-labelledby="v-pills-decertifyideas-tab">
            <h2>Decertify an idea :</h2>
            <div className="mt-5">
              <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <label className="white" htmlFor="selectIdeaToCertify">Idea to certify :</label>
                  <select id="selectIdeaToCertify" className="form-control form-control-sm">
                    {
                      this.state.certifiedIdeas.map(function(item, index){
                        return(
                          <option key={index}>{item.name}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mb-2 bg-purple">Decertify idea</button>
              </form>
            </div>
            <div className="ideasPanel col-12 col-lg-12 pt-3">
              <h4 className="white">Idea list :</h4>
              {
                this.state.certifiedIdeas.map(function(item, index){
                  return(
                    <li className="white mt-3" style={{listStyleType: "none",textTransform:"uppercase",fontWeight:"bold"}} key={index}>
                      {item.name} <small className="white">{item.description}</small>
                    </li>
                  )
                })
              }
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-removeideas" role="tabpanel" aria-labelledby="v-pills-removeideas-tab">
            <h2>Remove an idea :</h2>
          </div>
          <div className="tab-pane fade" id="v-pills-updateideas" role="tabpanel" aria-labelledby="v-pills-updateideas-tab">
            <h2>Update an idea :</h2>
          </div>

          <div className="tab-pane fade" id="v-pills-updatetext" role="tabpanel" aria-labelledby="v-pills-updatetext-tab">
            <h2>Update a text on the website :</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
