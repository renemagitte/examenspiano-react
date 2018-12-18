import React, { Component } from 'react';
import './App.css';
import './index.css';
import './sass/main.sass';
import Key from './components/Key.js';
// import NoteCanvas from './components/NoteCanvas.js';
// import Playhead from './components/Playhead.js';


import NoteSound from './components/NoteSound.js';
import Loop from './components/Loop.js';

import c1Audio from './sound/c1.mp3';
import ciss1Audio from './sound/ciss1.mp3';
import d1Audio from './sound/d1.mp3';
import diss1Audio from './sound/diss1.mp3';
import e1Audio from './sound/e1.mp3';
import f1Audio from './sound/f1.mp3';
import fiss1Audio from './sound/fiss1.mp3';
import g1Audio from './sound/g1.mp3';
import giss1Audio from './sound/giss1.mp3';
import a1Audio from './sound/a1.mp3';
import b1Audio from './sound/b1.mp3';
import h1Audio from './sound/h1.mp3';
import c2Audio from './sound/c2.mp3';
import ciss2Audio from './sound/ciss2.mp3';
import d2Audio from './sound/d2.mp3';
import diss2Audio from './sound/diss2.mp3';
import e2Audio from './sound/e2.mp3';
import f2Audio from './sound/f2.mp3';
import fiss2Audio from './sound/fiss2.mp3';
import g2Audio from './sound/g2.mp3';
import giss2Audio from './sound/giss2.mp3';
import a2Audio from './sound/a2.mp3';
import b2Audio from './sound/b2.mp3';
import h2Audio from './sound/h2.mp3';
import c3Audio from './sound/c3.mp3';
import ciss3Audio from './sound/ciss3.mp3';

// import VocalsTakeAChance from './sound/takeachancevocals.mp3';
import beat from './sound/testbeat.mp3';



class App extends Component {

  state = {
    playing: false, //change name to recording - less confusing
    playheadAt: 0,
    listenToRecorded: false,
    recordedNotes: [],

    /* test */
    recBlock1: [],
    recBlock2: [],
    recBlock3: [],
    recBlock4: [],
    recBlock5: [],
    recBlock6: [],
    recBlock7: [],
    recBlock8: [],

    c1: false,
    c1Data: [],
    ciss1: false,
    ciss1Data: [],
    d1: false,
    d1Data: [],
    diss1: false,
    diss1Data: [],
    e1: false,
    e1Data: [],
    f1: false,
    f1Data: [],
    fiss1: false,
    fiss1Data: [],
    g1: false,
    g1Data: [],
    giss1: false,
    giss1Data: [],
    a1: false,
    a1Data: [],
    b1: false,
    b1Data: [],
    h1: false,
    h1Data: [],
    c2: false,
    c2Data: [],
    ciss2: false,
    ciss2Data: [],
    d2: false,
    d2Data: [],
    diss2: false,
    diss2Data: [],
    e2: false,
    e2Data: [],
    f2: false,
    f2Data: [],
    fiss2: false,
    fiss2Data: [],
    g2: false,
    g2Data: [],
    giss2: false,
    giss2Data: [],
    a2: false,
    a2Data: [],
    b2: false,
    b2Data: [],
    h2: false,
    h2Data: [],
    c3: false,
    c3Data: [],
    ciss3: false,
    ciss3Data: [],


    /* These are connected to key styling only, not sound. Make styling depending on state above too, instead */
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


  }

