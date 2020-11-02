import React, { Component } from 'react';
import * as FIcons from "react-icons/fa";
import axios from 'axios';

const API_PATH = 'https://enzoavagliano.fr/mailer/mailer.php';
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


  render(){
    return(
      <div id="contact" className="d-flex flex-column flex-lg-row">
        <div className="p-4 col-12 col-lg-3 white">
          <h1 className="mt-lg-5">Contact me.</h1>
          <div className="mt-4 mt-lg-5">
            <h4><FIcons.FaPhone/> My Phone.</h4>
            <h6>+33 (0)6.69.07.42.59</h6>
          </div>
          <div className="mt-4 mt-lg-5">
            <h4><FIcons.FaEnvelope/> My mail.</h4>
            <h6>enzo.avagliano@ynov.com</h6>
          </div>
          <div className="mt-4 mt-lg-5">
            <h4><FIcons.FaLinkedin/> My Linkedin.</h4>
            <h6>enzo avagliano</h6>
          </div>
          <div className="mt-4 mt-lg-5">
            <h4><FIcons.FaLocationArrow/> My city.</h4>
            <h6>Aix-en-Provence, France</h6>
          </div>
        </div>
        <div className="col-12 col-lg-9 p-4">
          <h1 className="mt-lg-5 white">Or you can use this form.</h1>
          <form className="mt-5">
            <div className="form-row">
              <div className="form-group col-md-4">
                <label className="required" htmlFor="inputMail">Your Email.</label>
                <input type="email" className="form-control" id="inputMail" placeholder="Your mail adress goes here."/>
              </div>
              <div className="form-group col-md-4">
                <label className="required" htmlFor="inputName">Your name.</label>
                <input type="text" className="form-control" id="inputName" placeholder="Your name goes here."/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputSubject">The subject.</label>
                <input type="text" className="form-control" id="inputSubject" placeholder="Enter a subject"/>
              </div>
            </div>
            <div className="form-group">
              <label className="required" htmlFor="inputMessage">Your message.</label>
              <textarea className="form-control" id="inputMessage" rows="6" placeholder="Your message goes here."></textarea>
            </div>
            <button onClick={e => this.handleFormSubmit(e)} type="submit" className="btn btn-primary bg-purple">Send message</button>
          </form>
          <p className="required white mt-2">Required</p>
          <div className="col-12 querry text-center mt-2">
            {this.state.mailSent && <p className="ok">Thank you ! Your message has been sent.</p>}
            {this.state.error && <p className="notok">Something went wrong : {this.state.error}</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
