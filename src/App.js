import React, { useState } from 'react';
import './App.css';


function Tarefa({tarefa}) {
  return <li>{tarefa}</li>;
}

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  return (
    <div className='App'>
      <h1> Lista de Tarefas </h1>
      <input
        type='text'
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder='Digite uma tarefa'
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <Tarefa key={index} tarefa={tarefa}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
