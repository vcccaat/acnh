import React from 'react';

class ScrollButton extends React.Component {
  constructor() {
    super();
    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return <button title='Back to top' className='scroll' 
               onClick={ () => { this.scrollToTop(); }}>
               <i className="arrow-up fa fa-angle-double-up"></i>
              </button>;
   }
}

export default ScrollButton;
