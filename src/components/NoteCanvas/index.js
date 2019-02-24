import React from 'react';
import PropTypes from 'prop-types'
import './styles/index.sass';

class NoteCanvas extends React.Component {
    
    drawNote = () => {
        var newNote;
        newNote = this.refs.notesCanvas.getContext('2d');
        newNote.fillStyle = "#121212";
        newNote.fillRect(this.props.timer, 0, 1, 10);
    }  

    
    render() {

        (this.props.note && this.props.recording) && this.drawNote();

        return (

            <canvas 
                width="780" 
                height="5" 
                style={{zIndex: 10}} 
                className={this.props.className} 
                id="notesCanvas" 
                ref="notesCanvas">
            </canvas>  
        
        );
    }
}

NoteCanvas.propTypes = {
    note: PropTypes.bool.isRequired,
    playing: PropTypes.bool.isRequired,
    timer: PropTypes.number.isRequired
  }

export default NoteCanvas;