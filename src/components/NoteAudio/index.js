import React from 'react';
import PropTypes from 'prop-types'

class NoteAudio extends React.Component {

  state = {
    recording: false,
    playing: false,
  }


  play = () => {

    this.audio = this.refs.audio;
    this.audio.vol = 1;
    this.audio.play();


    // const playPromise = this.audio.play();
    // if (playPromise !== null){
    //     playPromise.catch(() => { this.audio.play(); })
    // }

    /* Start listening for a change of recording-state, so sound can stop if state changes to false */
    this.changeInterval = setInterval(this.listenForStateChange, 200);

  }

  listenForStateChange = () => {  
    if(!this.state.recording){
      this.audio.pause();
      this.audio.currentTime = 0;
      clearInterval(this.changeInterval);
    }
  }

  componentWillReceiveProps(){
    this.setState({ recording: this.props.note });
    this.setState({ playing: this.props.playing });
  }

  render() {

    this.props.note && this.play();

    return (

        <audio ref="audio" src={this.props.sound} ></audio>

    );
  }
}

NoteAudio.propTypes = {
    note: PropTypes.bool.isRequired,
    playing: PropTypes.bool.isRequired,
    sound: PropTypes.string.isRequired
  }

export default NoteAudio;