import React from 'react';
import '../../sass/home.scss';

interface TitleProps{
  title: String,
}

const Title:React.FC<TitleProps> = ({title}) => (
  <div className="w-100">
    <div style={{backgroundColor:"#9146FF",height:"3px",borderRadius:"3px",width:"80%"}}></div>
    <h1>{title}</h1>
  </div>
)

export default Title;
