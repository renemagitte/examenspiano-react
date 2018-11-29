import React, { Component } from 'react';
import './App.css';
import './index.css';
import './sass/main.sass';
import Key from './components/Key.js';
// import NoteCanvas from './components/NoteCanvas.js';
import Playhead from './components/Playhead.js';

class App extends Component {

  state = {
    c1_playing: true,
    // c1_keycode: 65,
    // ciss1_playing: false,
    // ciss1_keycode: 87,
    // d1_playing: false,
    // d1_keycode: 83,
    // diss1_playing: false,
    // diss1_keycode: 69,
    // e1_playing: false,
    // e1_keycode: 68,
    // f1_playing: false,
    // f1_keycode: 70,
    // fiss1_playing: false,
    // fiss1_keycode: 84,
    // g1_playing: false,
    // g1_keycode: 71,
    // giss1_playing: false,
    // giss1_keykode: 89,
    // a1_playing: false,
    // a1_keycode: 72,
    // b1_playing: false,
    // b1_keycode: 85,
    // h1_playing: false,
    // h1_keycode: 74,
    // c2_playing: false,
    // c2_keycode: 75,
    // ciss2_playing: false,
    // ciss2_keycode: 79,
    // d2_playing: false,
    // d2_keycode: 76,
    // diss2_playing: false,
    // diss2_keycode: 80,
    // e2_playing: false,
    // e2_keycode: 186,
    // f2_playing: false,
    // f2_keycode: 222,
    // fiss2_playing: false,
    // fiss2_keycode: 221,
    // g2_playing: false,
    // g2_keycode: 13,
    // giss2_playing: false,
    // giss2_keycode: 188,
    // a2_playing: false,
    // a2_keycode: 93,
    // b2_playing: false,
    // b2_keycode: 190,
    // h2_playing: false,
    // h2_keycode: 18,
    // c3_playing: false,
    // c3_keycode: 189,
    // ciss3_playing: false,
    // ciss3_keycode: 16,


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
    playheadAt: 0,
  }

  keyY = [
    { code: 65, y: 250},  // 0, 65, A, c
    { code: 87, y: 240},  // 1, 87, W, c#
    {code: 83, y: 230},  // 2, 83, S, d
    {code: 69, y: 220},  // 3, 69, S, d#
    {code: 68, y: 210},  // 4, 68, D, e
    {code: 70, y: 200},  // 5, 70, F, f
    {code: 84, y: 190},  // 6, 84, T, f#
    {code: 71, y: 180},  // 7, 71, T, g
    {code: 89, y: 170},  // 8, 89, Y, g#
    {code: 72, y: 160},  // 9, 72, H, a
    {code: 85, y: 150},  // 10, 85, U, b / a#
    {code: 74, y: 140},  // 11, 74, J, h
    {code: 75, y: 130},  // 12, 75, K, c (2)
    {code: 79, y: 120},  // 13, 79, O, c# (2)
    {code: 76, y: 110},  // 14, 78, L, d (2)
    {code: 80, y: 100},  // 15, 80, P, d# (2)
    {code: 186, y: 90}, // 16, 186, Ö, e (2)
    {code: 222, y: 80}, // 17, 222, Ä, f (2)
    {code: 221, y: 70}, // 18, 221, ^, f# (2)
    {code: 13, y: 60},  // 19, 13, enter, g (2)
    {code: 188, y: 50}, // 20, 188, ,, g# (2)
    {code: 93, y: 40},  // 21, 93, cmd right, a (2)
    {code: 190, y: 30}, // 22, 190, ., b / a# (2)
    {code: 18, y: 20},  // 23,18, alt right :--( , h (2)
    {code: 189, y: 10}, // 24, 189, -, c (3)
    {code: 16, y: 0}  // 25, 16, shift right, c# (3)
  ]

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

    this.drawNote(e.keyCode);

    this.currentlyPlaying.push(e.keyCode);
    // console.log(this.currentlyPlaying);


    // console.log(e.keyCode);
    this.setState({ [e.keyCode]: true });

    // this.setState({ [e.keyCode]: true }, () => {
    //   this.playNote(e.keyCode);
    // });

    // this.setState({ [e.keyCode]: true });
    // switch (e.keyCode) {
    //   case 65:
    //     this.setState({ c1_playing: true });
    //     break;
    //   default: 
    //       return '';
    // }
  }


  unpressKey = (e) => {
    e.preventDefault();

    // remove from currenlty playing!

    this.removeFromCurrentlyPlaying(e.keyCode);


    this.setState({ [e.keyCode]: false });
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
    this.setState({ playheadAt: this.state.playheadAt + 1 });
    this.drawPlayhead(this.state.playheadAt);

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
    this.setState({ playing: !this.state.playing, playheadAt: 0 }, () => {
      this.drawPlayhead(this.state.playheadAt);
    });
  }

  drawNote = (code) => {

    for(var i = 0; i < this.currentlyPlaying.length; i++){

      var newNote;
      var newNote2Y = this.getY(this.currentlyPlaying[i]);
      newNote = this.refs.notesCanvas.getContext('2d');
      // console.log(newNote);
      // console.log(newNote2Y);
      // console.log(this.state.playheadAt);
      newNote.fillStyle = "black";
      newNote.fillRect(this.state.playheadAt, newNote2Y, 5, 10);

    }


    // if(this.state.c1_playing == true){
    //   var c1;
    //   var c1Y = 250;
    //   c1 = this.refs.c1Canvas.getContext('2d');
    //   c1.fillStyle = "black";
    //   c1.fillRect(this.state.playheadAt, 250, 5, 10);
    // }


    // // Works one note:
    // var newNote;
    // var newNote2Y = this.getY(code);
    // newNote = this.refs.notesCanvas.getContext('2d');
    // // console.log(newNote);
    // // console.log(newNote2Y);
    // // console.log(this.state.playheadAt);
    // newNote.fillStyle = "black";
    // newNote.fillRect(this.state.playheadAt, newNote2Y, 5, 10);

  }

  getY = (code)  => {

    var obj = this.findObjectByKey(this.keyY, 'code', code);

    /* If the key is not used null is returned the app breaks, so only return if not null */
    if(obj != null){
      return(obj.y);
    }

  }

  findObjectByKey = (array, key, value) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
  }

  removeFromCurrentlyPlaying = (code) => {

    var arr = [];
    for( var i = 0; i < this.currentlyPlaying.length-1; i++){ 
      if ( this.currentlyPlaying[i] === code) {
        // this.arr = this.currentlyPlaying.splice(i, 1); 
        // console.log(this.arr);

        this.currentlyPlaying = this.currentlyPlaying.splice(i, 1);
        console.log(this.currentlyPlaying);
      }
    }

    

  }

  render() {

    let buttonText = this.state.playing ? 'Pause' : 'Play';



    return (

      <React.Fragment>

        <button onClick={this.setPlayPause}>{buttonText}</button>
        <button onClick={this.stop}>Stop</button>

        <div className="noteCanvas-container" id="container">


          <canvas width="860" height="260" style={{zIndex: 10}} class="canvas" id="playheadCanvas" ref="playheadCanvas"></canvas>
          <canvas width="860" height="260" style={{zIndex: 11}} class="canvas" id="notesCanvas" ref="notesCanvas"></canvas> 
          <canvas width="860" height="260" style={{zIndex: 12}} class="canvas" id="notesCanvas" ref="c1Canvas"></canvas>   
    
          {/* <NoteCanvas pressedKeys={this.state} /> */}

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
