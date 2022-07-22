
import React, { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state={

      hora: '00:00:00'
    };
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({hora:new Date().toLocaleTimeString()})
  },1000);
  }//serve pra consumir api extra

  componentDidUpdate(){
    console.log('atualizou');//pegar atualização em algum estado e fazer alguma ação
  }
  render() {
    return (
      <div>
        <h1>
       {this.state.hora}
        </h1>
      </div>
    );
  }
}
export default App;