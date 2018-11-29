import React from 'react';
import '../sass/main.sass';
import '../sass/noteCanvas.sass';

class NoteCanvas extends React.Component {

  state = {
    playing: false,
    playheadAt: 0,
  }

  keyY = [
    { code: 65, y: 250},  // 0, 65, A, c
    { code: 87, y: 240},  // 1, 87, W, c#
    {code: 83, y: 230},  // 2, 83, S, d
    {code: 69, y: 220},  // 3, 69, S, d#
    {code: 68, y: 210},  // 4, 68, D, e
    {code: 70, y: 200},  // 5, 70, F, f
    {code: 84, y: 190},  // 6, 84, T, f#
    {code: 71, y: 180},  // 7, 71, T, g
    {code: 89, y: 170},  // 8, 89, Y, g#
    {code: 72, y: 160},  // 9, 72, H, a
    {code: 85, y: 150},  // 10, 85, U, b / a#
    {code: 74, y: 140},  // 11, 74, J, h
    {code: 75, y: 130},  // 12, 75, K, c (2)
    {code: 79, y: 120},  // 13, 79, O, c# (2)
    {code: 76, y: 110},  // 14, 78, L, d (2)
    {code: 80, y: 100},  // 15, 80, P, d# (2)
    {code: 186, y: 90}, // 16, 186, Ö, e (2)
    {code: 222, y: 80}, // 17, 222, Ä, f (2)
    {code: 221, y: 70}, // 18, 221, ^, f# (2)
    {code: 13, y: 60},  // 19, 13, enter, g (2)
    {code: 188, y: 50}, // 20, 188, ,, g# (2)
    {code: 93, y: 40},  // 21, 93, cmd right, a (2)
    {code: 190, y: 30}, // 22, 190, ., b / a# (2)
    {code: 18, y: 20},  // 23,18, alt right :--( , h (2)
    {code: 189, y: 10}, // 24, 189, -, c (3)
    {code: 16, y: 0}  // 25, 16, shift right, c# (3)
  ]

  updateCanvas(x) {
    const c = this.refs.canvas.getContext('2d');

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

  setPlayPause = () => {
    this.setState({ playing: !this.state.playing });

    if(!this.state.playing){
      this.myVar = setInterval(this.play, 100);
    }


    if(this.state.playing){
      clearInterval(this.myVar);
    }


  }

  stop = () => {
    clearInterval(this.myVar);
    this.setState({ playing: !this.state.playing, playheadAt: 0 }, () => {
      this.updateCanvas(this.state.playheadAt);
    });
  }

  updatePlayhead = () => {
    this.updateCanvas(this.state.playheadAt);
  }
 

  play = () => {
    // this.props.propsPlay();
    this.setState({ playheadAt: this.state.playheadAt + 1 });
    this.updateCanvas(this.state.playheadAt)
  }

  componentDidMount(){
    this.updatePlayhead(this.state.playheadAt);
  }



  render() {


    let buttonText = this.state.playing ? 'Pause' : 'Play';

      return (
        <div className="noteCanvas-container" id="container">
          {/* <button onClick={this.play}>Play / Pause</button> */}
          <button onClick={this.setPlayPause}>{buttonText}</button>
          <button onClick={this.stop}>Stop</button>
          <canvas width="860" height="375" id="noteCanvas" ref="canvas"></canvas> 
        </div>
      );

  }

}

export default NoteCanvas;