import React, {Component} from 'react'

class GitData extends Component{
  render(){
    const {user} = this.props;
    return(
      <div className="mt-3 d-flex flex-column text-center">
        <h2>{user.repos}</h2>
        <p>repositories</p>
      </div>
    )
  }
}

export default GitData;
