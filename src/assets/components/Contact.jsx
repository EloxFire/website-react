import React, {Component} from 'react';
import axios from 'axios';
import '../sass/contact.scss';

const API_PATH = 'https://enzoavagliano.fr/api/index.php';
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
  };

  componentDidMount(){
    document.title = "Enzo Avagliano - Contact";
  }

  render(){
    return(
      <div id="contact">
        <h2 className="sectionTitlePurpleWithBorder contactT">You can contact me here !</h2>
        <div className="container d-flex flex-column align-items-center"> {/*ADD CONTAINER CLASS HERE*/}
          <div className="d-flex flex-column col-12">

            <form className="col-12" action="#">
              <label className="required" htmlFor="">Required</label>
              <div className="form-group">
                <label className="required" htmlFor="name">Your name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Your name here..." value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
              </div>
              <div className="form-group">
                <label className="required" htmlFor="mail">Email address</label>
                <input type="email" className="form-control" id="mail" name="mail" aria-describedby="emailHelp" placeholder="Your email goes here..." value={this.state.usermail} onChange={e => this.setState({usermail: e.target.value})}/>
                <small id="emailHelp" className="form-text text-muted">Your email will <strong>never</strong> be shared with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="messageObject">Message object</label>
                <input type="text" className="form-control" id="messageObject" name="messageObject" placeholder="Object goes here..." value={this.state.userobject} onChange={e => this.setState({userobject: e.target.value})}/>
              </div>
              <div className="form-group">
                <label className="required" htmlFor="mesageContent">Message</label>
                <textarea className="form-control" id="messageContent" name="messageContent" rows="3" placeholder="Your text goes here..." value={this.state.usermessage} onChange={e => this.setState({usermessage: e.target.value})}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" id="submit" name="submit" onClick={e => this.handleFormSubmit(e)}>Send your message !</button>
              <div className="col-12 querry text-center mt-2">
                {this.state.mailSent && <p className="ok">Thank you ! Your message has been sent.</p>}
                {this.state.error && <p className="notok">Something went wrong : {this.state.error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
