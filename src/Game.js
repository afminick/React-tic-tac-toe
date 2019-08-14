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
        this.winner = this.winner.bind(this);
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
      const oldWords = ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
      const resList = [...this.state.wordList];
      resList.map((w, index) => w.word = oldWords[index]);
      resList.map((w) => w.playerMark = '');
      this.setState({
        words: oldWords,
        wordList: resList
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

    winner() {
        const marks = [];
        this.state.wordList.map((i) => marks.push(i.playerMark));
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (let i = 0; i< lines.length; i++) {
                const [a,b,c] = lines[i];
                if (marks[a] && marks[a] === marks[b] && marks[a] === marks[c]) {
                    const winner = marks[a];
                    return (<div className='winner'>
                                <h1>Player {winner} wins!!!</h1>
                            </div>);
                } else if (!marks.includes('')) {
                    return (<div className='winner'>
                                <h1>Tie Game!!</h1>
                            </div>);
                };                 
            } return null
};


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
                    {this.winner() && this.winner()}
                </div>                
            </div>
        
        )
    }
}

export default Game