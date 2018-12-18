import React from 'react';
import './../App.css';

import drumicon from './../images/drum-icon.png';

class Loop extends React.Component {

  state = {
    loopPlays: false
  }


  // play = () => {

  //   this.audio = this.refs.audio;
  //   // this.audio.vol = 1;
  //   this.audio.play();

  //   console.log(this.audio.duration);
  // }

  loop = () => {

    this.setState({ loopPlays: !this.state.loopPlays })

    this.AudioContext = this.refs.audio;

    console.log(this.AudioContext)

    this.actx = new AudioContext();
    // src = this.props.sound,
    // audioData, srcNode;  // global so we can access them from handlers

    console.log(this.actx);

  // // Load some audio (CORS need to be allowed or we won't be able to decode the data)
  // fetch(src, {mode: "cors"}).then(function(resp) {return resp.arrayBuffer()}).then(this.decode);
  fetch(this.props.sound, {mode: "cors"}).then(function(resp) {return resp.arrayBuffer()}).then(this.decode);

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

delay = () => {


  this.AudioContext = this.refs.audio;
  this.actx = new AudioContext();

  this.synthDelay = this.actx.createDelay(5.0);


  this.synthSource = this.actx.createBufferSource();
  // this.synthSource.buffer = this.buffers[2];
  this.synthSource.loop = true;
  this.synthSource.start();
  this.synthSource.connect(this.synthDelay);
  // this.synthDelay.connect(this.destination);
  // this.setAttribute('disabled', 'disabled'); 


}




  componentWillReceiveProps(){


  }

  render() {

    let loopButtonClass = this.state.loopPlays ? 'button button-grey--active' : 'button';



    return (

      <React.Fragment>
        <div className="loop-container">

          {/* <img src={drumicon} className="button-icon" />  */}

          {/* <div className="select"> */}
            <select id="soflow">
              <option>Drum loop</option>
              <option>Beat 1</option>
              <option>Beat 2</option>
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
          <button className={loopButtonClass} onClick={this.loop}>↻</button>

          {/* <button className="loop-button" onClick={this.delay}>delay test</button> */}

          {/* Loop's audio element */}
          <audio ref="audio" src={this.props.sound}></audio> 
        </div>

      </React.Fragment>
    );
  }
}

export default Loop;