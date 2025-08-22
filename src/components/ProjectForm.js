import { useState } from "react";

function ProjectForm({ adicionarProjeto }) {
    const [nome, setNome] = useState("");
    const [status, setStatus] = useState("Planejamento");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nome) return;

        adicionarProjeto({ nome, status });
        setNome("");
        setStatus("Planejamento");
    };

    return (
        <form onSubmit={handleSubmit} className="projeto-form">
            <input 
                type="text"
                placeholder="Nome do Projeto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Planejamento">Planejamento</option>
                <option value="Execução">Execução</option>
                <option value="Concluído">Concluído</option>
            </select>
            <button type="submit">Adicionar Projeto</button>
        </form>
    );
}

export default ProjectForm;