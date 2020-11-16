import React, { Component } from 'react';
import '../sass/pages.scss';

class NotFound extends Component{
  render(){
    return(
      <div id="notfound" className="d-flex flex-column justify-content-center align-items-center white">
        <h1 className="notFoundTitle">404</h1>
        <h6 className="notFoundSpan">Not found...</h6>
        <h1 className="mt-5 notFoundSentence">Looks like you've lost yourself.</h1>
        <a className="mt-5 notFoundLink" href="/home">Need a way home ?</a>
      </div>
    )
  }
}

export default NotFound;
