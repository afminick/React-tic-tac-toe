import React from 'react'

function WordList(props) {
    const words = props.words.map((item, index) => 
        <div key={index} className='inputField'>
          <p>{index+1}: </p>
          <input
          name={index} 
          type='text'  
          maxLength='12'
          value={props.data.words[index]}
          onChange={props.listChange}
          />
        </div>)
        return (
            <div className='wordList'>
              <h4>Current word list:</h4>
              <form onSubmit={props.handleSubmit}>                      
                <ol>
                  {words}
                </ol>
                <div>
                  <button 
                    className='menuButton'
                    type='submit'>Submit Words
                  </button>
                  <button 
                    className='menuButton'
                    onClick={props.handleReset}>Reset List
                  </button>
                  <button 
                    className='menuButton'
                    onClick={props.reset}>Reset Board
                  </button>
                </div>
                  
                </form>
                
            </div>
        )
}

export default WordList