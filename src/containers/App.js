import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {Region, Month, Category, FilterPrice} from '../components/Filter';
// import Scroll from '../components/Scroll';
import ScrollButton from '../components/ScrollButton';
import './App.css';
import ReactSpinner from 'react-bootstrap-spinner'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      searchfield: '',
      region: '',
      month: '',
      category: 'fish',
      rank: '',  //0图鉴顺序; 1从高到低; -1从低到高
      isLoading: true
    }
  }

    
  loadpage = () => {
    fetch(`https://acnhapi.com/v1/${this.state.category}/`)
    .then(response=> response.json())
      .then(items => {this.setState({ items: items, isLoading: false})})
  }

  componentDidMount() {
    this.loadpage()
  }

  componentDidUpdate(prevProps, prevState){
    // if (this.state.category === 'villagers') {
    //   this.setState({region: '',
    //   month: '',
    //   rank: ''
    // })
    // }
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
    this.setState({category:category, isLoading: true, 
      region: '',
      month: '',
      rank: ''})    
  }

  setRank = (choice) => {
    this.setState({rank: choice})
  }

  filterItem = (array,searchfield) => {

    // search filter
    let filteredItem = array
    filteredItem = array.filter(a =>{
      return a[1].name['name-CNzh'].includes(searchfield);
    })

    if (this.state.category==='villagers') 
      {return filteredItem}

    // rank filter
      if (this.state.rank === 1) {
        filteredItem = filteredItem.sort(function(a,b){return b[1].price-a[1].price}) 
      }
      if (this.state.rank === -1) {
        filteredItem = filteredItem.sort(function(a,b){return a[1].price-b[1].price}) 
      }
    

    // month filter
    if (this.state.region !== '' && this.state.month !== '' ){
      filteredItem = filteredItem.filter(item => {
        const region = this.state.region===
        'month-southern'?'month-array-southern':'month-array-northern'
        const monthArray = item[1].availability[region]
        return monthArray.includes(this.state.month)
      })
    }


    return filteredItem
  } 

  render() {
    const { items, searchfield } = this.state;
    let items_array = Object.entries(items);
    items_array = this.filterItem(items_array,searchfield);

    return this.state.isLoading ?
      <div className='tc loading' >
          <h1 >Loading</h1> 
          <ReactSpinner type="grow" color="secondary" />
          <ReactSpinner type="grow" color="secondary" />
          <ReactSpinner type="grow" color="secondary" />
      </div>
      : 
      (
        <div className='tc'>
          <h1 className='f1 mt-3'>Animal Crossing</h1>
            <div className="filter-row">
              <Region setRegion={this.setRegion}/>
              <Month setMonth={this.setMonth}/>
              <Category setCategory={this.setCategory}/>  
              <SearchBox searchChange={this.onSearchChange}/>
          </div> 
          <div className="filter">
          <FilterPrice setRank={this.setRank}/>
          </div>
            <div className="container">       
              <CardList items={items_array} region={this.state.region} category={this.state.category}/>
            </div>
            <div className="footer">
            <a href="https://github.com/vcccaat/AnimalCrossingDB">GitHub </a>
            <p> 如有问题请联系: 602471671@qq.com </p>
            </div>

            <ScrollButton scrollStepInPx="100" delayInMs="10.66"/>
         
        </div>
      );
  }
}

export default App;