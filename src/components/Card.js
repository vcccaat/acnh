import React from 'react';
import '../containers/App.css';
import ImageLoader from 'react-load-image';
import BeatLoader from "react-spinners/BeatLoader";
import Translate from 'react-translate-component';

const Card = ({ name, price, shadow, location, id, time, month, region, category,birthday,buyPrice, imageNames,species,personality}) => {

  const item_id = id
  const time_display = time?time:<Translate content="card.random" />
  let info = ''
  let fishInfo = <br/>


  if (category === 'fish' || category === 'bugs' ){
      if (category==="fish") {
          fishInfo = <span> <br/> <Translate content="card.fishShadow"/>: {shadow}<br/> 
           <Translate content="card.fishLocation"/> : {location}<br/></span>
       }    
    let month_display = ''
    if (region !== '') 
      {month_display = <span><Translate content="card.month"/>
       : {month?month:<Translate content="card.common"/> } </span>}
    
    info = <p><Translate content="card.price"/> : {price}  <br/> 
            <Translate content="card.time"/> : {time_display} 
            {fishInfo}  {month_display}</p> 

    return (
    	<div className="item-card">
          <ImageLoader
          src={process.env.PUBLIC_URL+`/images/${item_id}${category}.png`}>
          <img alt="icon"/>
          <div>Error!</div>
          <BeatLoader color={"#50E3C2"}/>
        </ImageLoader>
          <h4 className="name-text">{name}</h4>
          {info}
      </div>
    )
    }
    else if  (category === 'villagers') {
      info = <p><Translate content="card.species"/>: {species} <br/> 
                <Translate content="card.personality"/>: {personality} <br/>
                <Translate content="card.birthday"/>: {birthday}</p>
      return (
      <div className="item-card">
        <ImageLoader
          src={process.env.PUBLIC_URL+`/images/${item_id}${category}.jpg`}>
          <img alt="icon"/>
          <div>Error!</div>
          <BeatLoader color={"#50E3C2"}/>
        </ImageLoader>
        <h4 className="name-text">{name}</h4>
        {info}
      </div>
    );
    }
    else if (category === 'furnitures') {
      info =<p><Translate content="card.price"/>
            : {buyPrice===null?<Translate content="card.diy"/>:buyPrice}</p>
      return (
      <div className="item-card">
        <ImageLoader
          src={process.env.PUBLIC_URL+`/images/${imageNames}.png`}>
          <img alt="icon"/>
          <div>Error!</div>
          <BeatLoader color={"#50E3C2"}/>
        </ImageLoader>
        <h4 className="name-text">{name}</h4>
        {info}
      </div>
      );
    }
}

export default Card;
