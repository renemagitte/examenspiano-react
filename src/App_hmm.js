import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import './sass/main.sass';
import Key from './components/Key.js';
// import NoteCanvas from './components/NoteCanvas.js';
// import Playhead from './components/Playhead.js';

import sound from './wav.wav';
import sound2 from './wav2.wav';
import cWav from './sound/c.wav';
import dWav from './sound/d.wav';
import eWav from './sound/e.wav';
import fWav from './sound/f.wav';
import gWav from './sound/g.wav';
import NoteSound from './components/NoteSound.js';


import c1File from './sound/c.wav';
import ciss1File from './sound/c.wav';
import d1File from './sound/d.wav';
import diss1File from './sound/c.wav';
import e1File from './sound/e.wav';
import f1File from './sound/f.wav';
import fiss1File from './sound/c.wav';
import g1File from './sound/g.wav';
import giss1File from './sound/c.wav';
import a1File from './sound/c.wav';
import b1File from './sound/c.wav';
import h1File from './sound/c.wav';
import c2File from './sound/c.wav';
import ciss2File from './sound/c.wav';
import d2File from './sound/d.wav';
import diss2File from './sound/c.wav';
import e2File from './sound/e.wav';
import f2File from './sound/f.wav';
import fiss2File from './sound/c.wav';
import g2File from './sound/g.wav';
import giss2File from './sound/c.wav';
import a2File from './sound/c.wav';
import b2File from './sound/c.wav';
import h2File from './sound/c.wav';
import c3File from './sound/c.wav';
import ciss3File from './sound/c.wav';

class App extends Component {

  state = {
    c1: false,
    ciss1: false,
    d1: false,
    diss1: false,
    e1: false,
    f1: false,
    fiss1: false,
    g1: false,
    giss1: false,
    a1: false,
    b1: false,
    h1: false,
    c2: false,
    ciss2: false,
    d2: false,
    diss2: false,
    e2: false,
    f2: false,
    fiss2: false,
    g2: false,
    giss2: false,
    a2: false,
    b2: false,
    h2: false,
    c3: false,
    ciss3: false,


    65: false,  // 0, 65, A, c
    87: false,  // 1, 87, W, c#
    83: false,  // 2, 83, S, d
    69: false,  // 3, 69, S, d#
    68: false,  // 4, 68, D, e
    70: false,  // 5, 70, F, f
    84: false,  // 6, 84, T, f#
    71: false,  // 7, 71, T, g
    89: false,  // 8, 89, Y, g#
    72: false,  // 9, 72, H, a
    85: false,  // 10, 85, U, b / a#
    74: false,  // 11, 74, J, h
    75: false,  // 12, 75, K, c (2)
    79: false,  // 13, 79, O, c# (2)
    76: false,  // 14, 78, L, d (2)
    80: false,  // 15, 80, P, d# (2)
    186: false, // 16, 186, Ö, e (2)
    222: false, // 17, 222, Ä, f (2)
    221: false, // 18, 221, ^, f# (2)
    13: false,  // 19, 13, enter, g (2)
    188: false, // 20, 188, ,, g# (2)
    93: false,  // 21, 93, cmd right, a (2)
    190: false, // 22, 190, ., b / a# (2)
    18: false,  // 23,18, alt right, h (2)
    189: false, // 24, 189, -, c (3)
    16: false,  // 25, 16, shift right, c# (3)

    playing: false,
    timer: 0,
  }

