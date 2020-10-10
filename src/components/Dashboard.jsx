import React, {Component} from 'react';
import * as Icon from 'react-bootstrap-icons';
import '../sass/pages.scss';

class Dashboard extends Component{
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
            <a className="nav-link" id="v-pills-removeideas-tab" data-toggle="pill" href="#v-pills-removeideas" role="tab" aria-controls="v-pills-removeideas" aria-selected="false">Remove ideas</a>
            <a className="nav-link" id="v-pills-updateideas-tab" data-toggle="pill" href="#v-pills-updateideas" role="tab" aria-controls="v-pills-updateideas" aria-selected="false">Update idea fields</a>
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
          </div>
          <div className="tab-pane fade" id="v-pills-removeideas" role="tabpanel" aria-labelledby="v-pills-removeideas-tab">
            <h2>Remove an idea :</h2>
          </div>
          <div className="tab-pane fade" id="v-pills-updateideas" role="tabpanel" aria-labelledby="v-pills-updateideas-tab">
            <h2>Update an idea :</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
