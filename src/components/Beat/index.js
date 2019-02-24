import React from 'react';
import PropTypes from 'prop-types'
import './styles/index.sass'

import Button from './../Button';

// import drumicon from './../images/drum-icon.png';
import beat1 from './../../assets/sound/testbeat.mp3';
import beat2 from './../../assets/sound/beat2.mp3';
import VocalsTakeAChance from './../../assets/sound/takeachancevocals.mp3';

class Beat extends React.Component {

  state = {
    loopPlays: false,
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
    // this.AudioContext = this.refs.audio;

    // console.log(this.AudioContext);
    // // this.AudioContext.pause();
    // // this.AudioContext.currentTime = 0;

    this.audio = this.refs.audio;
    this.audio.pause();
    this.audio.currentTime = 0;

  }

  startLoop = () => {

    this.audio = this.refs.audio;
    this.audio.vol = 1;
    this.audio.play();

    // if(this.state.loopPlays){

    //   this.AudioContext = this.refs.audio;

    //   console.log(this.AudioContext)

    //   this.actx = new AudioContext();
    //   // src = this.props.sound,
    //   // audioData, srcNode;  // global so we can access them from handlers

    //   console.log(this.actx);

    //   // // Load some audio (CORS need to be allowed or we won't be able to decode the data)
    //   // fetch(src, {mode: "cors"}).then(function(resp) {return resp.arrayBuffer()}).then(this.decode);
    //   fetch(this.state.beat, {mode: "cors"}).then(function(resp) {return resp.arrayBuffer()}).then(this.decode);
    // // }

  }




// // Decode the audio file, then start the show
decode = (buffer) => {
  console.log("hej");
  this.actx.decodeAudioData(buffer, this.playLoop);
}

// // Sets up a new source node as needed as stopping will render current invalid
playLoop = (abuffer) => {
  if (!this.audioData) this.audioData = abuffer;  // create a reference for control buttons
  this.srcNode = this.actx.createBufferSource();  // create audio source
  this.srcNode.buffer = abuffer;             // use decoded buffer
  this.srcNode.connect(this.actx.destination);    // create output
  this.srcNode.loop = true;                  // takes care of perfect looping
  this.srcNode.start();                      // play...
}


setBeat = (e) => {

  // this.stopLoop();

  let chosenBeat;
  if(e.target.value === 'beat1'){
    chosenBeat = beat1;
  }else if(e.target.value === 'beat2'){
    chosenBeat = beat2;
  }else if(e.target.value === 'takeachance'){
    chosenBeat = VocalsTakeAChance;
  }

  // this.setState({ beat: chosenBeat })

  console.log(e.target.value)
  if(!(this.state.beat === chosenBeat)){
    this.setState({ beat: chosenBeat }, () => {
      this.startLoop();
    });
  }else{
    this.setState({ beat: '' });
  }

}





  componentWillReceiveProps(){
    /* If component updates with new prop saying playing is false,
    it means user has pressed the stop button and the beat should stop playing as well. */
    if(this.props.playing === false){
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
            // className="button-round button-round-regular"
            className={!(this.state.beat === beat1) ? 'button-round button-round-regular' : 'button-round button-round-regular button-round-regular--pressed' }
            onClick={this.setBeat}
            value="beat1"
          />
          <div className="beat__button-label">Beat 1</div>
        </div>  

        <div className="beat__button-container">
          <Button
            // className="button-round button-round-regular"
            className={!(this.state.beat === beat2) ? 'button-round button-round-regular' : 'button-round button-round-regular button-round-regular--pressed' }
            onClick={this.setBeat}
            value="beat2"
          />
          <div className="beat__button-label">Beat 2</div>
        </div>  

        <div className="beat__button-container">
          <Button
            className="button-round button-round-regular"
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
  playing: PropTypes.bool.isRequired
}

export default Beat;