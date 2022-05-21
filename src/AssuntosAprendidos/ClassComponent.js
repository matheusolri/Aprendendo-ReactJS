/* import React,{Component} from "react";
  //Aplicando Class Component
  class Equipe extends Component{
    render(){
      return(
        <div>
          <Sobre nome={this.props.nome} cargo={this.props.cargo} Idade={this.props.idade}/>
          <Social/>
          <hr/>
        </div>
      );
    }
  }
    
class Sobre extends Component{
render(){
  return(
    <div>
      <h2>Olá sou o {this.props.nome}</h2>
      <h2>meu cargo :{this.props.cargo}</h2>
      <h2>tenho :{this.props.idade}</h2>
    </div>
  );
}
}
const Social = ()=>{
  return(
    <div>
    <a>Linkedin</a>
    <a>Facebook</a>
    </div>

  );
}    

function App(){
  return(
    <div>
      <h1>Minha Equipe :</h1>
      <Equipe nome="Matheus" cargo="Programador" idade="20"/>
      <Equipe nome="Lucas" cargo="Design" idade="27"/>
    </div>
  );
}


export default App; */