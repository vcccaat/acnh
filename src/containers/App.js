import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {Region, Month, Category, FilterPrice} from '../components/Filter';
import {FishShadowBtn,FishLocationBtn} from '../components/Filter';
import ScrollButton from '../components/ScrollButton';
import './App.css';
import Flowers from '../components/Flowers';
import counterpart from 'counterpart';
import eng from '../lang/eng'
import chi from '../lang/chi'


counterpart.registerTranslations('en',eng)
counterpart.registerTranslations('chi',chi)
counterpart.setLocale('chi')


const urls=[process.env.PUBLIC_URL+'/data/fish.json',
    process.env.PUBLIC_URL+'/data/bugs.json',
    process.env.PUBLIC_URL+'/data/villagers.json',
    process.env.PUBLIC_URL+'/data/furnitures.json',
    ]

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
      rank: '',  
      language: 'chi',
      isLoading: true
    }
  }


 async componentDidMount() {
  const [fish,bugs,villagers,furnitures] = await Promise.all(urls.map(url=>
  fetch(url).then(resp => resp.json())))
  await this.setState({ 
  items:{
    fish: Object.entries(fish), 
    bugs: Object.entries(bugs),
    villagers: Object.entries(villagers),
    furnitures: Object.entries(furnitures)
  },
  isLoading: false})
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
    this.setState({category:category, searchfield:'', fishInfo:{
        shadow:'',
        location:''
      }
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
          if (this.state.language === 'chi'){
          return a[1]['name-CNzh'].includes(searchfield);}
          else {
            return a[1]['name-EUen'].includes(searchfield.toLowerCase());}
      })
    }

    // no other filters for villagers
    if (this.state.category==='villagers'||this.state.category==='flowers') 
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
        const monthArray = item[1][region]
        return monthArray.includes(this.state.month)
      })
    }

    // fish location filter
    if (this.state.category === 'fish' && this.state.fishInfo.location !== ''){
      filteredItem = filteredItem.filter(item => {
        return item[1].location === this.state.fishInfo.location})
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

    const regionMonthFilter = this.state.category==='fish'||this.state.category==='bugs'?
                        <div>
                         <Region setRegion={this.setRegion}/>
                        <Month setMonth={this.setMonth}/> </div>:''
    const moreFishInfo = this.state.category==='fish'?
              <div>
                <FishShadowBtn setFishShadow={this.setFishShadow}/>
               <FishLocationBtn setFishLocation={this.setFishLocation}/>
               </div>: ''
    const setRank = this.state.category==='fish'||this.state.category==='bugs'
                    ||this.state.category==='furnitures'?
                    <div className="filter">
                    <FilterPrice setRank={this.setRank}/>
                    </div>:''

    const serachBox = this.state.category !== 'flowers'? 
                    <SearchBox searchfield={this.state.searchfield} searchChange={this.onSearchChange}/>:''
    
    const cardContent =  <div className='container'>       
                <CardList items={item} region={this.state.region} 
                          category={this.state.category}
                          language={this.state.language} />
                          </div>
    const languageSelect = <div className="btn-group " role="group">
                            <button className="btn btn-light btn-sm"
                            onClick={()=>{counterpart.setLocale('en'); 
                            this.setState({language:'en'}) }}>
                            English </button> 
                            <button className="btn btn-light btn-sm"
                            onClick={()=>{counterpart.setLocale('chi');
                            this.setState({language:'chi'})}}>
                            中文 </button>
                            </div>

    return  (
    this.state.isLoading ?
      <div className='load-box'>
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <h1>Loading</h1>
      </div>
      : 
        <div className='tc'>
        {<div className="tr">{languageSelect}</div>}
          <h1 className='f1 mt-3'>Animal Crossing</h1>
            <div className="filter-row">
              <Category setCategory={this.setCategory}/>                        
              {regionMonthFilter}
              {moreFishInfo}
              {serachBox}
            </div> 
            {this.state.category !== 'flowers'?
                <div className="wrapper">
                {setRank}
                {cardContent}
                </div>:
           <Flowers/>}
          
            <div className="footer">          
            <span>本网站及其内容基于<a href="https://www.nintendo.com/">任天堂</a>游戏仅用于非商业性的个人用途，侵权请联系
            <a href="https://github.com/vcccaat/acnh"> GitHub </a> | <a href="https://weibo.com/u/6376162094?is_all=1">Weibo</a></span>
            <br/>
            <span>其他推荐资源：<a href="https://wiki.biligame.com/dongsen/%E9%A6%96%E9%A1%B5">动物森友会WIKI</a> | 
            <a href="https://animalcrossingworld.com/guides/new-horizons/"> Animal Crossing World</a> | <a href="https://villagerdb.com/">villagerdb</a></span>
            </div>

            <ScrollButton scrollStepInPx="100" delayInMs="10.66"/>
         
        </div>

      );
  }
}


export default App;