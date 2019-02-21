import React, { Component } from 'react';


import NoteCanvas from './../NoteCanvas/index.js';

class NoteCanvasGroup extends React.Component {

  render(){


    return (

      <React.Fragment>

            <NoteCanvas note={this.props.c1} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote c1" />
            <NoteCanvas note={this.props.ciss1} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote ciss1" />
            <NoteCanvas note={this.props.d1} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote d1" />
            <NoteCanvas note={this.props.diss1} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote diss1" />
            <NoteCanvas note={this.props.e1} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote e1" />
            <NoteCanvas note={this.props.f1} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote f1" />
            <NoteCanvas note={this.props.fiss1} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote fiss1" />
            <NoteCanvas note={this.props.g1} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote g1" />
            <NoteCanvas note={this.props.giss1} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote giss1" />
            <NoteCanvas note={this.props.a1} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote a1" />
            <NoteCanvas note={this.props.b1} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote b1" />
            <NoteCanvas note={this.props.h1} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote h1" />
            <NoteCanvas note={this.props.c2} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote c2" />
            <NoteCanvas note={this.props.ciss2} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote ciss2" />
            <NoteCanvas note={this.props.d2} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote d2" />
            <NoteCanvas note={this.props.diss2} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote diss2" />
            <NoteCanvas note={this.props.e2} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote e2" />
            <NoteCanvas note={this.props.f2} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote f2" />
            <NoteCanvas note={this.props.fiss2} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote fiss2" />
            <NoteCanvas note={this.props.g2} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote g2" />
            <NoteCanvas note={this.props.giss2} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote giss2" />
            <NoteCanvas note={this.props.a2} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote a2" />
            <NoteCanvas note={this.props.b2} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote b2" />
            <NoteCanvas note={this.props.h2} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote h2" />
            <NoteCanvas note={this.props.c3} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote c3" />
            <NoteCanvas note={this.props.ciss3} listenToRecorded={this.props.listenToRecorded} playheadAt={this.props.playheadAt} className="canvasNote ciss3" />

      </React.Fragment>
    );
  }
}

export default NoteCanvasGroup;