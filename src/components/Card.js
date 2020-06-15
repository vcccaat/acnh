import React from 'react';
import '../containers/App.css';
import ImageLoader from 'react-load-image';
import BeatLoader from "react-spinners/BeatLoader";

const Card = ({ name, price, shadow, location, id, time, month, region, category,birthday,buyPrice, imageNames,species,personality}) => {

  const item_id = id
  const time_display = time?time:'随机'
  let info = ''
  let fishInfo = <br/>


  if (category === 'fish' || category === 'bugs' ){
      if (category==="fish") {
          fishInfo = <span> <br/> 鱼影: {shadow}<br/> 
           地点: {location}<br/></span>
       }    
    let month_display = ''
    if (region !== '') 
      {month_display = <span>月份: {month?month:'常见'} </span>}
    
    info = <p>价格: {price}  <br/>  时间: {time_display} 
     {fishInfo}  {month_display}</p> 

    return (
    	<div className="item-card">
          <ImageLoader
          src={require(`../assets/images/${item_id}${category}.png`)}>
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
      info = <p>种族:{species} <br/> 性格:{personality} <br/>生日: {birthday}</p>
      return (
      <div className="item-card">
        <ImageLoader
          src={require(`../assets/images/${item_id}${category}.png`)}>
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
      info =<p>价格: {buyPrice===null?'需DIY':buyPrice}</p>
      return (
      <div className="item-card">
        <ImageLoader
          src={require(`../assets/images/${imageNames}.png`)}>
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