  keyY = [
    {code: 65, y: 250, stateName: 'c1'},  // 0, 65, A, c
    {code: 87, y: 240, stateName: 'ciss1'},  // 1, 87, W, c#
    {code: 83, y: 230, stateName: 'd1'},  // 2, 83, S, d
    {code: 69, y: 220, stateName: 'diss1'},  // 3, 69, S, d#
    {code: 68, y: 210, stateName: 'e1'},  // 4, 68, D, e
    {code: 70, y: 200, stateName: 'f1'},  // 5, 70, F, f
    {code: 84, y: 190, stateName: 'fiss1'},  // 6, 84, T, f#
    {code: 71, y: 180, stateName: 'g1'},  // 7, 71, T, g
    {code: 89, y: 170, stateName: 'giss1'},  // 8, 89, Y, g#
    {code: 72, y: 160, stateName: 'a1'},  // 9, 72, H, a
    {code: 85, y: 150, stateName: 'b1'},  // 10, 85, U, b / a#
    {code: 74, y: 140, stateName: 'h1'},  // 11, 74, J, h
    {code: 75, y: 130, stateName: 'c2'},  // 12, 75, K, c (2)
    {code: 79, y: 120, stateName: 'ciss2'},  // 13, 79, O, c# (2)
    {code: 76, y: 110, stateName: 'd2'},  // 14, 78, L, d (2)
    {code: 80, y: 100, stateName: 'diss2'},  // 15, 80, P, d# (2)
    {code: 186, y: 90, stateName: 'e2'}, // 16, 186, Ö, e (2)
    {code: 222, y: 80, stateName: 'f2'}, // 17, 222, Ä, f (2)
    {code: 221, y: 70, stateName: 'fiss2'}, // 18, 221, ^, f# (2)
    {code: 13, y: 60, stateName: 'g2'},  // 19, 13, enter, g (2)
    {code: 188, y: 50, stateName: 'giss2'}, // 20, 188, ,, g# (2)
    {code: 93, y: 40, stateName: 'a2'},  // 21, 93, cmd right, a (2)
    {code: 190, y: 30, stateName: 'b2'}, // 22, 190, ., b / a# (2)
    {code: 18, y: 20, stateName: 'h2'},  // 23,18, alt right :--( , h (2)
    {code: 189, y: 10, stateName: 'c3'}, // 24, 189, -, c (3)
    {code: 16, y: 0, stateName: 'ciss3'}  // 25, 16, shift right, c# (3)
  ]

  /* This array holds the notes that are currently pressed down. drawNote-function uses this to know what notes to draw */
  currentlyPlaying = [];

  componentDidMount() {
    this.keydownEventlistener();
    this.keyupEventlistener();
  }

  keydownEventlistener = () => {
    window.addEventListener('keydown', this.pressKey);
  }
  keyupEventlistener = () => {
    window.addEventListener('keyup', this.unpressKey);
  }

  pressKey = (e) => {
    e.preventDefault();

    // this.currentlyPlaying.push(e.keyCode);

    // utkokmmenterad pga test
    // this.drawNote(e.keyCode);

    /* key styling is still connected to old states with keycodes: */
    this.setState({ [e.keyCode]: true });

    /* for sound: */
    this.noteStateName = this.getStateNameFromKeyCode(e.keyCode);
    this.setState({ [this.noteStateName]: true });
console.log(this.noteStateName);

    this.drawOneNote(this.noteStateName);

  }


  getStateNameFromKeyCode = (code) => {
    var obj = this.findObjectByKey(this.keyY, 'code', code);
    /* If the key is not used null is returned the app breaks, so only return if not null */
    if(obj != null){
      return(obj.stateName);
    }
  }


  drawOneNote = (noteName) => {

    var newNote;
    newNote = ReactDOM.findDOMNode(this.refs[noteName]).getContext('2d');
    console.log(newNote);
    newNote.fillStyle = "black";
    newNote.fillRect(this.state.timer, 0, 5, 10);
  }


  unpressKey = (e) => {
    e.preventDefault();

    /* removing the unpressed key from array of notes that are currently playing */
    this.currentlyPlaying = this.currentlyPlaying.filter(function(item) {
      return item !== e.keyCode;
    });

    /* key styling is still connected to old states with keycodes: */
    this.setState({ [e.keyCode]: false });

    /* for sound: */
    this.noteState = this.getStateNameFromKeyCode(e.keyCode);
    this.setState({ [this.noteState]: false });


    // this.stopAudio(this.noteState);

  }

