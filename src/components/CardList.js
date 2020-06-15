import React from 'react';
import Card from './Card';
import '../containers/App.css';

const CardList = ({ items,region,category}) => {
  if (category === 'fish' || category === 'bugs' ){
    return(
      items.map((item, i) => {
      return (
        <Card
          key={i}
          id={item[0]}
          name={item[1]['name-CNzh']}
          price={item[1].price}
          time={item[1].time}
          month={item[1][region]}
          region={region}
          category={category}
          location={item[1].location}
          shadow={item[1].shadow}
          />
          );
    }))   
  }
  else if (category === 'villagers'){
    return (
        items.map((item, i) => {
        return (
          <Card
            key={i}
            id={item[0]}
            name={item[1]['name-CNzh']}
            birthday={item[1].birthday}
            category={category}
            personality={item[1].personality}
            species={item[1].species}/>
          )
          })
    );
}
else if (category === 'furnitures') {
  return (
    items.map((item, i) => {
    return (
      <Card
      key={i}
      name={item[1]['name-CNzh']}
      buyPrice={item[1]['price']}
      category={category}
      imageNames={item[0]}/> 
      )
    })
);
}
}

export default CardList;