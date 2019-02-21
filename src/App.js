import React, { Component } from 'react';
// import './App.css';
// import './index.css';
import './sass/main.sass';

import Key from './components/Key';
// import NoteCanvas from './components/NoteCanvas.js';

import ControlField from './components/ControlField';

import Keyboard from './components/Keyboard';
import NoteAudioGroup from './components/NoteAudioGroup';
import NoteCanvasGroup from './components/NoteCanvasGroup';

import NoteSound from './components/NoteSound.js';



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

    // TODO: keep all notes in object for more effective props: notes={this.state.notes}
    // notes: {
    //   c1: false,
    //   ciss1: false,
    //   d1: false,
    //   diss1: false,
    //   e1: false,
    //   f1: false,
    //   fiss1: false,
    //   g1: false,
    //   giss1: false,
    //   a1: false,
    //   b1: false,
    //   h1: false,
    //   c2: false,
    //   ciss2: false,
    //   d2: false,
    //   diss2: false,
    //   e2: false,
    //   f2: false,
    //   fiss2: false,
    //   g2: false,
    //   giss2: false,
    //   a2: false,
    //   b2: false,
    //   h2: false,
    //   c3: false,
    //   ciss3: false,
    // }

  }


  /* Since the listener is set on window and not the key elements, 
    we have to "translate" window's keyCode to note/state */
  keyCodeToNoteConnection = [
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


    console.log(e.keyCode)

    /* "Translate" from keyCode to name of note (noteState) */
    this.noteState = this.getStateNameFromKeyCode(e.keyCode);

    // /* key styling is still connected to old states with keycodes: (to be changed) */
    /* Set note's state to true */
    // this.setState({ [this.noteState]: true });




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
    var obj = this.findObjectByKey(this.keyCodeToNoteConnection, 'code', code);
    /* If the key is not used null is returned the app breaks, so only return if not null */
    if(obj != null){
      return(obj.stateName);
    }
  }


  unpressKey = (e) => {
    e.preventDefault();

    /* key styling is still connected to old states with keycodes: */
    // this.setState({ [e.keyCode]: false });

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



  /* Old version - looping out keyboard 
  buildKeyboard = () => {
    var keys = [];
    var numberOfKeys = 26;
    // Keycodes in order of appearance in piano. Starting with note C = letter A/keycode 65.
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
  */

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

    let time =  Math.floor (this.state.playheadAt / 10);
    let ms = Math.floor (this.state.playheadAt);

    return (

      <React.Fragment>

        <div className="synth-container">


          {/* <div className="synth-control"> */}

          <ControlField 
            playing={this.state.playing}
            listenToRecorded={this.state.listenToRecorded}
            startRecording={this.startRecording}
            startListening={this.startListening}
            stop={this.stop}
          />

            {/* 00:{ time }:{ms} */}
            {/* <div className="buttons-wrapper">
              <button className={recClass} onClick={this.startRecording}>●	REC</button>
              <button className={playClass} onClick={this.startListening}>{buttonText}</button>
              <button className="button button-regular" onClick={this.stop}>■</button>
            </div>       */}

            {/* <Loop playheadAt={this.state.playheadAt} listenToRecorded={this.state.listenToRecorded} /> */}

          {/* </div> */}

        


        <div className="noteCanvas-container" id="container">


        <NoteCanvasGroup 
          playheadAt={this.state.playheadAt} 
          listenToRecorded={this.state.listenToRecorded}
          playheadAt={this.state.playheadAt} 
          c1={this.state.c1}
          ciss1={this.state.ciss1}
          d1={this.state.d1}
          diss1={this.state.diss1}
          e1={this.state.e1}
          f1={this.state.f1}
          fiss1={this.state.fiss1}
          g1={this.state.g1}
          giss1={this.state.giss1}
          a1={this.state.a1}
          b1={this.state.b1}
          h1={this.state.h1}
          c2={this.state.c2}
          ciss2={this.state.ciss2}
          d2={this.state.d2}
          diss2={this.state.diss2}
          e2={this.state.e2}
          f2={this.state.f2}
          fiss2={this.state.fiss2}
          g2={this.state.g2}
          giss2={this.state.giss2}
          a2={this.state.a2}
          b2={this.state.b2}
          h2={this.state.h2}
          c3={this.state.c3}
          ciss3={this.state.ciss3}
        />


          {/* Not in seperate component due to problems with ref: */}
          <canvas 
            width="860" 
            height="132" 
            style={{zIndex: 11}} 
            className="playheadCanvas" 
            // id="playheadCanvas" 
            ref="playheadCanvas">
          </canvas>

          
        </div>




        <NoteAudioGroup 
          listenToRecorded={this.state.listenToRecorded}
          playheadAt={this.state.playheadAt} 
          c1={this.state.c1}
          ciss1={this.state.ciss1}
          d1={this.state.d1}
          diss1={this.state.diss1}
          e1={this.state.e1}
          f1={this.state.f1}
          fiss1={this.state.fiss1}
          g1={this.state.g1}
          giss1={this.state.giss1}
          a1={this.state.a1}
          b1={this.state.b1}
          h1={this.state.h1}
          c2={this.state.c2}
          ciss2={this.state.ciss2}
          d2={this.state.d2}
          diss2={this.state.diss2}
          e2={this.state.e2}
          f2={this.state.f2}
          fiss2={this.state.fiss2}
          g2={this.state.g2}
          giss2={this.state.giss2}
          a2={this.state.a2}
          b2={this.state.b2}
          h2={this.state.h2}
          c3={this.state.c3}
          ciss3={this.state.ciss3}
        />



        <Keyboard 
          c1={this.state.c1}
          ciss1={this.state.ciss1}
          d1={this.state.d1}
          diss1={this.state.diss1}
          e1={this.state.e1}
          f1={this.state.f1}
          fiss1={this.state.fiss1}
          g1={this.state.g1}
          giss1={this.state.giss1}
          a1={this.state.a1}
          b1={this.state.b1}
          h1={this.state.h1}
          c2={this.state.c2}
          ciss2={this.state.ciss2}
          d2={this.state.d2}
          diss2={this.state.diss2}
          e2={this.state.e2}
          f2={this.state.f2}
          fiss2={this.state.fiss2}
          g2={this.state.g2}
          giss2={this.state.giss2}
          a2={this.state.a2}
          b2={this.state.b2}
          h2={this.state.h2}
          c3={this.state.c3}
          ciss3={this.state.ciss3}
        />

        {/* <div id="piano">
          <div className="keys">
            { this.buildKeyboard() }
          </div> 
        </div> */}


        </div>


      </React.Fragment>


      
    );
  }
}

export default App;
