import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Alex'
        }
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h1>Hello {this.state.name}</h1>
            </div>
        )
    }
}

export default App