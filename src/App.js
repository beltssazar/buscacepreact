import {useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import "./style.css";

import api from './services/api'; 
function App() {

  const [input, setInput] = useState('')

  async function handleBotao(){
    //06704215/json/

    if(input === ""){
      alert("Preencha o campo com algum CEP!")
      return;
    }

    try {
      const response = await api.get('${input}/json')
      console.log(response.data)

    } catch{
      alert("Erro ao buscar o CEP!");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text"
        placeholder="Informe o seu cep"
        value={input}
        onChange={(event) => setInput(event.target.value)}>
        </input>
        <button className="botaoBusca" onClick={handleBotao}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
        <main className='main'>
          <h2>CEP: 06704215</h2>

          <span>Rua: Algum Teste</span>
          <span>Complemento: Algum Complemanto</span>
          <span>Bairro: Parque Miguel Mirizola</span>
          <span>Cotia - SP</span>
        </main>
    </div>

   
  );
}

export default App;
