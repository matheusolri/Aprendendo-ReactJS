
function App() {
  //praticando aprendizado de Props
  const Equipe = (props) => {
    return (
      <div>
         <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
         <Social instagram={props.instagram}/>
         <hr/>
      </div>
    );
  }
  const Sobre = (props) => {
    return (
      <div>
        <h1>Olá sou o(a):{props.nome}</h1>
        <h2>meu cargo é : {props.cargo}</h2>
        <h2>minha idade é : {props.idade}</h2>
        
      </div>
    );
  }
  const Social = (props)=>{
    return(
      <a href={props.instagram}>Instagram</a>
    );
  }

  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Matheus" cargo="Desenvolvedor Front" idade="20" instagram="https://www.instagram.com/matheus_olri/"  />
      <Equipe nome="Anderson" cargo="Desenvolvedor Back" idade="22" instagram="https://www.instagram.com/anderson.campos_/" />
    </div>
  );
}
export default App;
