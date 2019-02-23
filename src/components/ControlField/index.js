import React from 'react';
import PropTypes from 'prop-types'
import './styles/index.sass';

import Button from './../Button';
import DisplayTimer from './../DisplayTimer';
import DisplayNotes from './../DisplayNotes';
import Beat from './../Beat';


// const ControlField = ({
//   timer,
//   recording, 
//   playing, 
//   pressRecordButton, 
//   pressPlayButton, 
//   pressStopButton
// }) => { 

const ControlField = (props) => { 

  return (     
      <div className="control-field">

        <div className="control-field__buttons">

          <Button
            className={props.recording ? 'button button-record button-record--pressed' : 'button button-record'}
            onClick={props.pressRecordButton}
            text="●	REC"
          />

          <Button
            className={props.playing ? 'button button-regular button-regular--pressed' : 'button button-regular'}
            onClick={props.pressPlayButton}
            text={props.playing ? '| |' : '▶'}
          />  

          <Button
            className="button button-regular"
            onClick={props.pressStopButton}
            text="■"
          />    

        </div>  

        <div className="control-field__display">
          <DisplayTimer timer={props.timer} />

          <DisplayNotes 
            c1={props.c1}
            ciss1={props.ciss1}
            d1={props.d1}
            diss1={props.diss1}
            e1={props.e1}
            f1={props.f1}
            fiss1={props.fiss1}
            g1={props.g1}
            giss1={props.giss1}
            a1={props.a1}
            b1={props.b1}
            h1={props.h1}
            c2={props.c2}
            ciss2={props.ciss2}
            d2={props.d2}
            diss2={props.diss2}
            e2={props.e2}
            f2={props.f2}
            fiss2={props.fiss2}
            g2={props.g2}
            giss2={props.giss2}
            a2={props.a2}
            b2={props.b2}
            h2={props.h2}
            c3={props.c3}
            ciss3={props.ciss3}
          />
        
        </div>

        

        <Beat 
          timer={props.timer} 
          playing={props.playing} 
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

