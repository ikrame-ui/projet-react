import React, { Component } from 'react'

export default class Compteur extends Component {
    constructor (props) {
        super(props)
        this.state = { count: 0}
    }
    reset = () => {
        this.setState({count : 0})
    }

    incrementer = () => {
// Méthod 1
        // this.setState({count : this.state.count + 1})
        // Méthod 2
        this.setState(prevState => ({ count :  prevState.count + 1 }))
    }
    decrementer = () => {
        // Méthod 1
        this.setState({count : this.state.count > 0 ?  this.state.count - 1 : 0 })
        // Méthod 2
        // this.setState(prevState => ({ count : prevState.count > 0 ? prevState.count - 1  : 0 }))
    }

  render() {
    return (
      <div>
        <h1>Exercice 2</h1>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.incrementer}>Incrémenter</button>
        <button onClick={this.decrementer}>décrémenter</button>
        <button onClick={this.reset}>Rénitialiser</button>
      </div>
    )
  }
}
