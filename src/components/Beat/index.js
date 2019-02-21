import React from 'react';
import PropTypes from 'prop-types'

import Button from './../Button';

// import drumicon from './../images/drum-icon.png';
import beat from './../../sound/testbeat.mp3';
import beat2 from './../../sound/beat2.mp3';
import VocalsTakeAChance from './../../sound/takeachancevocals.mp3';

class Beat extends React.Component {

  state = {
    loopPlays: false,
    beat: beat
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

  this.stopLoop();

  let chosenBeat;
  if(e.target.value === 'beat1'){
    chosenBeat = beat;
  }else if(e.target.value === 'beat2'){
    chosenBeat = beat2;
  }else if(e.target.value === 'takeachance'){
    chosenBeat = VocalsTakeAChance;
  }
  

  this.setState({ beat: chosenBeat })

}





  componentWillReceiveProps(){
  }

  render() {

    let loopButtonClass = this.state.loopPlays ? 'button button-regular button-regular--pressed' : 'button button-regular';



    return (

      <React.Fragment>
        <div className="loop-container">

          {/* <img src={drumicon} className="button-icon" />  */}

          {/* <div className="select"> */}
            <select onChange={this.setBeat} id="soflow">
              <option value="beat1">Beat 1</option>
              <option value="beat2">Beat 2 (70 BPM)</option>
              {/* <option value="takeachance">Take A Chance Vocals</option> */}
            </select>
          {/* </div> */}

{/* <div className="select2 animated zoomIn">
    <label>
        <input type="checkbox" name="placeholder" />
        <i className="toggle icon icon-plus"></i>
        <i className="toggle icon icon-minus"></i>
        <span className="placeholder title">Choose...</span>
        <label className="option">
            <input type="radio" name="option" />
            <span className="title animated fadeIn">Beat 1</span>
        </label>

        <label className="option">
            <input type="radio" name="option" />
            <span className="title animated fadeIn">Beat 2</span>
        </label>
    </label>
</div> */}

          {/* <button className="button button-grey" onClick={this.loop}>↻</button> */}
          {/* <button className={loopButtonClass} onClick={this.pressLoopButton}>↻</button> */}

          <Button
            className={this.state.loopPlays ? 'button button-regular button-regular--pressed' : 'button button-regular'}
            onClick={this.pressLoopButton}
            text="↻"
          />

          {/* <button className="loop-button" onClick={this.delay}>delay test</button> */}

          {/* Loop's audio element */}
          {/* <audio ref="audio" src={this.props.sound}></audio>  */}

          <audio ref="audio" src={this.state.beat} loop></audio> 
        </div>

      </React.Fragment>
    );
  }
}

Beat.propTypes = {
  playheadAt: PropTypes.number.isRequired,
  listenToRecorded: PropTypes.bool.isRequired
}

export default Beat;