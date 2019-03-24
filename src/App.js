import React, { Component } from 'react';
import './App.sass'

import ControlField from './components/ControlField';
import Playhead from './components/Playhead';
import Keyboard from './components/Keyboard'; 
import NoteAudioGroup from './components/NoteAudioGroup';
import NoteCanvasGroup from './components/NoteCanvasGroup';

class App extends Component {

  state = {
    timer: 0,
    recording: false,
    playing: false,
    allowBeat: true,

    recordedNotes: [],

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

  }

  /* Since the listener is set on window and not the key elements, 
    we have to "translate" window's keyCode to note/state according to this array: */
  keyCodeToNoteConnection = [
    {code: 65, stateName: 'c1'},  // A
    {code: 87, stateName: 'ciss1'},  // W
    {code: 83, stateName: 'd1'},  // S
    {code: 69, stateName: 'diss1'},  // S
    {code: 68, stateName: 'e1'},  // D
    {code: 70, stateName: 'f1'},  // F
    {code: 84, stateName: 'fiss1'},  // T
    {code: 71, stateName: 'g1'},  // T
    {code: 89, stateName: 'giss1'},  // Y
    {code: 72, stateName: 'a1'},  // H
    {code: 85, stateName: 'b1'},  // U
    {code: 74, stateName: 'h1'},  // J
    {code: 75, stateName: 'c2'},  // K
    {code: 79, stateName: 'ciss2'},  // O
    {code: 76, stateName: 'd2'},  // L
    {code: 80, stateName: 'diss2'},  // P
    {code: 186, stateName: 'e2'}, // Ö
    {code: 222, stateName: 'f2'}, // Ä
    {code: 221, stateName: 'fiss2'}, // ^
    {code: 13, stateName: 'g2'},  // enter
    {code: 188, stateName: 'giss2'}, // ,
    {code: 93, stateName: 'a2'},  // cmd (right)
    {code: 190, stateName: 'b2'}, // .
    {code: 18, stateName: 'h2'},  // alt (right)
    {code: 189, stateName: 'c3'}, // -
    {code: 16, stateName: 'ciss3'}  // shift (right)
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
    /* "Translate" from keyCode to name of note (noteState) */
    this.noteState = this.getStateNameFromKeyCode(e.keyCode);

    /* Generate data state where length of pressed down note is stored */
    this.noteData = this.noteState + 'Data';

    /* If the noteState is not true (yet!) save starting point for note (a.k.a. where timer is at the moment ) */
    if(!this.state[this.noteState]){
      this.setState({ [this.noteData]: this.state.timer });
    }

    /* Set noteState to true - it is playing */
    this.setState({ [this.noteState]: true });
  }

  unpressKey = (e) => {
    e.preventDefault();

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
    this.noteToRecord = [this.noteState, this.state[this.noteData], this.state.timer]

    /* Adding the noteData-array to array in recordedNotes-state */
    this.setState({ recordedNotes: [...this.state.recordedNotes, this.noteToRecord] });
  }

  timerIncrement = () => {
    this.setState({ timer: this.state.timer + 1 });
  }

  pressRecordButton = () => {
    this.setState({ recording: !this.state.recording });

    if(!this.state.recording){
      this.recordingInterval = setInterval(this.timerIncrement, 100);
    }else if(this.state.recording){
      clearInterval(this.recordingInterval);
    }
  }

  pressPlayButton = () => {
    this.setState({ playing: !this.state.playing }, () => {

      if(this.state.playing){
          this.playingInterval = setInterval(() => {
            this.timerIncrement();
            this.playRecordedNotes();
          }, 100);
      }else if(!this.state.playing){
          clearInterval(this.playingInterval);
      }

    });



  }

  pressStopButton = () => {
    clearInterval(this.recordingInterval);
    clearInterval(this.playingInterval);

    this.setState({ recording: false, playing: false, timer: 0, allowBeat: false }, () => {
      this.setState({ allowBeat: true })
    });
  }

  playRecordedNotes = () => {

    /**
     * this.state.recordedNotes[i][0] = notename
     * this.state.recordedNotes[i][1] = note should start playing when playhead is at...
     * this.state.recordedNotes[i][2] = note should stop playing when playhead is at...
     */

    for(let i = 0; i < this.state.recordedNotes.length; i++){
      if(this.state.recordedNotes[i][1] === this.state.timer){
        this.setState({ [this.state.recordedNotes[i][0]]: true });
      }
      if(this.state.recordedNotes[i][2] === this.state.timer){
        this.setState({ [this.state.recordedNotes[i][0]]: false });
      }
    }

  }

  getStateNameFromKeyCode = (code) => {
    var obj = this.findObjectByKey(this.keyCodeToNoteConnection, 'code', code);
    /* If the key is not used null is returned the app breaks, so only return if not null */
    if(obj != null){
      return(obj.stateName);
    }
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


    return (

      <div className="synth">

          <ControlField 
            timer={this.state.timer}
            recording={this.state.recording}
            playing={this.state.playing}
            allowBeat={this.state.allowBeat}
            pressRecordButton={this.pressRecordButton}
            pressPlayButton={this.pressPlayButton}
            pressStopButton={this.pressStopButton}
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

        <div className="canvas">
          <NoteCanvasGroup 
            timer={this.state.timer} 
            playing={this.state.playing}
            recording={this.state.recording}
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

          <Playhead timer={this.state.timer} />
        </div>


        <NoteAudioGroup 
          playing={this.state.playing}
          timer={this.state.timer} 
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

      </div>
 
    );
  }
}

export default App;
