import React from 'react';
import PropTypes from 'prop-types'
import './styles/index.sass'



import Button from './../Button';

// import drumicon from './../images/drum-icon.png';
import beat1 from './../../assets/sound/testbeat.mp3';
import beat2 from './../../assets/sound/beat2.mp3';
import beat3 from './../../assets/sound/beat3.mp3';

class Beat extends React.Component {

  state = {
    beat: ''
  }



  pressLoopButton = () => {
    this.setState({ loopPlays: !this.state.loopPlays}, () => {
      if(this.state.loopPlays){
        this.startLoop();
      }else{
        this.stopLoop();
      }
      
    });
  }

  stopLoop = () => {
    this.audio = this.refs.audio;
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  startLoop = () => {
    this.audio = this.refs.audio;
    this.audio.vol = 1;
    this.audio.play();
  }

  setBeat = (e) => {

    let chosenBeat;

    if(e.target.value === 'beat1'){
      chosenBeat = beat1;
    }else if(e.target.value === 'beat2'){
      chosenBeat = beat2;
    }else if(e.target.value === 'beat3'){
      chosenBeat = beat3;
    }

    if(!(this.state.beat === chosenBeat)){
      this.setState({ beat: chosenBeat }, () => {
        this.startLoop();
      });
    }else{
      this.setState({ beat: '' });
    }

  }


  componentWillReceiveProps(){
    if(this.props.allowBeat === false){
      this.setState({ beat: '' });
    }
  }

  render() {


    
    return (

      <React.Fragment>

          {/* <img src={drumicon} className="button-icon" />  */}


            {/* <select onChange={this.setBeat} id="soflow">
              <option value="beat1">Beat 1</option>
              <option value="beat2">Beat 2 (70 BPM)</option>
            </select> */}

        <div className="beat__button-container">
          <Button
            className={!(this.state.beat === beat1) ? 'button-round button-round-regular' : 'button-round button-round-regular button-round-regular--pressed' }
            onClick={this.setBeat}
            value="beat1"
          />
          <div className="beat__button-label">Beat 1</div>
        </div>  

        <div className="beat__button-container">
          <Button
            className={!(this.state.beat === beat2) ? 'button-round button-round-regular' : 'button-round button-round-regular button-round-regular--pressed' }
            onClick={this.setBeat}
            value="beat2"
          />
          <div className="beat__button-label">Beat 2</div>
        </div>  

        <div className="beat__button-container">
          <Button
            className={!(this.state.beat === beat3) ? 'button-round button-round-regular' : 'button-round button-round-regular button-round-regular--pressed' }
            onClick={this.setBeat}
            value="beat3"
          />
          <div className="beat__button-label">Beat 3</div>
        </div> 


          {/* <Button
            className={this.state.loopPlays ? 'button button-regular button-regular--pressed' : 'button button-regular'}
            onClick={this.pressLoopButton}
            text="↻"
          /> */}


          <audio ref="audio" src={this.state.beat} loop></audio> 

      </React.Fragment>
    );
  }
}

Beat.propTypes = {
  allowBeat: PropTypes.bool.isRequired
}

export default Beat;