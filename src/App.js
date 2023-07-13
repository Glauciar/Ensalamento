import React, { useState } from 'react';
import './App.css';
import Cursos from './components/Cursos.js'

function App() {
  const [salas, setSalas] = useState([]);
  const [novaSala, setNovaSala] = useState('');
  
  const [cursos, setCursos] = useState([]);
  const [novoCurso, setNovoCurso] = useState('');

  const [desafios, setDesafios] = useState([]);
  const [novoDesafio, setNovoDesafio] = useState('');

  const [horarios, setHorarios] = useState([]);
  const [novoHorario, setNovoHorario] = useState('');

  const [periodos, setPeriodos] = useState([]);
  const [novoPeriodo, setNovoPeriodo] = useState('');

  const [professores, setProfessores] = useState([]);
  const [novoProfessor, setNovoProfessor] = useState('');

  const [dadosTabela, setDadosTabela] = useState([]);

  const adicionarSala = () => {
    if (novaSala.trim() !== '') {
      setSalas([...salas, novaSala]);
      setNovaSala('');
      setDadosTabela([...dadosTabela, { categoria: 'Salas', valor: novaSala }]);
    }
  };
    
  const adicionarCurso = () => {
    if (novoCurso.trim() !== '') {
      setCursos([...cursos, novoCurso]);
      setNovoCurso('');
      setDadosTabela([...dadosTabela, { categoria: 'Cursos', valor: novoCurso }]);
    }
  };

  const adicionarDesafio = () => {
    if (novoDesafio.trim() !== '') {
      setDesafios([...desafios, novoDesafio]);
      setNovoDesafio('');
      setDadosTabela([...dadosTabela, { categoria: 'Desafios', valor: novoDesafio }]);
    }
  };

  const adicionarHorario = () => {
    if (novoHorario.trim() !== '') {
      setHorarios([...horarios, novoHorario]);
      setNovoHorario('');
      setDadosTabela([...dadosTabela, { categoria: 'Horarios', valor: novoHorario }]);
    }
  };

  const adicionarPeriodo = () => {
    if (novoPeriodo.trim() !== '') {
      setPeriodos([...periodos, novoPeriodo]);
      setNovoPeriodo('');
      setDadosTabela([...dadosTabela, { categoria: 'Períodos', valor: novoPeriodo }]);
    }
  };

  const adicionarProfessor = () => {
    if (novoProfessor.trim() !== '') {
      setProfessores([...professores, novoProfessor]);
      setNovoProfessor('');
      setDadosTabela([...dadosTabela, { categoria: 'Professores', valor: novoProfessor }]);
    }
  };

  
  const excluirSala = (indice) => {
    const novasSalas = [...salas];
    novasSalas.splice(indice, 1);
    setSalas(novasSalas);
    removerDadosTabela('Salas', salas[indice]);
  };

  const excluirCurso = (indice) => {
    const novosCursos = [...cursos];
    novosCursos.splice(indice, 1);
    setCursos(novosCursos);
    removerDadosTabela('Cursos', cursos[indice]);
  };

  const excluirDesafio = (indice) => {
    const novosDesafios = [...desafios];
    novosDesafios.splice(indice, 1);
    setDesafios(novosDesafios);
    removerDadosTabela('Desafios', desafios[indice]);
  };

  const excluirHorario = (indice) => {
    const novosHorarios = [...horarios];
    novosHorarios.splice(indice, 1);
    setHorarios(novosHorarios);
    removerDadosTabela('Horarios', horarios[indice]);
  };

  const excluirPeriodo = (indice) => {
    const novosPeriodos = [...periodos];
    novosPeriodos.splice(indice, 1);
    setPeriodos(novosPeriodos);
    removerDadosTabela('Períodos', periodos[indice]);
  };

  const excluirProfessor = (indice) => {
    const novosProfessores = [...professores];
    novosProfessores.splice(indice, 1);
    setProfessores(novosProfessores);
    removerDadosTabela('Professores', professores[indice]);
  };

  const removerDadosTabela = (categoria, valor) => {
    const novosDadosTabela = dadosTabela.filter(
      (dados) => !(dados.categoria === categoria && dados.valor === valor)
    );
    setDadosTabela(novosDadosTabela);
  };

  return (
    <div className="App">
      <nav className="vertical-navbar">
        <ul>
          <li>
            Cursos
            <ul>
              {cursos.map((curso, index) => (
                <li key={index}>
                  {curso}
                  <button onClick={() => excluirCurso(index)}>Excluir</button>
                </li>
              ))}
            </ul>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                adicionarCurso();
              }}
            >
              <input
                type="text"
                value={novoCurso}
                onChange={(e) => setNovoCurso(e.target.value)}
                placeholder="Nome do curso"
              />
              <button type="submit">Adicionar Curso</button>
            </form>
          </li>
          <li>
            Desafios
            <ul>
              {desafios.map((desafio, index) => (
                <li key={index}>
                  {desafio}
                  <button onClick={() => excluirDesafio(index)}>Excluir</button>
                </li>
              ))}
            </ul>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                adicionarDesafio();
              }}
            >
              <input
                type="text"
                value={novoDesafio}
                onChange={(e) => setNovoDesafio(e.target.value)}
                placeholder="Nome do desafio"
              />
              <button type="submit">Adicionar Desafio</button>
            </form>
          </li>
          <li>
  Horários
  <ul>
    {horarios.map((horario, index) => (
      <li key={index}>
        {horario}
        <button onClick={() => excluirHorario(index)}>Excluir</button>
      </li>
    ))}
  </ul>
  <form onSubmit={(e) => {
    e.preventDefault();
    adicionarHorario();
  }}>
    <input
      type="text"
      value={novoHorario}
      onChange={(e) => setNovoHorario(e.target.value)}
      placeholder="Nome do horário"
    />
    <button type="submit">Adicionar Horário</button>
  </form>
