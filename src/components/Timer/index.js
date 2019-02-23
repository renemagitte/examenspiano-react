import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './styles/index.sass';

class Timer extends Component {

  state = {
    min: 0,
    sec: 0,
    ms: 0

  }

  componentWillReceiveProps(){

    this.setState({ 
      min: Math.floor( this.props.timer / (60 * 10) ),
      sec: Math.floor( ((this.props.timer % 6000) / 10) % 60 ),
      ms: Math.floor( this.props.timer % 10 )
    });

  }

  render(){

    return (    

        <div className="timer">
          {this.state.min} : {this.state.sec} : {this.state.ms}
        </div> 

    )
    
  }
  
}

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
}

export default Timer;


