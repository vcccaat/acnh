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
          id={item[1].id}
          name={item[1].name['name-CNzh']}
          price={item[1].price}
          time={item[1].availability.time}
          month={item[1].availability[region]}
          region={region}
          category={category}
          location={item[1].availability.location}
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
            id={item[1].id}
            name={item[1].name['name-CNzh']}
            birthday={item[1].birthday}
            category={category}
            gender={item[1].gender}
            personality={item[1].personality}
            species={item[1].species}/>
          )
          })
    );
}
else if (category === 'furnitures') {
  return (
    items.map((item, i) => {
    const imageNames = item[1].map(variant=>variant['file-name'])

    return (
      <Card
      key={i}
      name={item[1][0].name['name-CNzh']}
      buyPrice={item[1][0]['buy-price']}
      category={category}
      imageNames={imageNames}/> // 家具有不同颜色
      )
    })
);
}
}

export default CardList;