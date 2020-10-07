import React from 'react';

function Progressbar(props){

  var styleProgress = {
    width: `${props.value}%`
  }

  return(
    <div>
      <h6>{props.title} {props.logo == null && <span></span>} {props.logo != null && <img style={{maxHeight:"1.5em"}} src={require(`../../img/logos/${props.logo}`)} alt={props.title}/>}</h6>
      <div className="progress">
        <div className="progress-bar bg-purple" role="progressbar" style={styleProgress} aria-valuenow={props.value} aria-valuemin="0" thisaria-valuemax="100">Level : {props.level}</div>
      </div>
    </div>
  )
}
export default Progressbar;