  stopAudio = (note) => {

    console.log(note);

  }



  buildKeyboard = () => {
    var keys = [];
    var numberOfKeys = 26;
    /* Keycodes in order of appearance in piano. Starting with note C = letter A/keycode 65.  */
    var keyCodes = [ 65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186, 222, 221, 13, 188, 93, 190, 18, 189, 16 ]

    for(var i = 0; i < numberOfKeys; i++){
        var key;
        var keyClass = this.keyClass(keyCodes[i]);
        if(this.state[keyCodes[i]]) keyClass += ' pressed';
        key = <Key className={keyClass} key={keyCodes[i]} />;
        keys.push(key);
    }
    return keys;
  }

  keyClass = (code) =>{
    switch (code) {
      case 87:
      case 69:
      case 84:
      case 89:
      case 85:
      case 79:
      case 80:
      case 221:
      case 188:
      case 190:
      case 16:
          return 'key black';
      default: 
          return 'key';
    }
  }

  // buildNoteCanvas = () => {
  //   var canvases = [];
  //   var numberOfCanvases = 26;
  //   // /* Keycodes in order of appearance in piano. Starting with note C = letter A/keycode 65.  */
  //   var noteNames = [ 'c1', 'ciss1', 'd1', 'diss1', 'e1', 'f1', 'fiss1', 'g1', 'giss1', 'a1', 'b1', 'h1', 'c2', 'ciss2', 'd2', 'diss2', 'e2', 'f2', 'fiss2', 'g2', 'giss2', 'a2', 'b2', 'h2', 'c3', 'ciss3' ]

  //   for(var i = 0; i < numberOfCanvases; i++){
  //       var canvas;
  //       var canvasClass = 'canvas ' + noteNames[i];
  //       canvas = <canvas width="860" height="10" style={{zIndex: 10}} className={canvasClass} id="notesCanvas" ref={noteNames[i]}></canvas>;
  //       // canvas = <Key className={canvasClass} ref={noteNames[i]} />;
  //       canvases.push(canvas);
  //   }
  //   return canvases;
  // }

  setPlayPause = () => {
    this.setState({ playing: !this.state.playing });

    if(!this.state.playing){
      this.playheadInterval = setInterval(this.play, 100);
    }
    if(this.state.playing){
      clearInterval(this.playheadInterval);
    }
  }

  play = () => {
    this.setState({ timer: this.state.timer + 1 });
    this.drawPlayhead(this.state.timer);
  }

  drawPlayhead(x) {
    const c = this.refs.playheadCanvas.getContext('2d');

    /* Clear canvas */
    c.clearRect(0, 0, 860, 375);

    /* Clear canvas */
    c.beginPath();
    c.moveTo(x, 0);
    c.lineTo(x, 375);
    c.lineWidth = 1;
    c.strokeStyle = '#000000'
    c.stroke();
  }

  stop = () => {
    clearInterval(this.playheadInterval);
    this.setState({ playing: !this.state.playing, timer: 0 }, () => {
      this.drawPlayhead(this.state.timer);
    });
  }

  // drawNote = (code) => {

  //   for(var i = 0; i < this.currentlyPlaying.length; i++){

  //     var newNote;
  //     var newNote2Y = this.getY(this.currentlyPlaying[i]);
  //     newNote = this.refs.notesCanvas.getContext('2d');
  //     newNote.fillStyle = "black";
  //     newNote.fillRect(this.state.timer, newNote2Y, 5, 10);

  //   }
  // }

  // getY = (code)  => {
  //   var obj = this.findObjectByKey(this.keyY, 'code', code);
  //   /* If the key is not used null is returned the app breaks, so only return if not null */
  //   if(obj != null){
  //     return(obj.y);
  //   }
  // }

