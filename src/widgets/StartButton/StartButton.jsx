import React from 'react';

import './StartButton.css'

const StartButton = (props) => {
    return (
        <div className='start-button' onClick={props.actionProvider.startHandler}>Got it!</div>
    );
}

export default StartButton;