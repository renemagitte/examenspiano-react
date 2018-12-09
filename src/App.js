import React, { Component } from 'react';
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

import VocalsTakeAChance from './sound/takeachancevocals.mp3';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { isTag } from 'postcss-selector-parser';

class App extends Component {

  state = {
    c1: false,
    c1Duration: [],
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
    // c1_playing: false,
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
    listenToRecorded: false,
    recordedNotes: [],
    recIndex: 0,
  }

  /* remove y from this array, not neccessary anymore */
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

  recordedNotes = [ { start: 3, note: 'd1' }, { start: 10, note: 'ciss1' }, { start: 12, note: 'c2' } ];
  // amountOfRecordedNotes = 0;

  /* This array holds the notes that are currently pressed down. drawNote-function uses this to know what notes to draw */
  // currentlyPlaying = [];



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

  // listenToRecorded = () => {
  //   this.setState({ listenToRecorded: !this.state.listenToRecorded });

  //   // this.setState({ playing: !this.state.playing });

  //   if(!this.state.listenToRecorded){
  //     this.playheadInterval2 = setInterval(this.play, 100);
  //   }
  //   if(this.state.listenToRecorded){
  //     clearInterval(this.playheadInterval2);
  //   }
  // }



  pressKey = (e) => {
    e.preventDefault();

    // this.currentlyPlaying.push(e.keyCode);

    // utkokmmenterad pga test
    // this.drawNote(e.keyCode);

    /* key styling is still connected to old states with keycodes: */
    this.setState({ [e.keyCode]: true });

    /* for sound: */
    this.noteState = this.getStateNameFromKeyCode(e.keyCode);
    

    /* TEST: to get note to play out for as long as it should: */
    this.noteDuration = this.noteState + 'Duration';
    // this.setState({ [this.noteDuration]: this.state[this.noteDuration] +1 });

    /* TEST: for recording */
    if(!this.state[this.noteState]){
      this.setState({ [this.noteDuration]: this.state.playheadAt });


      /* saving start point, a.k.a. where playhead is right now */
      // this.noteToRecord = { start: this.state.playheadAt, note: this.noteState };
      // this.setState({ recordedNotes: [...this.state.recordedNotes, this.noteToRecord] })
    }
    // let noteToRecord = { note: this.noteState, start: this.state.playheadAt, duration: this.state[this.noteDuration],  };


    this.setState({ [this.noteState]: true });

    // this.setState({ recordedNotes: [...this.state.recordedNotes, this.noteToRecord] })


  }

  /* TEST: for listening to recorded */
  // listen = () => {
  //   for(let i = 0; i < this.recordedNotes.length; i++){

  //     if(this.recordedNotes[i].start === this.state.playheadAt){
  //       this.setState({ [this.recordedNotes[i].note]: true });
  //     }
  //   }
  // }

  listen = () => {
    this.counter = 0;

    for(let i = 0; i < this.state.recordedNotes.length; i++){
      // this.counter++
      // console.log(this.state.recordedNotes[i].duration);

      // if(this.state.recordedNotes[i].start === this.state.playheadAt){
      //   this.setState({ [this.state.recordedNotes[i].note]: true });
      // }

      if(this.state.recordedNotes[i][1] === this.state.playheadAt){
        this.setState({ [this.state.recordedNotes[i][0]]: true });
      }

      if(this.state.recordedNotes[i][2] === this.state.playheadAt){
        this.setState({ [this.state.recordedNotes[i][0]]: false });
      }

      // if(this.state.recordedNotes[i].start < this.state.playheadAt){
      //   this.setState({ [this.state.recordedNotes[i].note]: false });
      // }

      // if(this.state.recordedNotes[i].duration === this.state.playheadAt){
      //   this.setState({ [this.state.recordedNotes[i].note]: false });
      // }

      console.log(this.recordedNotes);





      // if(counter > this.state.recordedNotes[i].duration){
      //   this.setState({ [this.state.recordedNotes[i].note]: false });
      // }



    }
  }

  // setFalse = (note) => {
  //   console.log(note)
  //   // this.setState({ [note]: false })
  // }





  getStateNameFromKeyCode = (code) => {
    var obj = this.findObjectByKey(this.keyY, 'code', code);
    /* If the key is not used null is returned the app breaks, so only return if not null */
    if(obj != null){
      return(obj.stateName);
    }
  }


