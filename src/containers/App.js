import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {Region, Month, Category, FilterPrice} from '../components/Filter';
import {FishShadowBtn,FishLocationBtn} from '../components/Filter';
// import Scroll from '../components/Scroll';
import ScrollButton from '../components/ScrollButton';
import './App.css';
import ReactSpinner from 'react-bootstrap-spinner'
import fish from '../data/fish.json'
import bugs from '../data/bugs.json'
import villagers from '../data/villagers.json'
import furnitures from '../data/furnitures.json'


class App extends Component {
  constructor() {
    super()
    this.state = {
      items :{
        fish: [],
        bugs: [],
        villagers: [],
        furnitures: []
      },
      searchfield: '',
      region: '',
      month: '',
      category: 'fish',
      fishInfo:{
        shadow:'',
        location:''
      },
      rank: '',  //0图鉴顺序; 1从高到低; -1从低到高
      isLoading: true
    }
  }

    
  loadpage = () => {
    this.setState({ 
      items:{
        fish: Object.entries(fish), 
        bugs: Object.entries(bugs),
        villagers:Object.entries(villagers),
        furnitures:Object.entries(furnitures)
      },
      isLoading: false})
  }

  componentDidMount() {
    this.loadpage()
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  setRegion = (region) => {
    this.setState({region: region});
  }

  setMonth = (month) => {
    this.setState({month:month})
  }

  setCategory = (category) => {
    this.setState({category:category
    })    
  }

  setRank = (choice) => {
    this.setState({rank: choice})
  }

  setFishShadow = (shadow) => {
    var fishInfo = {...this.state.fishInfo}
    fishInfo.shadow = shadow
    this.setState({
      fishInfo
    })
  }

  setFishLocation= (location) => {
    var fishInfo = {...this.state.fishInfo}
    fishInfo.location = location
    this.setState({
      fishInfo
    })
  }

  filterItem = (array,searchfield) => {
    // search filter
    let filteredItem = array

    if (searchfield !== ''){
      filteredItem = filteredItem.filter(a =>{
        return a[1].name['name-CNzh'].includes(searchfield);
      })
    }

    // no other filters for villagers
    if (this.state.category==='villagers') 
      {return filteredItem}

    // rank filter
    if (this.state.rank === 2) {
      filteredItem = filteredItem.sort(function(a,b){return b[1].price-a[1].price}) 
    }
    if (this.state.rank === 3) {
      filteredItem = filteredItem.sort(function(a,b){return a[1].price-b[1].price}) 
    }
    if (this.state.rank === 1) {filteredItem = array}

    // month filter
    if (this.state.month !== '' && this.state.category!=='furnitures' 
      && this.state.category !== 'villagers'){
      filteredItem = filteredItem.filter(item => {
        const region = this.state.region===
        'month-southern'?'month-array-southern':'month-array-northern'
        const monthArray = item[1].availability[region]
        return monthArray.includes(this.state.month)
      })
    }

    // fish location filter
    if (this.state.category === 'fish' && this.state.fishInfo.location !== ''){
      filteredItem = filteredItem.filter(item => {
        return item[1].availability.location === this.state.fishInfo.location})
    }

    // fish shadow filter
     if (this.state.category === 'fish' && this.state.fishInfo.shadow !== ''){
      filteredItem = filteredItem.filter(item => {
        return item[1].shadow === this.state.fishInfo.shadow})
    }

    return filteredItem
  } 



  render() {
    const { items, searchfield } = this.state;
    let item = items[this.state.category];
    item = this.filterItem(item,searchfield);
    // console.log("check items=======",item)
    const regionMonthFilter = this.state.category==='fish'||this.state.category==='bugs'?
                        <div>
                         <Region setRegion={this.setRegion}/>
                        <Month setMonth={this.setMonth}/> </div>:''
    const moreFishInfo = this.state.category==='fish'?
              <div>
                <FishShadowBtn setFishShadow={this.setFishShadow}/>
               <FishLocationBtn setFishLocation={this.setFishLocation}/>
               </div>: ''
    const setRank = this.state.category==='fish'||this.state.category==='bugs'?
    <FilterPrice setRank={this.setRank}/>:''

    return  (
    this.state.isLoading ?
      <div className='tc loading' >
          <h1 >Loading</h1> 
          <ReactSpinner type="grow" color="secondary" />
          <ReactSpinner type="grow" color="secondary" />
          <ReactSpinner type="grow" color="secondary" />
      </div> : 
        <div className='tc'>
          <h1 className='f1 mt-3'>Animal Crossing</h1>
            <div className="filter-row">
              <Category setCategory={this.setCategory}/>                        
              {regionMonthFilter}
              {moreFishInfo}
              <SearchBox searchChange={this.onSearchChange}/>
            </div> 
          <div className="filter">
          {setRank}
          </div>
            <div className="container">       
              <CardList items={item} region={this.state.region} 
                        category={this.state.category} 
                        />
            </div>
            <div className="footer">
            <a href="https://github.com/vcccaat/AnimalCrossingDB">GitHub </a>
            </div>

            <ScrollButton scrollStepInPx="100" delayInMs="10.66"/>
         
        </div>
      );
  }
}

export default App;