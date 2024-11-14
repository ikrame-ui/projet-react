import React,{Component} from"react";
class Nameauto extends Component {
    constructor(props)
    {
        super(props);
        this.state = {nom:'' ,prenom:''}
    }
hamdlNom(event){
    this.setState({nom:event.target,value})
}   
handlPrenom(event){
    this.setState({prenom:event.target,value})
} 
return(){
    return (
        <div>
            nom : <input type="text" onChange={(event)=>{this.handlNom(event)}} />
            nom : <input type="text" onChange={(event)=>{this.handlPrenom(event)}} />
        </div>
    )
}
}
