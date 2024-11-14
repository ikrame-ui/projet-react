import React, { Component } from 'react'

export default class Calculatrice extends Component {
    constructor (props) {
        super(props)
        this.state = {
            a:0,
            b:0,
            opt: "",
            resultat:null
        }
    }

    handleA = (e) => {
        this.setState({a:e.target.value})
    }
    handleB = (e) => {
        this.setState({b:e.target.value})
    }
    handleOpt = (e) => {
        this.setState({opt:e.target.value})
    }
    calculer = () => {
        let {a,b,opt,resultat} = this.state
        switch (opt) {
            case "+":
                resultat = Number(a) + Number(b)
                break;
        
            case "-":
                resultat = Number(a) - Number(b)
                break;
        
            case "*":
                resultat = Number(a) * Number(b)
                break;
        
            case "/":
                resultat = Number(a) / Number(b)
                break;
        
            default:
                resultat = "Operation invalide."
                break;

        }
        this.setState({resultat:resultat})
    }

  render() {
    return (
      <div>
        <div>
            <label htmlFor="a">Saisir A:</label>
            <input type="number" id='a' onChange={(e) => this.handleA(e)} />
        </div>
        <div>
            <label htmlFor="b">Saisir B:</label>
            <input type="number" id='b' onChange={(e) => this.handleB(e)} />
        </div>
        <div>
            <label htmlFor="opt">Operation:</label>
            <select  id="opt" onChange={(e) => this.handleOpt(e)}>
                <option value="+">+</option>
                <option value="*">*</option>
                <option value="-">-</option>
                <option value="/">/</option>
            </select>
        </div>
        <div>
            <button onClick={this.calculer}>Calculer</button>
            <h1>Result: {this.state.resultat}</h1>
        </div>
      </div>
    )
  }
}
