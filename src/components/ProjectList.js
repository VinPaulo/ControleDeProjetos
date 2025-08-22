function ProjectList({ projetos, removerProjeto }) {
  return (
    <div className="project-list">
      {projetos.map((projeto) => (
        <div key={projeto.id} className="project-item">
          <div>
            <strong>{projeto.nome}</strong>
            <span className="status">{projeto.status}</span>
          </div>
          <button className="remover-btn" onClick={() => removerProjeto(projeto.id)}>
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;