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

    if(this.state.playing){
      let audio = this.refs.audio;
      audio.pause();
      audio.currentTime = 0;
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

    // if(this.props.playing){
    //   this.play();
    // }

    // if(!this.props.playing){
    //   this.stop();
    // }



    return (
      <audio ref="audio" src={sound} ></audio>
      // <audio ref={refElem} src={sound} ></audio>
    );
  }
}

export default NoteSound;