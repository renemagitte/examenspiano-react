import React from 'react';
import './../App.css';

class NoteSound extends React.Component {

  state = {
    playing: false,
    counter: 0,
    recordingAllowed: true,
    listenToRecorded: false,
  }


  recorded = [];
  counter = 0;

  play = () => {
    // let audio = this.refs.audio;
    // audio.vol = 1;
    // audio.play();

    this.audio = this.refs.audio;
    this.audio.vol = 1;
    this.audio.play();


    /* Start listening for a change of playing-state, so sound can stop if state changes to false */
    this.changeInterval = setInterval(this.listenForStateChange, 200);
    

  }

  listenForStateChange = () => {  
    if(!this.state.playing){
      this.audio.pause();
      this.audio.currentTime = 0;
      clearInterval(this.changeInterval);

      /* recordtest */
      // this.setState({ recordingAllowed: true });
    }
  }

  record = () => {
    /* Only allow to record a note when it's first pressed (= state not yet set to playing), and not constatly while pressed */
    if(!this.state.playing){
      this.counter = this.counter + 1;
      let noteObj = this.props.playheadAt;
      this.recorded.push(noteObj);
    }

    console.log(this.recorded);
    console.log(this.counter);

  }

  listenToRecorded = () => {

    console.log(this.recorded[1]);
    console.log(this.props.playheadAt);
    // if(this.recorded.length > 0){
    //   let currentNote = this.recorded[this.counter];
    //   if(currentNote === this.props.playheadAt){
    //     this.setState({ playing: true })
    //   }
    // }
    

  }

  // stopSound = () => {
  //   let audio = this.refs.audio;
  //   audio.pause();
  //   audio.currentTime = 0;
  // }

  // stopPlaying = () => {
  //   console.log("stop!!!");

  //   // works but cuts abruply:
  //   if(this.state.playing){
  //     let audio = this.refs.audio;
  //     audio.pause();
  //     audio.currentTime = 0;
  //   }


    // if(this.state.playing){

    //   let audio = this.refs.audio;

    //     // Initial volume of 1
    //     // Make sure it's a multiple of 0.05
    //     var vol = 1;
    //     var interval = 100; // 100ms interval

    //     var fadeout = setInterval(
    //       function() {
    //         // Reduce volume by 0.05 as long as it is above 0
    //         // This works as long as you start with a multiple of 0.05!
    //         // if (vol > 0) { /* didn't work with 0 here, tried 0.05: */
    //         if (vol > 0.05) {
    //           vol -= 0.05;
    //           // audio.setVolume(vol);
    //           audio.volume = vol;
    //         }
    //         else {
    //           // Stop the setInterval when 0 is reached
    //           clearInterval(fadeout);

    //           audio.pause();
    //           audio.currentTime = 0;

    //         }
    //       }, interval);
    // }

  // }




  // stop = () => {
  //   let audio2 = this.refs.audio;

  //   if(this.state.playing){
  //     audio2.pause();
  //   }
    

  // //   console.log(audio2);
  // //   // audio2.pause();
  // //   // audio2.currentTime = 0;
  // //   // audio2.stop();

  //   console.log('stop it!!');
  // }


  // test
  drawNote = () => {

      var newNote;
      newNote = this.refs.notesCanvas.getContext('2d');
      newNote.fillStyle = "black";
      // newNote.fillRect(this.props.playheadAt, 0, 5, 10);
      newNote.fillRect(this.props.playheadAt, 0, 2, 10);
  }




  componentWillReceiveProps(){
    this.setState({ playing: this.props.note });
    this.setState({ listenToRecorded: this.props.listenToRecorded });
  }

  render() {

    // console.log(this.props.playheadAt);

    // if(!this.props.listenToRecorded && this.props.note){

      if(this.props.note){

      // this.record();

      // console.log(this.state.playing);
      this.play();

      // test
      if(!this.props.listenToRecorded){
        this.drawNote();
      }

      // this.drawNote();

      
    }


    // if(this.state.listenToRecorded){

    //   this.listenToRecorded();

    // }







    let canvasClass = 'canvasNote ' + this.props.noteName;


    return (

      <React.Fragment>
      {/* <audio ref="audio" src={sound} ></audio> */}
      <audio ref="audio" src={this.props.sound} ></audio>
    {/* <audio ref={refElem} src={sound} ></audio> */}


      {/* test */}
      <canvas width="860" height="10" style={{zIndex: 10}} className={canvasClass} id="notesCanvas" ref="notesCanvas"></canvas> 

      </React.Fragment>
    );
  }
}

export default NoteSound;