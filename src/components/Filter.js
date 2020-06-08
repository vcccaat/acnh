import React from 'react';

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
		<form>
		地区  <div className="btn-group" role="group">
			<button type="button" className={this.state.clicked===1?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(1); this.props.setRegion('month-southern');}
			}>南半球</button>
			<button type="button" className={this.state.clicked===2?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(2); this.props.setRegion('month-northern');}}>北半球</button>
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

 // 	makeButtonGroup = (beginWith) => {
	// 	const button = Array(6).fill().map((_,i)=> {
	// 	const month = i + beginWith; 
	// 	const element = 
	// 		<button key={month} type="button" className={this.state.clicked===month?'btn btn-info active responsive':'btn btn-info responsive'}
	// 		onClick={()=>{this.handleClick(month); this.props.setMonth(month);}}>{month}</button>
			
	// 	return element
	// })
	// 	return <div className="btn-group" role="group">{button}</div>
 // 	}


 	render() {
 		// const button1 = this.makeButtonGroup(1)
 		// const button2 = this.makeButtonGroup(7)
 		const button = Array(12).fill().map((_,i)=> {
			const month = i + 1; 
			const element = 
				<button key={month} type="button" className={this.state.clicked===month?'btn btn-info active responsive-sm':'btn btn-info responsive-sm'}
				onClick={()=>this.onClickChange(month)}>{month}</button>
			return element
	})

		return (
			<div className="month-filter">
			<form>
			月份 <div className="btn-group" role="group">
			{button}
			</div>
			</form>
			</div>
		
		);
}
}

 class Category extends React.Component {
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
	return(
		<form>
		类别  <div className="btn-group" role="group">
			<button type="button" className={this.state.clicked===1?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(1); this.props.setCategory('fish');}}>鱼类</button>
			<button type="button" className={this.state.clicked===2?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(2); this.props.setCategory('bugs');}}>昆虫类</button>
			<button type="button" className={this.state.clicked===3?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(3); this.props.setCategory('furnitures');}}>家具类</button>
			<button type="button" className={this.state.clicked===4?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.handleClick(4); this.props.setCategory('villagers');}}>居民类</button>
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
			<button type="button" className={this.state.clicked===1?'btn btn-sm btn-secondary active responsive':'btn btn-sm btn-secondary responsive'}
			onClick={()=>{this.handleClick(1);this.props.setRank(1);}}>图鉴顺序</button>
			<button type="button" className={this.state.clicked===2?'btn btn-sm btn-secondary active responsive':'btn btn-sm btn-secondary responsive'}
			onClick={()=>{this.handleClick(2);this.props.setRank(2);}}>价格从高到低</button>
			<button type="button" className={this.state.clicked===3?'btn btn-sm btn-secondary active responsive':'btn btn-sm btn-secondary responsive'}
			onClick={()=>{this.handleClick(3); this.props.setRank(3);}}>价格从低到高</button>
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
		鱼影 <div className="btn-group" role="group">
			<button type="button" className={this.state.clicked==='特小'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('特小')}}>特小</button>
			<button type="button" className={this.state.clicked==='较小'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('较小')}}>较小</button>
			<button type="button" className={this.state.clicked==='中偏小'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('中偏小')}}>中偏小</button>
			<button type="button" className={this.state.clicked==='中偏大'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('中偏大')}}>中偏大</button>
			<button type="button" className={this.state.clicked==='较大'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('较大')}}>较大</button>
			<button type="button" className={this.state.clicked==='特大'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('特大')}}>特大</button>
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
		地点 <div className="btn-group" role="group">
			<button type="button" className={this.state.clicked==='河流'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('河流');}}>河流</button>
			<button type="button" className={this.state.clicked==='大海'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('大海');}}>大海</button>
			<button type="button" className={this.state.clicked==='池塘'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('池塘');}}>池塘</button>
			<button type="button" className={this.state.clicked==='悬崖'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('悬崖');}}>悬崖</button>
			<button type="button" className={this.state.clicked==='码头'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('码头');}}>码头</button>
			<button type="button" className={this.state.clicked==='入海口'?'btn btn-info active responsive':'btn btn-info responsive'}
			onClick={()=>{this.onClickChange('入海口');}}>入海口</button>
		</div>	
		</form>
	
		);
}
}

export {Region,Month,Category,FilterPrice,FishShadowBtn,FishLocationBtn};
