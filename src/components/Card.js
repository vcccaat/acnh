import React from 'react';
import '../containers/App.css';
import ImageLoader from 'react-load-image';
import ReactSpinner from 'react-bootstrap-spinner'



const Card = ({ name, price, shadow, location, id, time, month, region, category,birthday,buyPrice, imageNames}) => {

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
        <img alt="icon" src={require(`../../public/images/${category}/${item_id}.png`)}/>
          <h4 className="name-text">{name}</h4>
          {info}
      </div>
    )
    }
    else if  (category === 'villagers') {
      info = <p>生日: {birthday}</p>
      return (
      <div className="item-card">
        <ImageLoader
          src={`https://acnhapi.com/v1/images/villagers/${item_id}`}
        >
          <img alt="icon"/>
          <div>Error!</div>
          <ReactSpinner type="border" />
        </ImageLoader>
        <h4 className="name-text"><br/>{name}</h4>
        {info}
      </div>
    );
    }
    else if (category === 'furnitures') {
      info = <div><p>价格: {buyPrice===null?'需DIY':buyPrice}</p></div>
      return (
      <div className="item-card">
        <ImageLoader
          src={`https://acnhapi.com/v1/images/furniture/${imageNames[0]}`}
        >
          <img alt="icon"/>
          <div>Error!</div>
          <ReactSpinner type="border" />
        </ImageLoader>
        <h4 className="name-text">{name}</h4>
        {info}
      </div>
      );
    }
}

export default Card;
