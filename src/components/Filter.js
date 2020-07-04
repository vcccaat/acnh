import React from 'react';
import Translate from 'react-translate-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";

 class Region extends React.Component {
 	constructor(props){
 		super(props)
 		this.state = {
 			clicked: '',
 		}
 	}

 	handleClick(id){
 		this.setState({
 			clicked: id
 		})
 	}

	render() {
		return(
		<form >
		<Translate content="location" />
		 <div className="btn-group" role="group">
			<button type="button" id="south" className={this.state.clicked===1?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(1); this.props.setRegion('month-southern');}
			}><Translate content="south" /></button>
			<button type="button" id="north" className={this.state.clicked===2?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(2); this.props.setRegion('month-northern');}}>
			<Translate content="north" /></button>
		</div>
		</form>
		);
	}
}


class Month extends React.Component {
 	constructor(props){
 		super(props)
 		this.state = {
 			clicked: '',
 		}
 	}
 	handleClick(month){
 		this.setState({
 			clicked: month
 		})
 	}

 	onClickChange(input){
 		if (this.state.clicked === input) 
 			{input = ''}
 		this.handleClick(input);
		this.props.setMonth(input);
 	}

 	makeButtonGroup = (beginWith) => {
		const button = Array(6).fill().map((_,i)=> {
		const month = i + beginWith; 
		const element = 
			<button key={month} type="button" className={this.state.clicked===month?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange(month)}}>{month}
			<Translate content="month" /></button>
			
		return element
	})
		return <div className="btn-group" role="group">{button}</div>
 	}


 	render() {
 		const button1 = this.makeButtonGroup(1)
 		const button2 = this.makeButtonGroup(7)
		return (
			<div className="month-filter">
			<Translate content="monthPre" />
			{button1} {button2}
			</div>
		);
}
}

 class Category extends React.Component {
 	constructor(props){
		super(props)
		this.state = {
			clicked: 6,
		}
 	}

 	handleClick(id){
 		this.setState({
 			clicked: id
 		})
 	}

 	render() {
	return(
		<form>
		<div className="btn-group" role="group">
			<button type="button" className={this.state.clicked===6?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(6); this.props.setCategory('deepsea');}}>
			 <FontAwesomeIcon icon={faStar} color={'yellow'} /><Translate content="category.deepsea" /></button>
			<button type="button" className={this.state.clicked===1?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(1); this.props.setCategory('fish');}}>
			<Translate content="category.fish" /></button>
			<button type="button" className={this.state.clicked===2?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(2); this.props.setCategory('bugs');}}>
			<Translate content="category.bugs" /></button>
			<button type="button" className={this.state.clicked===3?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(3); this.props.setCategory('furnitures');}}>
			<Translate content="category.furnitures" /></button>
			<button type="button" className={this.state.clicked===4?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(4); this.props.setCategory('villagers');}}>
			<Translate content="category.villagers" /></button>
			<button type="button" className={this.state.clicked===5?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(5); this.props.setCategory('flowers');}}>
			<Translate content="category.flowers" /></button>
		</div>
		</form>
		);
}
}

 class FilterPrice extends React.Component {
 	constructor(props){
		super(props)
		this.state = {
			clicked: 1,
		}
 	}

 	handleClick(id){
 		this.setState({
 			clicked: id
 		})
 	}
 	render() { 
	return (
		<div className="btn-group" role="group">
			<button type="button" className={this.state.clicked===2?'btn btn-sm btn-secondary active responsive':'btn btn-sm btn-secondary responsive'}
			onClick={()=>{this.handleClick(2);this.props.setRank(2);}}>
			<Translate content="rank.HightoLow" /></button>
			<button type="button" className={this.state.clicked===3?'btn btn-sm btn-secondary active responsive':'btn btn-sm btn-secondary responsive'}
			onClick={()=>{this.handleClick(3); this.props.setRank(3);}}>
			<Translate content="rank.LowtoHigh" /></button>
		</div>	
		)
}
}

 class FishShadowBtn extends React.Component {
 	constructor(props){
		super(props)
		this.state = {
			clicked: '',
		}
 	}

 	handleClick(id){
 		this.setState({
 			clicked: id
 		})
 	}

 	onClickChange(input){
 		if (this.state.clicked === input) 
 			{input = ''}
 		this.handleClick(input);
		this.props.setFishShadow(input);
 	}

 	render() { 
	return (
		<form >
		<Translate content="fishShadow" />
		<div className="btn-group" role="group">
			<button type="button" className={this.state.clicked==='特小'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('特小')}}>
			<Translate content="fishShadows.Smallest" /></button>
			<button type="button" className={this.state.clicked==='较小'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('较小')}}>
			<Translate content="fishShadows.Small" /></button>
			<button type="button" className={this.state.clicked==='中偏小'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('中偏小')}}>
			<Translate content="fishShadows.Medium" /></button>
			<button type="button" className={this.state.clicked==='中偏大'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('中偏大')}}>
			<Translate content="fishShadows.Large" /></button>
			<button type="button" className={this.state.clicked==='较大'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('较大')}}>
			<Translate content="fishShadows.Larger" /></button>
			<button type="button" className={this.state.clicked==='特大'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('特大')}}>
			<Translate content="fishShadows.Largest" /></button>
		</div>	
		</form>

		)
}
}


 class FishLocationBtn extends React.Component {
 	constructor(props){
		super(props)
		this.state = {
			clicked: '',
		}
 	}

 	handleClick(id){
 		this.setState({
 			clicked: id
 		})
 	}

 	onClickChange(input){
 		if (this.state.clicked === input) 
 			{input = ''}
 		this.handleClick(input);
		this.props.setFishLocation(input);
 	}

 	render() { 
	return (
		<form>
		<Translate content="fishLocation" />
		<div className="btn-group" role="group">
			<button type="button" className={this.state.clicked==='河流'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('河流');}}>
			<Translate content="fishLocations.river" /></button>
			<button type="button" className={this.state.clicked==='大海'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('大海');}}>
			<Translate content="fishLocations.sea" /></button>
			<button type="button" className={this.state.clicked==='池塘'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('池塘');}}>
			<Translate content="fishLocations.pond" /></button>
			<button type="button" className={this.state.clicked==='悬崖'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('悬崖');}}>
			<Translate content="fishLocations.clifftop" /></button>
			<button type="button" className={this.state.clicked==='码头'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('码头');}}>
			<Translate content="fishLocations.pier" /></button>
			<button type="button" className={this.state.clicked==='入海口'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('入海口');}}>
			<Translate content="fishLocations.riverMouth" /></button>
		</div>	
		</form>
	
		);
}
}

export {Region,Month,Category,FilterPrice,FishShadowBtn,FishLocationBtn};
