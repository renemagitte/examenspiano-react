import React from 'react';
import '../sass/main.sass';
import '../sass/noteCanvas.sass';

class NoteCanvas extends React.Component {

  state = {
    playing: false,
    playheadAt: 0
  }
  // componentDidMount() {
  //   this.updateCanvas();
  // }
  updateCanvas(x) {
    const c = this.refs.canvas.getContext('2d');

    // Rect playhead
    // c.clearRect((x - 1), 0, 1, 400);
    // c.fillRect(x, 0, 1, 400);

    // Line playhead

    c.clearRect(0, 0, 860, 375);

    c.beginPath();
    c.moveTo(x, 0);
    c.lineTo(x, 375);
    c.lineWidth = 1;
    c.strokeStyle = '#000000'
    c.stroke();
  }

  setPlayPause = () => {
    this.setState({ playing: !this.state.playing });


    // this.play();

    var myVar;

    if(!this.state.playing){
      myVar = setInterval(this.play, 300);
    }else{
      clearInterval(myVar);
    }

  }

 

  play = () => {
    this.setState({ playheadAt: this.state.playheadAt + 1 });
    this.updateCanvas(this.state.playheadAt)
  }



  render() {

      return (
        <div className="noteCanvas-container" id="container">
          {/* <button onClick={this.play}>Play / Pause</button> */}
          <button onClick={this.setPlayPause}>Play / Pause</button>
          <canvas width="860" height="375" id="noteCanvas" ref="canvas"></canvas> 
        </div>
      );

  }

}

export default NoteCanvas;