import React from 'react';
import './../App.css';

class NoteSound extends React.Component {

  state = {
    playing: false,
  }


  play = () => {
    // let audio = this.refs.audio;
    // audio.vol = 1;
    // audio.play();

    this.audio = this.refs.audio;
    this.audio.vol = 1;
    this.audio.play();

    this.changeInterval = setInterval(this.listenForStateChange, 200);
    

  }

  listenForStateChange = () => {
      
        if(!this.state.playing){
          this.audio.pause();
          this.audio.currentTime = 0;
          clearInterval(this.changeInterval);
        }

  }

  stopSound = () => {
    let audio = this.refs.audio;
    audio.pause();
    audio.currentTime = 0;
  }

  stopPlaying = () => {
    console.log("stop!!!");

    // works but cuts abruply:
    if(this.state.playing){
      let audio = this.refs.audio;
      audio.pause();
      audio.currentTime = 0;
    }


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

  }




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
  }

  render() {

    // console.log(this.props.playheadAt);

    if(this.props.note){

      // console.log(this.state.playing);
      this.play();

      // test
      this.drawNote();
    }

    // if(!this.props.note){
    //   console.log("no play")
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