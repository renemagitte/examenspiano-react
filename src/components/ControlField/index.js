import React from 'react';
import PropTypes from 'prop-types'
import './styles/index.sass';

import Button from './../Button';
import Timer from './../Timer';
import Beat from './../Beat';


const ControlField = ({
  timer,
  recording, 
  playing, 
  pressRecordButton, 
  pressPlayButton, 
  pressStopButton
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
            onClick={pressStopButton}
            text="■"
          />    

        </div>  

        <Timer timer={timer} />

        <Beat 
          timer={timer} 
          playing={playing} 
        />    




    </div>


  );
  
}

ControlField.propTypes = {
  timer: PropTypes.number.isRequired,
  recording: PropTypes.bool.isRequired,
  playing: PropTypes.bool.isRequired,
  pressRecordButton: PropTypes.func.isRequired,
  pressPlayButton: PropTypes.func.isRequired,
  pressStopButton: PropTypes.func.isRequired
}

export default ControlField;

