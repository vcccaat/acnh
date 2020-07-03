import React from 'react';
import Card from './Card';
import '../containers/App.css';


const CardList = ({ items,region,category,language}) => {
  
  if (category === 'fish' || category === 'bugs' ){
    return(
      items.map((item, i) => {
      return (
        <div style={{textTransform: 'capitalize'}}  key={i}>
        <Card
          key={i}
          id={item[0]}
          name={language==='en'?item[1]['name-EUen']:item[1]['name-CNzh']}
          price={item[1].price}
          time={item[1].time}
          month={item[1][region]}
          region={region}
          category={category}
          location={language==='en'?item[1]['location_eng']:item[1]['location']}
          shadow={language==='en'?item[1]['shadow_eng']:item[1]['shadow']}
          />
          </div>
          );
    }))   
  }
  else if (category === 'villagers'){
    return (
        items.map((item, i) => {
        return (
          <div style={{textTransform: 'capitalize'}}  key={i}>
          <Card
            key={i}
            id={item[0]}
            name={language==='en'?item[1]['name-EUen']:item[1]['name-CNzh']}
            birthday={item[1].birthday}
            category={category}
            personality={language==='en'?item[1]['personality_eng']:item[1]['personality']}
            species={language==='en'?item[1]['species_eng']:item[1]['species']}/>
            </div>
          )
          })
    );
}
else if (category === 'furnitures') {
  return (
    items.map((item, i) => {
    return (
      <div style={{textTransform: 'capitalize'}}  key={i}>
      <Card
      key={i}
      name={language==='en'?item[1]['name-EUen']:item[1]['name-CNzh']}
      buyPrice={item[1]['price']}
      category={category}
      imageNames={item[0]}/> 
      </div>
      )
    })
);
}
else if (category==='deepsea') {
  return (
    items.map((item, i) => {
    return (
      <div style={{textTransform: 'capitalize'}}  key={i}>
      <Card
      key={i}
      id={item[0]}
      name={language==='en'?item[1]['name-EUen']:item[1]['name-CNzh']}
      price={item[1].price}
      time={item[1].time}
      month={item[1][region]}
      region={region}
      category={category}
      /> 
      </div>
    )

}))
}
}

export default CardList;