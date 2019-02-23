import React from 'react';
import PropTypes from 'prop-types'
import './styles/index.sass';

import Button from './../Button';
import Beat from './../Beat';


const ControlField = ({
  recording, 
  playing, 
  pressRecordButton, 
  pressPlayButton, 
  stop,
  timer
}) => { 

  return (     
      <div className="synth-control">

        <div className="buttons-wrapper">

          <Button
            className={recording ? 'button button-record button-record--pressed' : 'button button-record'}
            onClick={pressRecordButton}
            text="●	REC"
          />

          <Button
            className={playing ? 'button button-regular button-regular--pressed' : 'button button-regular'}
            onClick={pressPlayButton}
            text={playing ? '| |' : '▶'}
          />  

          <Button
            className="button button-regular"
            onClick={stop}
            text="■"
          />    

        </div>  

        <Beat 
          timer={timer} 
          playing={playing} 
        />    



      {/* <Loop timer={this.state.timer} playing={this.state.playing} /> */}

    </div>


  );
  
}

ControlField.propTypes = {
  recording: PropTypes.bool.isRequired,
  playing: PropTypes.bool.isRequired,
  pressRecordButton: PropTypes.func.isRequired,
  pressPlayButton: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired
}

export default ControlField;