  /* This name  (keyY) is not accurate anymore. Change name! */
  keyY = [
    {code: 65, stateName: 'c1'},  // 0, 65, A, c
    {code: 87, stateName: 'ciss1'},  // 1, 87, W, c#
    {code: 83, stateName: 'd1'},  // 2, 83, S, d
    {code: 69, stateName: 'diss1'},  // 3, 69, S, d#
    {code: 68, stateName: 'e1'},  // 4, 68, D, e
    {code: 70, stateName: 'f1'},  // 5, 70, F, f
    {code: 84, stateName: 'fiss1'},  // 6, 84, T, f#
    {code: 71, stateName: 'g1'},  // 7, 71, T, g
    {code: 89, stateName: 'giss1'},  // 8, 89, Y, g#
    {code: 72, stateName: 'a1'},  // 9, 72, H, a
    {code: 85, stateName: 'b1'},  // 10, 85, U, b / a#
    {code: 74, stateName: 'h1'},  // 11, 74, J, h
    {code: 75, stateName: 'c2'},  // 12, 75, K, c (2)
    {code: 79, stateName: 'ciss2'},  // 13, 79, O, c# (2)
    {code: 76, stateName: 'd2'},  // 14, 78, L, d (2)
    {code: 80, stateName: 'diss2'},  // 15, 80, P, d# (2)
    {code: 186, stateName: 'e2'}, // 16, 186, Ö, e (2)
    {code: 222, stateName: 'f2'}, // 17, 222, Ä, f (2)
    {code: 221, stateName: 'fiss2'}, // 18, 221, ^, f# (2)
    {code: 13, stateName: 'g2'},  // 19, 13, enter, g (2)
    {code: 188, stateName: 'giss2'}, // 20, 188, ,, g# (2)
    {code: 93, stateName: 'a2'},  // 21, 93, cmd right, a (2)
    {code: 190, stateName: 'b2'}, // 22, 190, ., b / a# (2)
    {code: 18, stateName: 'h2'},  // 23, 18, alt right, h (2)
    {code: 189, stateName: 'c3'}, // 24, 189, -, c (3)
    {code: 16, stateName: 'ciss3'}  // 25, 16, shift right, c# (3)
  ]


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

    /* key styling is still connected to old states with keycodes: (to be changed) */
    this.setState({ [e.keyCode]: true });

    /* "Translate" from keyCode to name of note (noteState) */
    this.noteState = this.getStateNameFromKeyCode(e.keyCode);

    /* Generate data state where length of pressed down note is stored */
    this.noteData = this.noteState + 'Data';

    /* If the noteState is not true (yet!) save starting point for note (a.k.a. where playhead is at the moment ) */
    if(!this.state[this.noteState]){
      this.setState({ [this.noteData]: this.state.playheadAt });
    }

