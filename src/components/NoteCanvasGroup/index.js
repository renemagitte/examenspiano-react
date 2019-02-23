import React from 'react';


import NoteCanvas from './../NoteCanvas/index.js';

class NoteCanvasGroup extends React.Component {

  render(){

    return (

      <React.Fragment>

            <NoteCanvas note={this.props.c1} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote c1" />
            <NoteCanvas note={this.props.ciss1} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote ciss1" />
            <NoteCanvas note={this.props.d1} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote d1" />
            <NoteCanvas note={this.props.diss1} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote diss1" />
            <NoteCanvas note={this.props.e1} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote e1" />
            <NoteCanvas note={this.props.f1} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote f1" />
            <NoteCanvas note={this.props.fiss1} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote fiss1" />
            <NoteCanvas note={this.props.g1} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote g1" />
            <NoteCanvas note={this.props.giss1} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote giss1" />
            <NoteCanvas note={this.props.a1} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote a1" />
            <NoteCanvas note={this.props.b1} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote b1" />
            <NoteCanvas note={this.props.h1} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote h1" />
            <NoteCanvas note={this.props.c2} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote c2" />
            <NoteCanvas note={this.props.ciss2} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote ciss2" />
            <NoteCanvas note={this.props.d2} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote d2" />
            <NoteCanvas note={this.props.diss2} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote diss2" />
            <NoteCanvas note={this.props.e2} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote e2" />
            <NoteCanvas note={this.props.f2} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote f2" />
            <NoteCanvas note={this.props.fiss2} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote fiss2" />
            <NoteCanvas note={this.props.g2} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote g2" />
            <NoteCanvas note={this.props.giss2} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote giss2" />
            <NoteCanvas note={this.props.a2} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote a2" />
            <NoteCanvas note={this.props.b2} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote b2" />
            <NoteCanvas note={this.props.h2} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote h2" />
            <NoteCanvas note={this.props.c3} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote c3" />
            <NoteCanvas note={this.props.ciss3} playing={this.props.playing} recording={this.props.recording} timer={this.props.timer} className="canvasNote ciss3" />

      </React.Fragment>
    );
  }
}

export default NoteCanvasGroup;