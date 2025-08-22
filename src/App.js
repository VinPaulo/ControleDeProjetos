import { useState, useEffect } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import "./App.css";

function App() {
  const [projetos, setProjetos] = useState([
    {id: 1, nome: "Projeto 1", status: "Em andamento"},
    {id: 2, nome: "Projeto 2", status: "Concluído"}
  ]);
  const [alegre, setAlegre] = useState(false);

  const adicionarProjeto = (projeto) => {
    setProjetos([...projetos, {id: Date.now(), ...projeto}]);
  };

  const removerProjeto = (id) => {
    setProjetos(projetos.filter(projeto => projeto.id !== id));
  };

  useEffect(() => {
    if (projetos.length === 0) {
      setAlegre(true);
      const timer = setTimeout(() => setAlegre(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [projetos]);

  return (
    <div className="App">
      {alegre && (
        <div className="alegre-overlay">
          <h1 className="titulo alegre">Tudo feito! 😄</h1>
        </div>
      )}
      <h1 className={`titulo${projetos.length > 0 ? " triste" : ""}`}>
        {projetos.length === 0
          ? "Sem tarefas! 🎉"
          : <>Tenho mesmo que fazer isso? {projetos.length > 0 && "😢"}</>
        }
      </h1>
      <ProjectForm adicionarProjeto={adicionarProjeto} />
      <ProjectList projetos={projetos} removerProjeto={removerProjeto} />
    </div>
  );
}

export default App;
