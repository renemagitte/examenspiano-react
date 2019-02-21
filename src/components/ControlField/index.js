import React from 'react';
import PropTypes from 'prop-types'
import './styles/index.sass';

import Button from './../Button';


const ControlField = ({playing, listenToRecorded, startRecording, startListening, stop}) => { 

  return (     
      <div className="synth-control">

      <div className="buttons-wrapper">

        <Button
          className={playing ? 'button button-record button-record--pressed' : 'button button-record'}
          onClick={startRecording}
          text="●	REC"
        />

        <Button
          className={listenToRecorded ? 'button button-regular button-regular--pressed' : 'button button-regular'}
          onClick={startListening}
          text={listenToRecorded ? '| |' : '▶'}
        />  

        <Button
          className="button button-regular"
          onClick={stop}
          text="■"
        />    




      </div>      

      {/* <Loop playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} /> */}

    </div>


  );
  
}

ControlField.propTypes = {
  playing: PropTypes.bool.isRequired,
  listenToRecorded: PropTypes.bool.isRequired,
  startRecording: PropTypes.func.isRequired,
  startListening: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired
}

export default ControlField;

