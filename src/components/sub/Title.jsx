import React from 'react';
import '../../sass/pages.scss';

interface TitleProps{
  title: String,
}

const Title:React.FC<TitleProps> = ({title}) => (
  <div className="col-12">
    <div style={{backgroundColor:"#9146FF",height:"3px",borderRadius:"3px",width:"80%"}}></div>
    <h1>{title}</h1>
  </div>
)

export default Title;
