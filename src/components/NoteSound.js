import React from 'react';
import './../App.css';

import sound from './../wav.wav';



class NoteSound extends React.Component {

  play = () => {
    var audio = this.refs.audio;
    audio.play();
  }

  render() {

    if(this.props.note){
      this.play();
    }

    return (
      <audio ref="audio" src={sound} ></audio>
    );
  }
}

export default NoteSound;