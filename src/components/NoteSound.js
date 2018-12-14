import React from 'react';
import './../App.css';

class NoteSound extends React.Component {

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


  drawNote = () => {
      var newNote;
      newNote = this.refs.notesCanvas.getContext('2d');
      newNote.fillStyle = "black";
      newNote.fillRect(this.props.playheadAt, 0, 1, 10);
  }


  componentWillReceiveProps(){
    this.setState({ playing: this.props.note });
    this.setState({ listenToRecorded: this.props.listenToRecorded });
  }

  render() {

    /* If note is set to true... */
    if(this.props.note){

      /* ...play it */
      this.play();

      /* If not in listen mode (a.k.a. recording mode) also draw the note. But change name! It's confusing now! */
      if(!this.props.listenToRecorded){
        this.drawNote();
      }
      
    }

    let canvasClass = 'canvasNote ' + this.props.noteName;

    return (

      <React.Fragment>

        {/* Note's audio element */}
        <audio ref="audio" src={this.props.sound} ></audio>

        {/* Note's canvas element */}
        {/* <canvas width="780" height="10" style={{zIndex: 10}} className={canvasClass} id="notesCanvas" ref="notesCanvas"></canvas> */}
        <canvas width="780" height="5" style={{zIndex: 10}} className={canvasClass} id="notesCanvas" ref="notesCanvas"></canvas>  

      </React.Fragment>
    );
  }
}

export default NoteSound;