import React from 'react';
import PropTypes from 'prop-types'

class Playhead extends React.Component {

    drawPlayhead = (x) => {
        const c = this.refs.playheadCanvas.getContext('2d');
    
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
    
    componentWillReceiveProps(){
        this.drawPlayhead(this.props.timer);
    }


    render() {

        return (

            <canvas 
                width="860" 
                height="132" 
                style={{zIndex: 11}} 
                className="playheadCanvas" 
                ref="playheadCanvas">
            </canvas>

        )
    }

}

Playhead.propTypes = {
    timer: PropTypes.number.isRequired
  }

export default Playhead;