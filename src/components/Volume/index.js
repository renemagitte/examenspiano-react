import React from 'react';
import Knob from 'react-canvas-knob'
import PropTypes from 'prop-types'
import './styles/index.sass';

class Volume extends React.Component {

    state = {
        value: 0.4
    }
    
    handleChange = (newValue) => {
        this.props.setVolume(newValue);
        this.setState({value: newValue});
    };

    render() {

        return (

            <Knob
                value={this.state.value}
                onChange={this.handleChange}
                min={0}
                max={10}
                step={1}
                width={70}
                height={70}
                inputColor={'transparent'}
                bgColor={'#696969'}
                fgColor={'#1F1E1E'}
            />

        )
    }

}

Volume.propTypes = {
    volume: PropTypes.number.isRequired,
    setVolume: PropTypes.func.isRequired
}

export default Volume;