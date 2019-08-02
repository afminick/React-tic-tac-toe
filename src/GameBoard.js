import React from 'react'
import './Style.css'
import GameSquare from './GameSquare';

function GameBoard(props) {
       const squares = props.words.map((item,index) => 
            <GameSquare 
                data={props.data} 
                key={index}
                number={index} 
                word={item}
                mark={props.data.wordList[index].playerMark}
                click={props.click}

            />)
        return (
            <div className='gameBoard'>
                    {squares}        
            </div>
        )
    }


export default GameBoard