  /* takes an array of obejcts and a value, and returns the object where the key is the same as the value that's sent in */
  findObjectByKey = (array, key, value) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
  }

  render() {

    let buttonText = this.state.playing ? 'Pause' : 'Play';


    return (

      <React.Fragment>


        {/* <audio ref="elemC1" src={sound} ></audio>
        <audio ref="elemCiss1" src={sound} ></audio> */}


        {/* <NoteSound note={this.state.c1} noteName='c1' code='65'sound={cWav} timer={this.state.timer} />
        <NoteSound note={this.state.ciss1} noteName='ciss1' sound={sound2} timer={this.state.timer} />
        <NoteSound note={this.state.d1} noteName='d1' sound={dWav} timer={this.state.timer} />
        <NoteSound note={this.state.diss1} noteName='diss1' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.e1} noteName='e1' sound={eWav} timer={this.state.timer} />
        <NoteSound note={this.state.f1} noteName='f1' sound={fWav} timer={this.state.timer} />
        <NoteSound note={this.state.fiss1} noteName='fiss1' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.g1} noteName='g1' sound={gWav} timer={this.state.timer} />
        <NoteSound note={this.state.giss1} noteName='giss1' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.a1} noteName='a1' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.b1} noteName='b1' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.h1} noteName='h1' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.c2} noteName='c2' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.ciss2} noteName='ciss2' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.d2} noteName='d2' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.diss2} noteName='diss2' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.e2} noteName='e2' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.f2} noteName='f2' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.fiss2} noteName='fiss2' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.g2} noteName='g2' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.giss2} noteName='giss2' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.a2} noteName='a2' sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.b2} noteName='b2'sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.h2} noteName='h2'sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.c3} noteName='c3'sound={sound} timer={this.state.timer} />
        <NoteSound note={this.state.ciss3} noteName='ciss3'sound={sound} timer={this.state.timer} /> */}


        {/* <NoteSound note={this.state.c1} noteName='c1' code='65'sound={cWav} />
        <NoteSound note={this.state.ciss1} noteName='ciss1' sound={sound2} />
        <NoteSound note={this.state.d1} noteName='d1' sound={dWav} />
        <NoteSound note={this.state.diss1} noteName='diss1' sound={sound} />
        <NoteSound note={this.state.e1} noteName='e1' sound={eWav} />
        <NoteSound note={this.state.f1} noteName='f1' sound={fWav} />
        <NoteSound note={this.state.fiss1} noteName='fiss1' sound={sound} />
        <NoteSound note={this.state.g1} noteName='g1' sound={gWav} />
        <NoteSound note={this.state.giss1} noteName='giss1' sound={sound} />
        <NoteSound note={this.state.a1} noteName='a1' sound={sound} />
        <NoteSound note={this.state.b1} noteName='b1' sound={sound} />
        <NoteSound note={this.state.h1} noteName='h1' sound={sound} />
        <NoteSound note={this.state.c2} noteName='c2' sound={sound} />
        <NoteSound note={this.state.ciss2} noteName='ciss2' sound={sound} />
        <NoteSound note={this.state.d2} noteName='d2' sound={sound} />
        <NoteSound note={this.state.diss2} noteName='diss2' sound={sound} />
        <NoteSound note={this.state.e2} noteName='e2' sound={sound} />
        <NoteSound note={this.state.f2} noteName='f2' sound={sound} />
        <NoteSound note={this.state.fiss2} noteName='fiss2' sound={sound} />
        <NoteSound note={this.state.g2} noteName='g2' sound={sound} />
        <NoteSound note={this.state.giss2} noteName='giss2' sound={sound} />
        <NoteSound note={this.state.a2} noteName='a2' sound={sound} />
        <NoteSound note={this.state.b2} noteName='b2'sound={sound} />
        <NoteSound note={this.state.h2} noteName='h2'sound={sound} />
        <NoteSound note={this.state.c3} noteName='c3'sound={sound} />
        <NoteSound note={this.state.ciss3} noteName='ciss3'sound={sound} /> */}




        <button onClick={this.setPlayPause}>{buttonText}</button>
        <button onClick={this.stop}>Stop</button>

        <div className="noteCanvas-container" id="container">


          <canvas width="860" height="260" style={{zIndex: 11}} className="playheadCanvas" id="playheadCanvas" ref="playheadCanvas"></canvas>


          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas c1" id="notesCanvas" ref="c1"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas ciss1" id="notesCanvas" ref="ciss1"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas d1" id="notesCanvas" ref="d1"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas diss1" id="notesCanvas" ref="diss1"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas e1" id="notesCanvas" ref="e1"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas f1" id="notesCanvas" ref="f1"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas fiss1" id="notesCanvas" ref="fiss1"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas g1" id="notesCanvas" ref="g1"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas giss1" id="notesCanvas" ref="giss1"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas a1" id="notesCanvas" ref="a1"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas b1" id="notesCanvas" ref="b1"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas h1" id="notesCanvas" ref="h1"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas c2" id="notesCanvas" ref="c2"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas ciss2" id="notesCanvas" ref="ciss2"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas d2" id="notesCanvas" ref="d2"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas diss2" id="notesCanvas" ref="diss2"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas e2" id="notesCanvas" ref="e2"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas f2" id="notesCanvas" ref="f2"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas fiss2" id="notesCanvas" ref="fiss2"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas g2" id="notesCanvas" ref="g2"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas giss2" id="notesCanvas" ref="giss2"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas a2" id="notesCanvas" ref="a2"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas b2" id="notesCanvas" ref="b2"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas h2" id="notesCanvas" ref="h2"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas c3" id="notesCanvas" ref="c3"></canvas>
          <canvas width="860" height="10" style={{zIndex: 10}} className="canvas ciss3" id="notesCanvas" ref="ciss3"></canvas>

          {/* { this.buildNoteCanvas() } */}

        </div>

        {/* <div id="piano">
          <div className="keys">

            <Key keyClass='key' playing={this.state.c1_playing} />
            <Key keyClass='key black' playing={this.state.ciss1_playing} />
            <Key keyClass='key' playing={this.state.d1_playing} />
            <Key keyClass='key black' playing={this.state.diss1_playing} />
            <Key keyClass='key' playing={this.state.e_playing} />
            <Key keyClass='key' playing={this.state.f_playing} />
            <Key keyClass='key black' playing={this.state.fiss1_playing} />
            <Key keyClass='key' playing={this.state.g1_playing} />
            <Key keyClass='key black' playing={this.state.giss1_playing} />
            <Key keyClass='key' playing={this.state.a1_playing} />
            <Key keyClass='key black' playing={this.state.b1_playing} />
            <Key keyClass='key' playing={this.state.h1_playing} />
            <Key keyClass='key' playing={this.state.c2_playing} />
            <Key keyClass='key black' playing={this.state.ciss2_playing} />
            <Key keyClass='key' playing={this.state.d2_playing} />
            <Key keyClass='key black' playing={this.state.diss2_playing} />
            <Key keyClass='key' playing={this.state.e2_playing} />
            <Key keyClass='key' playing={this.state.f2_playing} />
            <Key keyClass='key black' playing={this.state.fiss2_playing} />
            <Key keyClass='key' playing={this.state.g2_playing} />
            <Key keyClass='key black' playing={this.state.giss2_playing} />
            <Key keyClass='key' playing={this.state.a2_playing} />
            <Key keyClass='key black' playing={this.state.b2_playing} />
            <Key keyClass='key' playing={this.state.h2_playing} />
            <Key keyClass='key' playing={this.state.c3_playing} />
            <Key keyClass='key black' playing={this.state.ciss3_playing} />

          </div> 
        </div>  */}

        <div id="piano">
          <div className="keys">
            { this.buildKeyboard() }
          </div> 
        </div>

      </React.Fragment>


      
    );
  }
}

export default App;
