import React from 'react';

const Card = ({ name, price, id, time, month, region, category }) => {
  const item_id = id+1
  const time_display = time?time:'随机'

  let info = ''
  if (category === 'fish' || category === 'bugs' ){
    let month_display = ''
    if (region !== '') 
      {month_display = <p>Month: {month?month:'常见'} </p>}
    info = <div> <p>价格: {price}</p>
        <p>时间: {time_display}</p> {month_display} </div>
  }
  return (
  	<div className="item-card">
      <img alt='items' src={`https://acnhapi.com/v1/images/${category}/${item_id}?size=200x200`} />
        <h4 className="name-text">{name}</h4>
        {info}
    </div>
  );
}

export default Card;
