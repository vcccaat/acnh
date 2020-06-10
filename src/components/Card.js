import React from 'react';
import '../containers/App.css';


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
    	<div className={category==="bugs"?"item-card-bugs":"item-card-fish"}>
        <img alt="icon"
        src={require(`../../public/images/${category}/${item_id}.png`)}
        />
          <h4 className="name-text">{name}</h4>
          {info}
      </div>
    )
    }
    else if  (category === 'villagers') {
      info = <p>种族:{species} <br/> 性格:{personality} <br/>生日: {birthday}</p>
      return (
      <div className="item-card">
        <img alt="icon"
        src={require(`../../public/images/${category}/${item_id}.png`)}
        />
        <h4 className="name-text">{name}</h4>
        {info}
      </div>
    );
    }
    else if (category === 'furnitures') {
      info =<p>价格: {buyPrice===null?'需DIY':buyPrice}</p>
      return (
      <div className="item-card">
        <img alt="icon"
        src={require(`../../public/images/${category}/${imageNames[0]}.png`)} 
        />
        <h4 className="name-text">{name}</h4>
        {info}
      </div>
      );
    }
}

export default Card;