    /* Set noteState to true - it is playing */
    this.setState({ [this.noteState]: true });

  }


  listen = () => {

    console.log(this.state.playheadAt)

    /**
     * this.state.recordedNotes[i][0] = notename
     * this.state.recordedNotes[i][1] = note should start playing when playhead is at...
     * this.state.recordedNotes[i][2] = note should stop playing when playhead is at...
     */

    for(let i = 0; i < this.state.recordedNotes.length; i++){
      if(this.state.recordedNotes[i][1] === this.state.playheadAt){
        this.setState({ [this.state.recordedNotes[i][0]]: true });
      }
      if(this.state.recordedNotes[i][2] === this.state.playheadAt){
        this.setState({ [this.state.recordedNotes[i][0]]: false });
      }
    }

    /* test with recording blocks to avoid looping over too many note objects when listening to recoded */
    // if(this.state.playheadAt < 100){
    //   for(let i = 0; i < this.state.recBlock1.length; i++){
    //     if(this.state.recBlock1[i][1] === this.state.playheadAt){
    //       this.setState({ [this.state.recBlock1[i][0]]: true });
    //     }
    //     if(this.state.recBlock1[i][2] === this.state.playheadAt){
    //       this.setState({ [this.state.recBlock1[i][0]]: false });
    //     }
    //   }
    // // }
    // }else if(this.state.playheadAt < 200){
    //   for(let i = 0; i < this.state.recBlock2.length; i++){
    //     if(this.state.recBlock2[i][1] === this.state.playheadAt){
    //       this.setState({ [this.state.recBlock2[i][0]]: true });
    //     }
    //     if(this.state.recBlock2[i][2] === this.state.playheadAt){
    //       this.setState({ [this.state.recBlock2[i][0]]: false });
    //     }
    //   }
    // }else if(this.state.playheadAt < 300){
    //   for(let i = 0; i < this.state.recBlock3.length; i++){
    //     if(this.state.recBlock3[i][1] === this.state.playheadAt){
    //       this.setState({ [this.state.recBlock3[i][0]]: true });
    //     }
    //     if(this.state.recBlock3[i][2] === this.state.playheadAt){
    //       this.setState({ [this.state.recBlock3[i][0]]: false });
    //     }
    //   }
    // }

    // if(this.state.playheadAt < 220){
    //   for(let i = 0; i < this.state.recBlock2.length; i++){
    //     if(this.state.recBlock2[i][1] === this.state.playheadAt){
    //       this.setState({ [this.state.recBlock2[i][0]]: true });
    //     }
    //     if(this.state.recBlock2[i][2] === this.state.playheadAt){
    //       this.setState({ [this.state.recBlock2[i][0]]: false });
    //     }
    //   }
    // }
    // if(this.state.playheadAt < 300){
    //   for(let i = 0; i < this.state.recBlock3.length; i++){
    //     if(this.state.recBlock3[i][1] === this.state.playheadAt){
    //       this.setState({ [this.state.recBlock3[i][0]]: true });
    //     }
    //     if(this.state.recBlock3[i][2] === this.state.playheadAt){
    //       this.setState({ [this.state.recBlock3[i][0]]: false });
    //     }
    //   }
    // }

  }


  getStateNameFromKeyCode = (code) => {
    var obj = this.findObjectByKey(this.keyY, 'code', code);
    /* If the key is not used null is returned the app breaks, so only return if not null */
    if(obj != null){
      return(obj.stateName);
    }
  }


  unpressKey = (e) => {
    e.preventDefault();

    /* key styling is still connected to old states with keycodes: */
    this.setState({ [e.keyCode]: false });

    /* "Translate" from keyCode to name of note (noteState) */
    this.noteState = this.getStateNameFromKeyCode(e.keyCode);

    /* Set noteState to false (not playing) */
    this.setState({ [this.noteState]: false });


    /* Generate data state where length of pressed down note is stored */
    this.noteData = this.noteState + 'Data';

    /** 
     * Now when the key is unpressed we have the data we need to save for recording,
     * let's save it in an array:
     * noteToRecord = [ noteState, start of note, end of note ]
     * Start of note is allready saved in noteData state from when the key was first pressed.
     * End of note is where playhead is at when we unpress the key.
     */
    this.noteToRecord = [this.noteState, this.state[this.noteData], this.state.playheadAt]

    /* Adding the noteData-array to array in recordedNotes-state */
    this.setState({ recordedNotes: [...this.state.recordedNotes, this.noteToRecord] });

    /* test with recording blocks */
    // if(this.state.playheadAt < 100){
    //   this.setState({ recBlock1: [...this.state.recBlock1, this.noteToRecord] });
    // }else if(this.state.playheadAt < 200){
    //   this.setState({ recBlock2: [...this.state.recBlock2, this.noteToRecord] });
    // }else if(this.state.playheadAt < 300){
    //   this.setState({ recBlock3: [...this.state.recBlock3, this.noteToRecord] });
    // }else if(this.state.playheadAt < 400){
    //   this.setState({ recBlock4: [...this.state.recBlock4, this.noteToRecord] });
    // }else if(this.state.playheadAt < 500){
    //   this.setState({ recBlock5: [...this.state.recBlock5, this.noteToRecord] });
    // }else if(this.state.playheadAt < 600){
    //   this.setState({ recBlock6: [...this.state.recBlock6, this.noteToRecord] });
    // }else if(this.state.playheadAt < 700){
    //   this.setState({ recBlock7: [...this.state.recBlock7, this.noteToRecord] });
    // }else if(this.state.playheadAt < 800){
    //   this.setState({ recBlock8: [...this.state.recBlock8, this.noteToRecord] });
    // }


    // console.log( this.state.recordedNotes);

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

    this.setState({ listenToRecorded: !this.state.listenToRecorded }, () => {
      if(this.state.listenToRecorded){
        this.playheadInterval2 = setInterval(this.movePlayhead, 100);
      }
      if(!this.state.listenToRecorded){
        clearInterval(this.playheadInterval2);
      }

    });

  }



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
    clearInterval(this.playheadInterval2);

    // this.setState({ playing: !this.state.playing, playheadAt: 0 }, () => {
    this.setState({ playing: false, listenToRecorded: false, playheadAt: 0 }, () => {
      this.drawPlayhead(this.state.playheadAt);
    });


  }


  /* takes an array of obejcts and a value, and returns the object where the key is the same as the value that's sent in */
  /* Maybe remove this and only keep the backwards-version as it's faster anyways.. */
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

    let buttonText = this.state.listenToRecorded ? '| |' : '▶';

    // let recClass = this.state.playing ? 'button button-darkred--active' : 'button button-darkred';
    let recClass = this.state.playing ? 'button button--pressed' : 'button';

    let time =  Math.floor (this.state.playheadAt / 10);
    let ms = Math.floor (this.state.playheadAt);

    return (

      <React.Fragment>

        <div className="synth-container">

          <div className="synth-control">

            {/* 00:{ time }:{ms} */}
            <div className="buttons-wrapper">
              {/* <button className={recClass} onClick={this.startRecording}>●	REC</button>
              <button className="button button-grey" onClick={this.startListening}>{buttonText}</button>
              <button className="button button-grey" onClick={this.stop}>■ Stop</button> */}

              <button className={recClass} onClick={this.startRecording}>●	REC</button>
              <button className="button" onClick={this.startListening}>{buttonText}</button>
              <button className="button" onClick={this.stop}>■</button>
            </div>      

            <Loop sound={beat} playheadAt={this.state.playheadAt} />

          </div>

        


        <div className="noteCanvas-container" id="container">
      
          <NoteSound note={this.state.c1} noteName='c1' code='65'sound={c1Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.ciss1} noteName='ciss1' sound={ciss1Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.d1} noteName='d1' sound={d1Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.diss1} noteName='diss1' sound={diss1Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.e1} noteName='e1' sound={e1Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.f1} noteName='f1' sound={f1Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.fiss1} noteName='fiss1' sound={fiss1Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.g1} noteName='g1' sound={g1Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.giss1} noteName='giss1' sound={giss1Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.a1} noteName='a1' sound={a1Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.b1} noteName='b1' sound={b1Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.h1} noteName='h1' sound={h1Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.c2} noteName='c2' sound={c2Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.ciss2} noteName='ciss2' sound={ciss2Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.d2} noteName='d2' sound={d2Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.diss2} noteName='diss2' sound={diss2Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.e2} noteName='e2' sound={e2Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.f2} noteName='f2' sound={f2Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.fiss2} noteName='fiss2' sound={fiss2Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.g2} noteName='g2' sound={g2Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.giss2} noteName='giss2' sound={giss2Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.a2} noteName='a2' sound={a2Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.b2} noteName='b2'sound={b2Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.h2} noteName='h2'sound={h2Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.c3} noteName='c3'sound={c3Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />
          <NoteSound note={this.state.ciss3} noteName='ciss3'sound={ciss3Audio} playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} />


          <canvas width="860" height="132" style={{zIndex: 11}} className="playheadCanvas" id="playheadCanvas" ref="playheadCanvas"></canvas>

          
        </div>

          <div className="synth-title">Synth 1.0</div>



        

        <div id="piano">
          {/* <button className="button" onClick={this.startRecording}>●	REC</button>
          <button className="button" onClick={this.startListening}>{buttonText}</button>
          <button className="button" onClick={this.stop}>■ Stop</button> */}

          <div className="keys">
            { this.buildKeyboard() }
          </div> 
        </div>

        {/* <audio controls src={beat} loop="true"></audio> */}

        </div>


      </React.Fragment>


      
    );
  }
}

export default App;
