import React, {Component} from 'react'

class Countdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 100,
      showTime: true,
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate() {
  	if (this.state.showTime === true) {
  		if (this.state.time < 1) {
  			this.setState({
  				showTime: false
  			})
  		}
  	}
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1 
    });
  }


  render(){
    return(
      <>
      	{this.state.showTime && (
      		<>
				<h1 style={{textAlign: "center"}}>
		          Sekarang jam: {new Date().toLocaleTimeString('en-US', { hour12: true})}
		        </h1>
		        <h1 style={{textAlign: "center"}}>
		        	Hitung mundur: {this.state.time}	
		        </h1>
	        </>
      		)}
      </>
    )
  }
}

export default Countdown