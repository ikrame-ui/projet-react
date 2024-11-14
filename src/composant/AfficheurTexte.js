import React, { Component } from 'react'

export default class AfficheurTexte extends Component {
    constructor (props) {
        super(props)
        this.state = { isVisible : false }
    }

    basculer = () => {
        // Méthod 1
        this.setState(prevState => ({
            isVisible : !prevState.isVisible
        }))

        // Méthod 2
        // this.setState({isVisible : !this.state.isVisible})
        
        // Méthod 3
        // if (this.state.isVisible === false) {
        //     this.setState({isVisible : true})
        // } else {
        //     this.setState({isVisible : false})
        // }
    }

  render() {
    const message =  this.state.isVisible ? 'Bonjour React !'  : '';
    const title = this.state.isVisible ? 'Masquer' : 'Afficher';
  return (
    <div>
      <h1>Exercice 1 :</h1>
      {
         message
      }
      <button onClick={this.basculer}>{ title }</button>
    </div>
  )
}
}
