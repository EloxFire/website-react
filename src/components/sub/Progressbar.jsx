import React from 'react';

function Progressbar(props){

  var styleProgress = {
    width: `${props.value}%`
  }

  return(
    <div>
      <h6>{props.title}</h6>
      <div class="progress">
        <div class="progress-bar bg-purple" role="progressbar" style={styleProgress} aria-valuenow={props.value} aria-valuemin="0" thisaria-valuemax="100">{props.value}%</div>
      </div>
    </div>
  )
}
export default Progressbar;