</li>
<li>
  Períodos
  <ul>
    {periodos.map((periodo, index) => (
      <li key={index}>
        {periodo}
        <button onClick={() => excluirPeriodo(index)}>Excluir</button>
      </li>
    ))}
  </ul>
  <form onSubmit={(e) => {
    e.preventDefault();
    adicionarPeriodo();
  }}>
    <input
      type="text"
      value={novoPeriodo}
      onChange={(e) => setNovoPeriodo(e.target.value)}
      placeholder="Nome do período"
    />
    <button type="submit">Adicionar Período</button>
  </form>
</li>

          <li>
            Professores
            <ul>
              {professores.map((professor, index) => (
                <li key={index}>
                  {professor}
                  <button onClick={() => excluirProfessor(index)}>Excluir</button>
                </li>
              ))}
            </ul>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                adicionarProfessor();
              }}
            >
              <input
                type="text"
                value={novoProfessor}
                onChange={(e) => setNovoProfessor(e.target.value)}
                placeholder="Nome do professor"
              />
              <button type="submit">Adicionar Professor</button>
            </form>
          </li>
          <li>
            Salas
            <ul>
              {salas.map((sala, index) => (
                <li key={index}>
                  {sala}
                  <button onClick={() => excluirSala(index)}>Excluir</button>
                </li>
              ))}
            </ul>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                adicionarSala();
              }}
            >
              <input
                type="text"
                value={novaSala}
                onChange={(e) => setNovaSala(e.target.value)}
                placeholder="Nome da sala"
              />
              <button type="submit">Adicionar Sala</button>
            </form>
          </li>
        </ul>
      </nav>
      <div className="tabela-container">
        <h2>Ensalamento dos Professores</h2>
        <table>
          <thead>
            <tr>
              <th>Projeto James</th>
            </tr>
          </thead>
          <tbody>
            {dadosTabela.map((dados, index) => (
              <tr key={index}>
                <td>{dados.categoria}</td>
                <td>{dados.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <header className="App-header">
        {/* Restante do código... */}
      </header>
    </div>
  );
}

export default App;
