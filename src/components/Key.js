import React from 'react';
import './../App.css';
import '../sass/piano.sass';

function Key(props) { 

  return (     
      <div className={props.className} data-key={props.key}>
      </div> 
  );
  
}


// class Key extends React.Component {

//   render() {
//     let keyClass = this.props.keyClass;
//     if(this.props.playing){
//       keyClass += ' pressed';
//     }

//     return (
//       <div className={keyClass}>
//       </div> 
//     );
//   }
// }

export default Key;