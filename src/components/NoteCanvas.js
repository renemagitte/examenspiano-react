import React from 'react';

class NoteCanvas extends React.Component {

  state = {
    play: false,
    playheadAt: 0
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
      () => this.setState({ playheadAt: this.state.playheadAt + 1 },
        this.updateCanvas(this.state.playheadAt)
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