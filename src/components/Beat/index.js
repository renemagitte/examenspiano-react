import React from 'react'
import PropTypes from 'prop-types'
import {Howl} from 'howler'
import './styles/index.sass'

import Button from './../Button';

import beat1 from './../../assets/sound/beat1.m4a';
import beat2 from './../../assets/sound/beat2.m4a';
import beat3 from './../../assets/sound/beat3.m4a';

class Beat extends React.Component {

  state = {
    beat: '',
    // volume: 0.4
  }

  setBeat = (e) => {

    let chosenBeat;

    if(e.target.value === 'beat1'){
      chosenBeat = beat1;
    }else if(e.target.value === 'beat2'){
      chosenBeat = beat2;
    }else if(e.target.value === 'beat3'){
      chosenBeat = beat3;
    }

    if(!(this.state.beat === chosenBeat)){
      this.setState({ beat: chosenBeat }, () => {
        this.startLoop(chosenBeat);
      });
    }else{
      this.setState({ beat: '' });

      this.sound.stop();
    }

  }

  startLoop = (beat) => {
    /* Better looping with Howl than regular HTML5 audio loop */
    this.sound = new Howl({
      src: [beat],
      autoplay: true,
      loop: true,
      // volume: this.state.volume,
      volume: 0.4,
    });
  }


  componentWillReceiveProps(){
    if(this.props.allowBeat === false){
      this.setState({ beat: '' });
      if(!this.sound === undefined){
       this.sound.stop();
      }
    }
    if(this.props.volume !== this.state.volume){
      this.sound.volume(this.props.volume);
    }
  }

  render() {
    
    return (

      <React.Fragment>

        <div className="beat__button-container">
          <Button
            className={!(this.state.beat === beat1) ? 'button-round button-round-regular' : 'button-round button-round-regular button-round-regular--pressed' }
            onClick={this.setBeat}
            value="beat1"
          />
          <div className="beat__button-label">Beat 1</div>
        </div>  

        <div className="beat__button-container">
          <Button
            className={!(this.state.beat === beat2) ? 'button-round button-round-regular' : 'button-round button-round-regular button-round-regular--pressed' }
            onClick={this.setBeat}
            value="beat2"
          />
          <div className="beat__button-label">Beat 2</div>
        </div>  

        <div className="beat__button-container">
          <Button
            className={!(this.state.beat === beat3) ? 'button-round button-round-regular' : 'button-round button-round-regular button-round-regular--pressed' }
            onClick={this.setBeat}
            value="beat3"
          />
          <div className="beat__button-label">Beat 3</div>
        </div> 

      </React.Fragment>
    );
  }
}

Beat.propTypes = {
  allowBeat: PropTypes.bool.isRequired
}

export default Beat;