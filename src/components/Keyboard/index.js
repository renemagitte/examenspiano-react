import React from 'react';
import './styles/index.sass';

import Key from './../Key';


const Keyboard = (props) => {

  return(

    <div id="piano">
      <div className="keys">
        <Key className={ `key ${props.c1 && ` pressed`} `} keyCode='65' />
        <Key className={ `key black ${props.ciss1 && ` pressed`} `} keyCode='87' />
        <Key className={ `key ${props.d1 && ` pressed`} `} keyCode='83' />
        <Key className={ `key black ${props.diss1 && ` pressed`} `} keyCode='69' />
        <Key className={ `key ${props.e1 && ` pressed`} `} keyCode='68' />
        <Key className={ `key ${props.f1 && ` pressed`} `} keyCode='70' />
        <Key className={ `key black ${props.fiss1 && ` pressed`} `} keyCode='84' />
        <Key className={ `key ${props.g1 && ` pressed`} `} keyCode='71' />
        <Key className={ `key black ${props.giss1 && ` pressed`} `} keyCode='89' />
        <Key className={ `key ${props.a1 && ` pressed`} `} keyCode='72' />
        <Key className={ `key black ${props.b1 && ` pressed`} `} keyCode='85' />
        <Key className={ `key ${props.h1 && ` pressed`} `} keyCode='74' />
        <Key className={ `key ${props.c2 && ` pressed`} `} keyCode='75' />
        <Key className={ `key black ${props.ciss2 && ` pressed`} `} keyCode='79' />
        <Key className={ `key ${props.d2 && ` pressed`} `} keyCode='76' />
        <Key className={ `key black ${props.diss2 && ` pressed`} `} keyCode='80' />
        <Key className={ `key ${props.e2 && ` pressed`} `} keyCode='186' />
        <Key className={ `key ${props.f2 && ` pressed`} `} keyCode='222' />
        <Key className={ `key black ${props.fiss2 && ` pressed`} `}  keyCode='221' />
        <Key className={ `key ${props.g2 && ` pressed`} `} keyCode='13' />
        <Key className={ `key black ${props.giss2 && ` pressed`} `} keyCode='188' />
        <Key className={ `key ${props.a2 && ` pressed`} `} keyCode='93' />
        <Key className={ `key black ${props.b2 && ` pressed`} `} keyCode='190' />
        <Key className={ `key ${props.h2 && ` pressed`} `}  keyCode='18' />
        <Key className={ `key ${props.c3 && ` pressed`} `} keyCode='189' />
        <Key className={ `key black ${props.ciss3 && ` pressed`} `} keyCode='16' />
      </div> 
    </div>
    
  )

}

export default Keyboard;