import {Component} from "react";
import IpodDesign from "./components/IpodDesign";

class App extends Component{

  clickEvent = () =>{
    
  }
  render(){
    return(
      <div>
        <IpodDesign rightClick={this.clickEvent}/>
      </div>
    )
  }
}

export default App;