  unpressKey = (e) => {
    e.preventDefault();

    /* removing the unpressed key from array of notes that are currently playing */
    // this.currentlyPlaying = this.currentlyPlaying.filter(function(item) {
    //   return item !== e.keyCode;
    // });

    /* key styling is still connected to old states with keycodes: */
    this.setState({ [e.keyCode]: false });

    /* for sound: */
    this.noteState = this.getStateNameFromKeyCode(e.keyCode);
    this.setState({ [this.noteState]: false });


    /* TEST: to get note to play out for as long as it should: */
    this.noteDuration = this.noteState + 'Duration';

    
    // this.setState({ [this.noteDuration]: 0 });

    this.noteToRecord = [this.noteState, this.state[this.noteDuration], this.state.playheadAt]

    console.log(this.noteToRecord);
    

    // this.setState({ [this.noteDuration]: this.noteToRecord })

    this.setState({ recordedNotes: [...this.state.recordedNotes, this.noteToRecord] })

    // this.setState({ [this.noteDuration]: [...this.state[this.noteDuration], this.state.playheadAt] })

    console.log( this.state.recordedNotes);


    // var obj = this.findObjectByKeyBackwards(this.state.recordedNotes, 'note', this.noteState);
    // if(this.obj != null){
    //   console.log(this.obj);
    // }
    




  
    /* TEST: for recording */
    // let noteToRecord = { stop: this.state.playheadAt };

    // let hej = this.state.recordedNotes;

    // console.log(hej);

    // this.setState({ recordedNotes[this.recIndex]: [...this.state.recordedNotes, noteToRecord] })


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

  startRecording = () => {

    this.setState({ playing: !this.state.playing });

    if(!this.state.playing){
      this.playheadInterval = setInterval(this.play, 100);
    }
    if(this.state.playing){
      clearInterval(this.playheadInterval);
    }

  }

  startListening = () => {

    // console.log(this.state.listenToRecorded);

    this.setState({ listenToRecorded: !this.state.listenToRecorded }, () => {
      if(this.state.listenToRecorded){
        this.playheadInterval2 = setInterval(this.movePlayhead, 100);
      }
      if(!this.state.listenToRecorded){
        clearInterval(this.playheadInterval2);
      }

    });





  }


  // setPlayPause = () => {
  //   this.setState({ playing: !this.state.playing });


  //   /* record-test */
  //   this.setState({ listenToRecorded: !this.state.listenToRecorded });



  //   if(!this.state.playing){
  //     this.playheadInterval = setInterval(this.play, 100);
  //   }
  //   if(this.state.playing){
  //     clearInterval(this.playheadInterval);
  //   }
  // }

  movePlayhead = () => {
    this.setState({ playheadAt: this.state.playheadAt + 1 });
    this.drawPlayhead(this.state.playheadAt);
    this.listen();
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

  // drawNote = (code) => {

  //   for(var i = 0; i < this.currentlyPlaying.length; i++){

  //     var newNote;
  //     var newNote2Y = this.getY(this.currentlyPlaying[i]);
  //     newNote = this.refs.notesCanvas.getContext('2d');
  //     newNote.fillStyle = "black";
  //     newNote.fillRect(this.state.playheadAt, newNote2Y, 5, 10);

  //   }
  // }

  getY = (code)  => {
    var obj = this.findObjectByKey(this.keyY, 'code', code);
    /* If the key is not used null is returned the app breaks, so only return if not null */
    if(obj != null){
      return(obj.y);
    }
  }

  /* takes an array of obejcts and a value, and returns the object where the key is the same as the value that's sent in */
  findObjectByKey = (array, key, value) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
  }

  findObjectByKeyBackwards = (array, key, value) => {
    for (var i = array.length; i > 0; i--) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
  }

  render() {

    let buttonText = this.state.listenToRecorded ? 'Pause' : 'Play';



    return (

      <React.Fragment>


        {/* <audio ref="elemC1" src={sound} ></audio>
        <audio ref="elemCiss1" src={sound} ></audio> */}

        
        <button onClick={this.startRecording}>Rec</button>
        {/* <button onClick={this.setPlayPause}>Rec</button> */}
        <button onClick={this.startListening}>{buttonText}</button>
        <button onClick={this.stop}>Stop</button>

        <div className="noteCanvas-container" id="container">
      

        <NoteSound note={this.state.c1} noteName='c1' code='65'sound={cWav} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.ciss1} noteName='ciss1' sound={sound2} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.d1} noteName='d1' sound={dWav} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.diss1} noteName='diss1' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.e1} noteName='e1' sound={eWav} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.f1} noteName='f1' sound={fWav} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.fiss1} noteName='fiss1' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.g1} noteName='g1' sound={gWav} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.giss1} noteName='giss1' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.a1} noteName='a1' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.b1} noteName='b1' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.h1} noteName='h1' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.c2} noteName='c2' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.ciss2} noteName='ciss2' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.d2} noteName='d2' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.diss2} noteName='diss2' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.e2} noteName='e2' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.f2} noteName='f2' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.fiss2} noteName='fiss2' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.g2} noteName='g2' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.giss2} noteName='giss2' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.a2} noteName='a2' sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.b2} noteName='b2'sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.h2} noteName='h2'sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.c3} noteName='c3'sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
        <NoteSound note={this.state.ciss3} noteName='ciss3'sound={sound} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />


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




        {/* <button onClick={this.setPlayPause}>{buttonText}</button>
        <button onClick={this.stop}>Stop</button>

        <div className="noteCanvas-container" id="container"> */}


          <canvas width="860" height="260" style={{zIndex: 11}} className="playheadCanvas" id="playheadCanvas" ref="playheadCanvas"></canvas>
          {/* <canvas width="860" height="260" style={{zIndex: 11}} class="canvas" id="notesCanvas" ref="notesCanvas"></canvas>  */}


          {/* <audio><source src={sound} type="audio/mpeg" /></audio>   */}

        
    
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

        <audio controls ref="elemCiss1" src={VocalsTakeAChance} loop="true"></audio>

      </React.Fragment>


      
    );
  }
}

export default App;
