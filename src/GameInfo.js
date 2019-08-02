import React from 'react'

function GameInfo(props) {
    return (
        <div id='gameInfo'>
            <h1>Game Info:</h1>
            <button id='resetBoard' className='buttons' value='' onClick={props.reset}>Reset Board</button>
        </div>
        
    )
}

export default GameInfo