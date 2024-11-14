import React from "react"

class Compteur extends React.Component{
    constructor(props){
        super(props)
        this.state={count:10}
        this.initialiser=this.initialiser.bind(this);
        

    }
    incrementer(){
        this.setState({count:this.state.count + this.props.pas});
    }
    decrementer=()=>{
        this.setState({count:this.state.count - this.props.pas});
    }
    initialiser(){
        this.setState ({count : this.props.début});
    }
    render(){
        return(
            <div>
                <h1>Compteur:{this.state.count}</h1>
                <button onClick={()=>this.incrementer()}>Incrementer</button>
                <button onClick={this.decrementer}>Decrementer</button>
                <button onClick={this.initialiser}>Initialiser</button>
                
            </div>
        )
    }
}
export default Compteur;




