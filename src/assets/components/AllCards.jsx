import React from 'react';
import '../sass/tech.scss';

interface CardProps{
  card: Card;
}
const AllCards: React.FC<CardProps> = ({card}) => (
  <div className="cardContainer">
    <div className="d-flex flex-column text-center m-3">
      <img className="cardImage" src={require(`../img/${card.logo}`)} alt={card.name}/>
      <p className="cardTitle mt-3"><span className="cardTitleSlash">/</span> {card.name}</p>
    </div>
  </div>
)

export default AllCards;
