import React from 'react';
import './../App.css';

import sound from './../wav.wav';



class NoteSound extends React.Component {

  state = {
    // refElem: '',
    playing: false
  }

  play = () => {
    let audio = this.refs.audio;
    audio.play();

  }

  stopPlaying = () => {
    console.log("stop!!!");

    // works but cuts abruply:
    // if(this.state.playing){
    //   let audio = this.refs.audio;
    //   audio.pause();
    //   audio.currentTime = 0;
    // }


    if(this.state.playing){


      let audio = this.refs.audio;

        // Initial volume of 1
        // Make sure it's a multiple of 0.05
        var vol = 1;
        var interval = 100; // 100ms interval

        var fadeout = setInterval(
          function() {
            // Reduce volume by 0.05 as long as it is above 0
            // This works as long as you start with a multiple of 0.05!
            // if (vol > 0) { /* didn't work with 0 here, tried 0.05: */
            if (vol > 0.05) {
              vol -= 0.05;
              // audio.setVolume(vol);
              audio.volume = vol;
            }
            else {
              // Stop the setInterval when 0 is reached
              clearInterval(fadeout);

              audio.pause();
              audio.currentTime = 0;

            }
          }, interval);


      // audio.pause();
      // audio.currentTime = 0;

      // audio.volume = 0.10;
    }

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


  componentWillReceiveProps(){
    this.setState({ playing: this.props.note });
  }

  render() {

    console.log(this.props.note);

    if(this.props.note){
      console.log("play!!")
      this.play();
    }

    if(!this.props.note){
      this.stopPlaying();
    }






    return (
      // <audio ref="audio" src={sound} ></audio>
      <audio ref="audio" src={this.props.sound} ></audio>
      // <audio ref={refElem} src={sound} ></audio>
    );
  }
}

export default NoteSound;