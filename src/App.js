import React from "react";
import './App.css'
import frases from './Dados/frases.json'
import cores from './Dados/cores'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fraseAtual: '',
      autor: '',
      cor: ''
    }

    this.newQuote = this.newQuote.bind(this);
  }

  componentDidMount() {
    this.newQuote();
  }

  newQuote() {
    let fraseIndex = Math.floor(Math.random() * frases.quotes.length);
    let corIndex = Math.floor(Math.random() * cores.length);

    this.setState({
      fraseAtual: frases.quotes[fraseIndex].quote,
      autor: frases.quotes[fraseIndex].author,
      cor: cores[corIndex]
    })

    
  }

  render() {
    document.getElementById("body").style.backgroundColor = this.state.cor;

    return (
      <div className="card">
        <p className="frase" style={{color: this.state.cor}}>{this.state.fraseAtual}</p>
        <p className="autor" style={{color: this.state.cor}}>{this.state.autor}</p>

        <button onClick={this.newQuote} className="button" style={{backgroundColor: this.state.cor}}>New Quote</button>
      </div>
  )}
}

export default App;
