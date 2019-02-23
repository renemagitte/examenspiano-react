import React from 'react';
import PropTypes from 'prop-types'

class NoteCanvas extends React.Component {
    
    drawNote = () => {
        var newNote;
        newNote = this.refs.notesCanvas.getContext('2d');
        newNote.fillStyle = "black";
        newNote.fillRect(this.props.timer, 0, 1, 10);
    }  

    
    render() {

    /* If note is true (playing (now recording?)) and not in listen mode (a.k.a. recording...) also draw the note
    Change name! It's so confusing now! */
    (this.props.note && !this.props.playing) && this.drawNote();

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