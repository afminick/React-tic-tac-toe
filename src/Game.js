import React from 'react'
import WordList from './WordList'
import GameBoard from './GameBoard'

class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            words: ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine'],
            wordList: [
                {
                    id: 1,
                    word: 'One',
                    playerMark: ''
                },
                {
                    id:2,
                    word: 'Two',
                    playerMark: ''
                },
                {
                    id:3,
                    word: 'Three',
                    playerMark: ''
                },
                {
                    id:4,
                    word: 'Four',
                    playerMark: ''
                },
                {
                    id:5,
                    word: 'Five',
                    playerMark: ''
                },
                {
                    id:6,
                    word: 'Six',
                    playerMark: ''
                },
                {
                    id:7,
                    word: 'Seven',
                    playerMark: ''
                },
                {
                    id:8,
                    word: 'Eight',
                    playerMark: ''
                },
                {
                    id:9,
                    word: 'Nine',
                    playerMark: ''
                }]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.markClick = this.markClick.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
        this.listChange = this.listChange.bind(this);
    }

    listChange(event) {
        const {value, name} = event.target;
        const tempList = [...this.state.words];
        tempList[name] = value;
        this.setState({
            words: tempList
        })
    }

    handleChange(event) {
      const {value, name} = event.target
      this.setState({
        [name]: value
      })
    }

    handleSubmit(event) {
      event.preventDefault();
      const tempList = [...this.state.wordList]
      const wordList = [...this.state.words]
      tempList.map((i,index) => i.word = wordList[index])
      this.setState({ 
        wordList: tempList
      })
    }

    handleReset(event) {
      event.preventDefault();
      this.setState({
        words: ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine'],
        wordList: [
            {
                id: 1,
                word: 'One',
                playerMark: ''
            },
            {
                id:2,
                word: 'Two',
                playerMark: ''
            },
            {
                id:3,
                word: 'Three',
                playerMark: ''
            },
            {
                id:4,
                word: 'Four',
                playerMark: ''
            },
            {
                id:5,
                word: 'Five',
                playerMark: ''
            },
            {
                id:6,
                word: 'Six',
                playerMark: ''
            },
            {
                id:7,
                word: 'Seven',
                playerMark: ''
            },
            {
                id:8,
                word: 'Eight',
                playerMark: ''
            },
            {
                id:9,
                word: 'Nine',
                playerMark: ''
            }]
    })
    }

    markClick(event) {
        event.preventDefault();
        const index = event.target.name
        const tempList = [...this.state.wordList]
        tempList[index].playerMark = event.target.value
        this.setState({
            wordList: tempList
        })
    }

    resetBoard(event) {
        event.preventDefault();
        const tempList = [...this.state.wordList];
        tempList.map(item => item.playerMark = '');
        this.setState({
            wordList: tempList
        })
        
    }

    render() {
        const justWords = [];
        this.state.wordList.map(list => justWords.push(list.word))
        return (
            <div className='game'>
                <WordList 
                    listChange={this.listChange}
                    handleReset={this.handleReset}
                    handleSubmit={this.handleSubmit}
                    words={justWords}
                    data={this.state}
                    reset={this.resetBoard}
                />
                <div className='gameArea'>
                    <h1>Let's Play Tic-Tac-Toe!</h1>
                    <GameBoard 
                        data={this.state} 
                        words={justWords}
                        handleChange={this.handleChange}
                        click={this.markClick} 
                    />
                </div>                
            </div>
        
        )
    }
}

export default Game