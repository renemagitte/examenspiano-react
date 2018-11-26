import React, { Component } from 'react';
import './App.css';
import './index.css';
import './sass/main.sass';
import Key from './components/Key.js';

class App extends Component {

  state = {
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
    222: false, // 17, 186, Ö, f (2)
    221: false, // 18, 221, ^, f# (2)
    13: false,  // 19, 13, enter, g (2)
    188: false, // 20, 188, ,, g# (2)
    93: false,  // 21, 93, cmd right, a (2)
    190: false, // 22, 190, ., b / a# (2)
    18: false,  // 23,18, alt right :--( , h (2)
    189: false, // 24, 189, -, c (3)
    16: false,  // 25, 16, shift right, c# (3)
  }

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
    this.setState({ [e.keyCode]: true })
  }

  unpressKey = (e) => {
    e.preventDefault();
    this.setState({ [e.keyCode]: false })
  }

  buildKeyboard = () => {
    var keys = [];
    var numberOfKeys = 26;
    /* Keycodes in order of appearance in piano. Starting with note C = letter A/keycode 65.  */
    var keyCodes = [ 65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186, 222, 221, 13, 188, 93, 190, 18, 189, 16 ]

    for(var i = 0; i < numberOfKeys; i++){
        var key;
        // var keyClass = this.keyClass(i);
        var keyClass = this.keyClass(keyCodes[i]);
        if(this.state[keyCodes[i]]) keyClass += ' pressed';
        key = <Key className={keyClass} data-key={keyCodes[i]} />;
        keys.push(key);
    }
    return keys;
  }

  keyClass = (index) =>{
    switch (index) {
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

  render() {

    return (
      <div id="piano">
        <div className="keys">
          { this.buildKeyboard() }
        </div> 
      </div>
    );
  }
}

export default App;
