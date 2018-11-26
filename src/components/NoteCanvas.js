import React from 'react';

class NoteCanvas extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 100, 100);
    }
    render() {
        return (
            <canvas id="noteCanvas" ref="canvas"></canvas> 
        );
    }
}

export default NoteCanvas;