
/*import React, { Component } from "react";

//trabalhando com States

class App extends Component {
  constructor(props) {
    super(props);//dando autorização para usar tudo do componente
    this.state = {
      contador: 0 //declarando state contador dentro do meu construtor
    }
    this.diminuir = this.diminuir.bind(this);// aqui nos usamos o bind para que a função aumentar seja usada e acessada
    this.aumentar = this.aumentar.bind(this);// aqui nos usamos o/ bind para que a função aumentar seja usada e acessada
  }
  //Funçoes de aumentar e diminuir
  diminuir() {

    let estado = this.state; //atribuindo todas minhas states a variavel estado
    if (estado.contador == 0) {
      alert('voçe chegou a 0')
      return;
    }
    estado.contador = estado.contador - 1;
    this.setState(estado);//setando a state com seu novo valor
  }
  aumentar() {

    let estado = this.state //atribuindo todas minhas states a variavel estado
    estado.contador += 1;
    this.setState(estado);//setando a state com seu novo valor
  }

  render() {
    return (
      <div>
        <h1>contador</h1>
        <h3>
          <button onClick={this.diminuir}>-</button> // botão chama a função diminuir 
          {this.state.contador} //chamando a state contador 
          <button onClick={this.aumentar}>+</button> //botão chama a função aumentar
        </h3>
      </div>
    );
  }
}

export default App;  */