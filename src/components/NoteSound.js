import React from 'react';
import './../App.css';

import sound from './../wav.wav';



class NoteSound extends React.Component {

  state = {
    // refElem: '',
    playing: false
  }



  play = () => {
    let audio = this.refs.audio;
    // var audio = this.refs.this.state.ref
    // console.log(audio);
    audio.play();

    // this.setState({ playing: true })

    // var refElem2 = this.state.refElem;
    // console.log(refElem2);



  }


  // stop = () => {
  //   let audio2 = this.refs.audio;

  //   if(this.state.playing){
  //     audio2.pause();
  //   }
    

  // //   console.log(audio2);
  // //   // audio2.pause();
  // //   // audio2.currentTime = 0;
  // //   // audio2.stop();

  //   console.log('stop it!!');
  // }

  // componentDidMount(){
  //   this.setState({ refElem: this.props.refElem })
  // }

  render() {

    console.log(this.props.note);

    if(this.props.note){
      console.log("play!!")
      this.play();
    }

    // if(!this.props.note){
    //   this.stop();
    //   console.log("stopp!!!")
    // }

    let refElem = this.props.refElem;

    return (
      <audio ref="audio" src={sound} ></audio>
      // <audio ref={refElem} src={sound} ></audio>
    );
  }
}

export default NoteSound;