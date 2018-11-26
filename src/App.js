import React, { Component } from 'react';
import './App.css';
import './index.css';
import Key from './components/Key.js';

class App extends Component {

  state = {
    65: false
  }

  componentDidMount() {

    this.keydownEventlistener();
  }




keydownEventlistener = () => {
  window.addEventListener('keydown', this.pressKey);
}

pressKey = (e) => {
  e.preventDefault();


  console.log(e.keyCode)
  // for(var i = 0; i < allKeyElements.length; i++){
  //     if(e.keyCode == allKeyElements[i].dataset.key){
  //     allKeyElements[i].classList.add('pressed');
  // }
// }

  this.setState({ [e.keyCode]: true })

}

buildKeyboard = () => {
  var keys = [];
  var numberOfKeys = 26;
  var keyCodes = [ 65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186, 59, 222, 221, 13 ]

  for(var i = 0; i < numberOfKeys; i++){
      var key;
      var keyClass = this.keyClass(i);
      key = <Key className={keyClass} data-key={keyCodes[i]} />;
      keys.push(key);
  }
  return keys;
}

keyClass = (index) =>{
  switch (index) {
      case 1:
      case 3:
      case 6:
      case 8:
      case 10:
      case 13:
      case 15:
      case 18:
      case 20:
      case 22:
      case 25:
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
