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
      skills: [],
      ideaSelectionFieldCertification: "",
      ideaSelectionFieldDecertification: "",
      addSkillName: "",
      addSkillPercentage: "",
      addSkillLevel: "",
      addSkillLogo: "",
      removeSkillName: "",
    }


    this.handleChangeIdeaSelectionCertification = this.handleChangeIdeaSelectionCertification.bind(this);// Idea Certification field
    this.handleChangeIdeaSelectionDecertification = this.handleChangeIdeaSelectionDecertification.bind(this);// Idea decertification field
    this.handleChangeAddSkillName = this.handleChangeAddSkillName.bind(this) //Add skill name field
    this.handleChangeAddSkillPercentage = this.handleChangeAddSkillPercentage.bind(this) //Add skill name field
    this.handleChangeAddSkillLevel = this.handleChangeAddSkillLevel.bind(this) //Add skill name field
    this.handleChangeAddSkillLogo = this.handleChangeAddSkillLogo.bind(this) //Add skill name field
    this.handleChangeRemoveSkillName = this.handleChangeRemoveSkillName.bind(this);//Remove skill name field

    this.handleSubmitIdeaCertification = this.handleSubmitIdeaCertification.bind(this);// Idea Certification submit
    this.handleSubmitIdeaDecertification = this.handleSubmitIdeaDecertification.bind(this);// Idea decertification submit
    this.handleSubmitAddSkill = this.handleSubmitAddSkill.bind(this);// Add Skill submit
    this.handleSubmitRemoveSkill = this.handleSubmitRemoveSkill.bind(this);// Remove skill submit
  }

  getDevdeasIdeas(){
    fetch("https://projects-enzoavagliano.fr:9000/getideas")
    .then(res => res.json())
    .then(res => this.setState({
      ideas: res
    }));
  }

  getSkills(){
    fetch("https://projects-enzoavagliano.fr:9000/getskills")
    .then(res => res.json())
    .then(res => this.setState({
      skills: res
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

  handleChangeIdeaSelectionDecertification(e){
    this.setState({
      ideaSelectionFieldDecertification: e.target.value
    });
  }

  handleSubmitIdeaDecertification(e){
    e.preventDefault();

    let idc = {
      name: this.state.ideaSelectionFieldDecertification,
    }

    axios.post('https://projects-enzoavagliano.fr:9000/decertifyideas', idc)
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


  handleChangeAddSkillName(e){
    this.setState({
      addSkillName: e.target.value
    });
  }
  handleChangeAddSkillPercentage(e){
    this.setState({
      addSkillPercentage: e.target.value
    });
  }
  handleChangeAddSkillLevel(e){
    this.setState({
      addSkillLevel: e.target.value
    });
  }
  handleChangeAddSkillLogo(e){
    this.setState({
      addSkillLogo: e.target.value
    });
  }
  handleSubmitAddSkill(e){
    e.preventDefault();

    let newSkill = {
      name: this.state.addSkillName,
      percentage: this.state.addSkillPercentage,
      level: this.state.addSkillLevel,
      logo: this.state.addSkillLogo
    }

    axios.post('https://projects-enzoavagliano.fr:9000/addskill', newSkill)
    .catch(err => console.log(err));

    setTimeout(
      function() {
        window.location.reload(false);
      }
      .bind(this),
      500
    );
  }


  handleChangeRemoveSkillName(e){
    this.setState({
      removeSkillName: e.target.value
    });
  }
  handleSubmitRemoveSkill(e){
    e.preventDefault();

    let removeSkill = {
      name: this.state.removeSkillName,
    }

    axios.post('https://projects-enzoavagliano.fr:9000/removeskill', removeSkill)
    .catch(err => console.log(err));

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
    this.getSkills();
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
            <div className="mt-5">
              <form onSubmit={this.handleSubmitAddSkill}>
                <div class="form-group">
                  <label for="imputAddSkillName">Skill name</label>
                  <input onChange={this.handleChangeAddSkillName} type="text" class="form-control" id="imputAddSkillName" placeholder="Skill name"/>
                </div>
                <div class="form-group">
                  <label for="inputAddSkillPercentage">Skill percentage</label>
                  <input onChange={this.handleChangeAddSkillPercentage} type="number" class="form-control" id="inputAddSkillPercentage" placeholder="Skill percentage (Min 0 to Max 100)" max="100"/>
                </div>
                <div class="form-group">
                  <label for="inputAddSkillLevel">Skill level</label>
                  <select onChange={this.handleChangeAddSkillLevel} id="inputAddSkillLevel" className="form-control form-control-sm">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="inputAddSkillLogoPath">Skill logo path</label>
                  <input onChange={this.handleChangeAddSkillLogo} type="text" class="form-control" id="inputAddSkillLogoPath" placeholder="Skill logo path"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2 bg-purple">Add new skill</button>
              </form>
            </div>
            <div className="mt-3">
              <div className="ideasPanel col-12 col-lg-12 pt-3">
                <h4 className="white">Skill list :</h4>
                {
                  this.state.skills.map(function(item, index){
                    return(
                      <li className="white mt-3" style={{listStyleType: "none",textTransform:"uppercase",fontWeight:"bold"}} key={index}>
                        {item.name} <small className="white">{item.percentage}% / {item.level}</small>
                      </li>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-removeskills" role="tabpanel" aria-labelledby="v-pills-removeskills-tab">
            <h2>Remove skill :</h2>
            <div className="mt-5">
              <form onSubmit={this.handleSubmitRemoveSkill}>
                <div class="form-group">
                  <label for="imputRemoveSkillName">Skill name</label>
                  <select onChange={this.handleChangeRemoveSkillName} id="imputRemoveSkillName" className="form-control form-control-sm">
                    {
                      this.state.skills.map(function(item, index){
                        return(
                          <option key={index}>{item.name}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mb-2 bg-purple">Remove skill</button>
              </form>
            </div>
            <div className="mt-3">
              <div className="ideasPanel col-12 col-lg-12 pt-3">
                <h4 className="white">Skill list :</h4>
                {
                  this.state.skills.map(function(item, index){
                    return(
                      <li className="white mt-3" style={{listStyleType: "none",textTransform:"uppercase",fontWeight:"bold"}} key={index}>
                        {item.name} <small className="white">{item.percentage}% / {item.level}</small>
                      </li>
                    )
                  })
                }
              </div>
            </div>
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
              <form onSubmit={this.handleSubmitIdeaDecertification} className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <label className="white" htmlFor="selectIdeaToDecertify">Idea to certify :</label>
                  <select onChange={this.handleChangeIdeaSelectionDecertification} id="selectIdeaToDecertify" className="form-control form-control-sm">
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
