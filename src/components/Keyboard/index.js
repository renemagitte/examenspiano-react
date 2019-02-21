import React from 'react';
// import PropTypes from 'prop-types'
import './styles/index.sass';

import Key from './../Key';


const Keyboard = (props) => {

  // state = {

  // }

  // buildKeyboard = () => {
  //   var keys = [];
  //   var numberOfKeys = 26;
  //   /* Keycodes in order of appearance in piano. Starting with note C = letter A/keycode 65.  */
  //   var keyCodes = [ 65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186, 222, 221, 13, 188, 93, 190, 18, 189, 16 ]

  //   for(var i = 0; i < numberOfKeys; i++){
  //       var key;
  //       var keyClass = this.keyClass(keyCodes[i]);
  //       this.props[keyCodes[i]] ? keyClass += ' pressed' : '';
  //       key = <Key className={keyClass} key={keyCodes[i]} />;
  //       keys.push(key);
  //   }
  //   return keys;
  // }

  // keyClass = (code) =>{
  //   switch (code) {
  //     case 87:
  //     case 69:
  //     case 84:
  //     case 89:
  //     case 85:
  //     case 79:
  //     case 80:
  //     case 221:
  //     case 188:
  //     case 190:
  //     case 16:
  //         return 'key black';
  //     default: 
  //         return 'key';
  //   }
  // }


  // render(){

    return(
      <div id="piano">
        <div className="keys">
          {/* { this.buildKeyboard() } */}

          <Key className={ `key ${props.c1 && ` pressed`} `} key='65' />
          <Key className={ `key black ${props.ciss1 && ` pressed`} `} key='87' />
          <Key className={ `key ${props.d1 && ` pressed`} `} key='83' />
          <Key className={ `key black ${props.diss1 && ` pressed`} `} key='69' />
          <Key className={ `key ${props.e1 && ` pressed`} `} key='68' />
          <Key className={ `key ${props.f1 && ` pressed`} `} key='70' />
          <Key className={ `key black ${props.fiss1 && ` pressed`} `} key='84' />
          <Key className={ `key ${props.g1 && ` pressed`} `} key='71' />
          <Key className={ `key black ${props.giss1 && ` pressed`} `} key='89' />
          <Key className={ `key ${props.a1 && ` pressed`} `} key='72' />
          <Key className={ `key black ${props.b1 && ` pressed`} `} key='85' />
          <Key className={ `key ${props.h1 && ` pressed`} `} key='74' />
          <Key className={ `key ${props.c2 && ` pressed`} `} key='75' />
          <Key className={ `key black ${props.ciss2 && ` pressed`} `} key='79' />
          <Key className={ `key ${props.d2 && ` pressed`} `} key='76' />
          <Key className={ `key black ${props.diss2 && ` pressed`} `} key='80' />
          <Key className={ `key ${props.e2 && ` pressed`} `} key='186' />
          <Key className={ `key ${props.f2 && ` pressed`} `} key='222' />
          <Key className={ `key black ${props.fiss2 && ` pressed`} `}  key='221' />
          <Key className={ `key ${props.g2 && ` pressed`} `} key='13' />
          <Key className={ `key black ${props.giss2 && ` pressed`} `} key='188' />
          <Key className={ `key ${props.a2 && ` pressed`} `} key='93' />
          <Key className={ `key black ${props.b2 && ` pressed`} `} key='190' />
          <Key className={ `key ${props.h2 && ` pressed`} `}  key='18' />
          <Key className={ `key ${props.c3 && ` pressed`} `} key='189' />
          <Key className={ `key black ${props.ciss3 && ` pressed`} `} key='16' />
        </div> 
      </div>
    )
  // }

}

export default Keyboard;