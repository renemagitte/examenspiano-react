import React from 'react';
import PropTypes from 'prop-types';

import NoteAudio from './../NoteAudio';

import c1Audio from './../../assets/sound/c1.mp3';
import ciss1Audio from './../../assets/sound/ciss1.mp3';
import d1Audio from './../../assets/sound/d1.mp3';
import diss1Audio from './../../assets/sound/diss1.mp3';
import e1Audio from './../../assets/sound/e1.mp3';
import f1Audio from './../../assets/sound/f1.mp3';
import fiss1Audio from './../../assets/sound/fiss1.mp3';
import g1Audio from './../../assets/sound/g1.mp3';
import giss1Audio from './../../assets/sound/giss1.mp3';
import a1Audio from './../../assets/sound/a1.mp3';
import b1Audio from './../../assets/sound/b1.mp3';
import h1Audio from './../../assets/sound/h1.mp3';
import c2Audio from './../../assets/sound/c2.mp3';
import ciss2Audio from './../../assets/sound/ciss2.mp3';
import d2Audio from './../../assets/sound/d2.mp3';
import diss2Audio from './../../assets/sound/diss2.mp3';
import e2Audio from './../../assets/sound/e2.mp3';
import f2Audio from './../../assets/sound/f2.mp3';
import fiss2Audio from './../../assets/sound/fiss2.mp3';
import g2Audio from './../../assets/sound/g2.mp3';
import giss2Audio from './../../assets/sound/giss2.mp3';
import a2Audio from './../../assets/sound/a2.mp3';
import b2Audio from './../../assets/sound/b2.mp3';
import h2Audio from './../../assets/sound/h2.mp3';
import c3Audio from './../../assets/sound/c3.mp3';
import ciss3Audio from './../../assets/sound/ciss3.mp3';

class NoteAudioGroup extends React.Component {


  render() {

    return (

        <React.Fragment>

            <NoteAudio note={this.props.c1} sound={c1Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.ciss1} sound={ciss1Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.d1} sound={d1Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.diss1} sound={diss1Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.e1} sound={e1Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.f1} sound={f1Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.fiss1} sound={fiss1Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.g1} sound={g1Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.giss1} sound={giss1Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.a1} sound={a1Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.b1} sound={b1Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.h1} sound={h1Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.c2} sound={c2Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.ciss2} sound={ciss2Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.d2} sound={d2Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.diss2} sound={diss2Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.e2} sound={e2Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.f2} sound={f2Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.fiss2} sound={fiss2Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.g2} sound={g2Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.giss2} sound={giss2Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.a2} sound={a2Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.b2} sound={b2Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.h2} sound={h2Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.c3} sound={c3Audio} playing={this.props.playing} volume={this.props.volume} />
            <NoteAudio note={this.props.ciss3} sound={ciss3Audio} playing={this.props.playing} volume={this.props.volume} />

        </React.Fragment>

    );
  }
}

NoteAudioGroup.propTypes = {
    playing: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired
  }

export default NoteAudioGroup;