import React from 'react';
import Card from './Card';
import '../containers/App.css';

const CardList = ({ items,region,category }) => {
  if (category === 'fish' || category === 'bugs' ){
    return(
      items.map((item, i) => {
      return (
        <Card
          id={item[1].id-1}
          name={item[1].name['name-CNzh']}
          price={item[1].price}
          time={item[1].availability.time}
          month={item[1].availability[region]}
          region={region}
          category={category}
          />
          );
    }))   
  }
  else{
  return (
      items.map((item, i) => {
      return (
        <Card
          key={i}
          id={i}
          name={item[1].name['name-CNzh']}
          region={region}
          category={category}/>
    );
    }))
}
}

export default CardList;