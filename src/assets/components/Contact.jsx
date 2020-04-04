import React, {Component} from 'react';
import axios from 'axios';
import '../sass/contact.scss';

const API_PATH = 'http://localhost:3000/api/contact/index.php';
class Contact extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: '',
      usermail: '',
      userobject: '',
      usermessage: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: {'content-type': 'application/json'},
      data: this.state
    })
    .then(result => {
      this.setState({
        mailSent: result.data
      })
    })
    .catch(error => this.setState({error: error.message}));
  }

  render(){
    return(
      <div id="contact" className="container d-flex align-items-center"> {/*ADD CONTAINER CLASS HERE*/}
        {<div className="d-flex flex-column col-12">
          <div className="col-12 mb-5">
            <h2 className="sectionTitlePurpleWithBorder negativeTitle">You can contact me here !</h2>
          </div>

          <form className="col-12 mt-5" action="#">
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input type="text" className="form-control" id="name" placeholder="Your name here..." value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="mail">Email address</label>
              <input type="text" className="form-control" id="mail" aria-describedby="emailHelp" placeholder="Your email goes here..." value={this.state.usermail} onChange={e => this.setState({usermail: e.target.value})}/>
              <small id="emailHelp" className="form-text text-muted">Your email will <strong>never</strong> be shared with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="messageObject">Message object</label>
              <input type="text" className="form-control" id="messageObject" placeholder="Object goes here..." value={this.state.userobject} onChange={e => this.setState({userobject: e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="mesageContent">Message</label>
              <textarea className="form-control" id="messageContent" rows="3" placeholder="Your text goes here..." value={this.state.usermessage} onChange={e => this.setState({usermessage: e.target.value})}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={e => this.handleFormSubmit(e)}>Send your message !</button>
            <div>
              {this.state.mailSent &&
                <div>Thank you for contcting us.</div>
              }
            </div>
          </form>
        </div>}

        {/*<div className="d-flex flex-column justify-content-center align-items-center title-container p-5">
          <h6>Comming soon . . .</h6>
          <h1>PAGE UNDER DEVELOPMENT</h1>
        </div>*/}
      </div>
    )
  }
}

export default Contact;
