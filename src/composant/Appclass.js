import React from "react";
import Compteur from "./compteur";

class App1 extends React.Component{
    render() {
        return(
            <div>
                <Compteur début={0} pas={2}/>
            </div>
        )
    }
}
export default App1