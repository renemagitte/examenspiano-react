import React from 'react';
// import PropTypes from 'prop-types'
import './styles/index.sass';

const DisplayNotes = (props) => {

    return (    

        <div className="display-notes">

			<div className={ (props.c1 | props.c2 | props.c3) ? 'display-notes--active' : 'display-notes--inactive' }>c</div>
			<div className={ (props.ciss1 | props.ciss2 | props.ciss3) ? 'display-notes--active' : 'display-notes--inactive' }>c#</div>
			<div className={ (props.d1 | props.d2) ? 'display-notes--active' : 'display-notes--inactive' }>d</div>
			<div className={ (props.diss1 | props.diss2) ? 'display-notes--active' : 'display-notes--inactive' }>d#</div>

			<div className={ (props.e1 | props.e2) ? 'display-notes--active' : 'display-notes--inactive' }>e</div>
			<div className={ (props.f1 | props.f2) ? 'display-notes--active' : 'display-notes--inactive' }>f</div>
			<div className={ (props.fiss1 | props.fiss2) ? 'display-notes--active' : 'display-notes--inactive' }>f#</div>
			<div className={ (props.g1 | props.g2) ? 'display-notes--active' : 'display-notes--inactive' }>g</div>
			<div className={ (props.giss1 | props.giss2) ? 'display-notes--active' : 'display-notes--inactive' }>g#</div>
			<div className={ (props.a1 | props.a2) ? 'display-notes--active' : 'display-notes--inactive' }>a</div>
			<div className={ (props.b1 | props.b2) ? 'display-notes--active' : 'display-notes--inactive' }>a#</div>
			<div className={ (props.h1 | props.h2) ? 'display-notes--active' : 'display-notes--inactive' }>b</div>

        </div> 

    )
    
  
}

// DisplayTimer.propTypes = {
//   timer: PropTypes.number.isRequired,
// }

export default DisplayNotes;


