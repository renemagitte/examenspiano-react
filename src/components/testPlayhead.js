import React from 'react';
import '../sass/main.sass';
import '../sass/noteCanvas.sass';

// class NoteCanvas extends React.Component {

//   state = {
//     playing: false,
//     timer: 0,
//   }

//   updateCanvas(x) {
//     const c = this.refs.playheadCanvas.getContext('2d');

//     /* Clear canvas */
//     c.clearRect(0, 0, 860, 375);

//     /* Clear canvas */
//     c.beginPath();
//     c.moveTo(x, 0);
//     c.lineTo(x, 375);
//     c.lineWidth = 1;
//     c.strokeStyle = '#000000'
//     c.stroke();
//   }

//   setPlayPause = () => {
//     this.setState({ playing: !this.state.playing });

//     if(!this.state.playing){
//       this.myVar = setInterval(this.play, 100);
//     }
//     if(this.state.playing){
//       clearInterval(this.myVar);
//     }
//   }

//   stop = () => {
//     clearInterval(this.myVar);
//     this.setState({ playing: !this.state.playing, timer: 0 }, () => {
//       this.updateCanvas(this.state.timer);
//     });
//   }

//   updatePlayhead = () => {
//     this.updateCanvas(this.state.timer);
//   }
 
//   play = () => {
//     this.setState({ timer: this.state.timer + 1 });
//     this.updateCanvas(this.state.timer)
//   }

//   componentDidMount(){
//     this.updatePlayhead(this.state.timer);
//   }



//   render() {

//     let buttonText = this.state.playing ? 'Pause' : 'Play';

//       return (
//         <React.Fragment>


//           <button onClick={this.setPlayPause}>{buttonText}</button>
//           <button onClick={this.stop}>Stop</button>
//           <canvas width="860" height="250" id="noteCanvas" ref="playheadCanvas"></canvas>


//         </React.Fragment>
         
//       );

//   }

// }

// export default Playhead;



function Playhead(props) { 

  return (  

    <React.Fragment>
      <button onClick={props.setPlayPause}>Play</button>
      <button onClick={props.stop}>Stop</button>           
      {/* <canvas width="860" height="250" id="noteCanvas" ref="playheadCanvas"></canvas> */}
      <canvas width="860" height="250" id="playheadCanvas"></canvas>
    </React.Fragment>

  )
}

export default Playhead;