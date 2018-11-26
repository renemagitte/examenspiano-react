import React from 'react';

class NoteCanvas extends React.Component {

  state = {
    play: false,
    timestamp: 0
  }
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas(x) {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillRect(x, 0, 1, 400);
  }

  play = () => {
    console.log("hej")

    setInterval(
      () => this.setState({ timestamp: this.state.timestamp + 1 },
        this.updateCanvas(this.state.timestamp)
        
    ),300
    );
  }


  render() {

      return (
        <div className="noteCanvas-container" id="container">
          <button onClick={this.play}>Play / Pause</button>
          <canvas id="noteCanvas" ref="canvas"></canvas> 
        </div>
      );

  }

}

export default NoteCanvas;