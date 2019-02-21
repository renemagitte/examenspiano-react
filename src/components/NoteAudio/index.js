import React from 'react';
import PropTypes from 'prop-types'

class NoteAudio extends React.Component {

  state = {
    playing: false,
    listenToRecorded: false,
  }


  play = () => {

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
    }
  }

  componentWillReceiveProps(){
    this.setState({ playing: this.props.note });
    this.setState({ listenToRecorded: this.props.listenToRecorded });
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
    listenToRecorded: PropTypes.bool.isRequired,
    sound: PropTypes.object.isRequired
  }

export default NoteAudio;