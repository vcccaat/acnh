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
		选择地区  <div className="btn-group" role="group">
			<button type="button" className={this.state.clicked===1?'btn btn-info active':'btn btn-info'}
			onClick={()=>{this.handleClick(1); this.props.setRegion('month-southern');}
			}>南半球</button>
			<button type="button" className={this.state.clicked===2?'btn btn-info active':'btn btn-info'}
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
 	handleClick(id){
 		this.setState({
 			clicked: id
 		})
 	}

 	render() {
	const buttons = Array(12).fill().map((_,i)=> {
		const month = i + 1; 
		const element = <button key={i} type="button" className={this.state.clicked===i?'btn btn-info active':'btn btn-info'}
			onClick={()=>{this.handleClick(i); this.props.setMonth(month);}}>{month}</button>
		
		return element
	})
	return (
		<form>
		选择月份  <div className="btn-group" role="group">
			{buttons}
			</div>
		</form>
		
		);
}
}

 class Category extends React.Component {
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
		查看类别  <div className="btn-group" role="group">
			<button type="button" className={this.state.clicked===1?'btn btn-info active':'btn btn-info'}
			onClick={()=>{this.handleClick(1); this.props.setCategory('fish');}}>鱼类</button>
			<button type="button" className={this.state.clicked===2?'btn btn-info active':'btn btn-info'}
			onClick={()=>{this.handleClick(2); this.props.setCategory('bugs');}}>昆虫类</button>
			<button type="button" className={this.state.clicked===3?'btn btn-info active':'btn btn-info'}
			onClick={()=>{this.handleClick(3); 
				// this.props.setCategory('houseware');
			}}>家具类</button>
			<button type="button" className={this.state.clicked===4?'btn btn-info active':'btn btn-info'}
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
			clicked: '',
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
			<button type="button" className={this.state.clicked===1?'btn btn-sm btn-secondary active':'btn btn-sm btn-secondary'}
			onClick={()=>{this.handleClick(1);this.props.setRank(0);}}>图鉴顺序</button>
			<button type="button" className={this.state.clicked===2?'btn btn-sm btn-secondary active':'btn btn-sm btn-secondary'}
			onClick={()=>{this.handleClick(2);this.props.setRank(1);}}>价格从高到低</button>
			<button type="button" className={this.state.clicked===3?'btn btn-sm btn-secondary active':'btn btn-sm btn-secondary'}
			onClick={()=>{this.handleClick(3); this.props.setRank(-1);}}>价格从低到高</button>
		</div>	
		)
}
}

export {Region,Month,Category,FilterPrice};
