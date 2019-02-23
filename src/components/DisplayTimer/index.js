import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './styles/index.sass';

class DisplayTimer extends Component {

  state = {
    min: '00',
    sec: '00',
    ms: '0'

  }

  componentWillReceiveProps(){

    let min = '0' + Math.floor( this.props.timer / (60 * 10) );

    let sec = Math.floor( ((this.props.timer % 6000) / 10) % 60 );

    if(sec < 10){
      sec = '0' + Math.floor( ((this.props.timer % 6000) / 10) % 60 );
    }

    let ms = Math.floor( this.props.timer % 10 )

    this.setState({ min: min, sec: sec, ms: ms });

  }

  render(){

    return (    

        <div className="display-timer">
          {this.state.min} : {this.state.sec} : {this.state.ms}
        </div> 

    )
    
  }
  
}

DisplayTimer.propTypes = {
  timer: PropTypes.number.isRequired,
}

export default DisplayTimer;


