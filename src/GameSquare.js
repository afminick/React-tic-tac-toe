import React from 'react'

function GameSquare(props) {
    const letterSize = props.word.length > 8 ? {fontSize: '0.7em'} : {fontSize: '1em'};
    return (
        <div className='gameSquare'>
            <h3 style={letterSize} className='squareWord'>{props.word}</h3>
            <h2 className='squareMark'>{props.mark}</h2>
            <div className='buttons'>
                <button name={props.number} value='X' onClick={props.click}>X</button>
                <button name={props.number} value='' onClick={props.click}>R</button>
                <button name={props.number} value='O' onClick={props.click}>O</button>
            </div>                
        </div>
    )
    
   
}

export default GameSquare