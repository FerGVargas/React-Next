import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ControleEditora from "./controle/ControleEditora";
import ControleLivro from "./controle/ControleLivros"

const controleLivros = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados = props => {
  const opcoes = controleEditora.getEditoras();
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0]);
  const navigate = useNavigate();
  
  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event) => {
    event.preventDefault();
    const livro = {
      codigo: 0,
      codEditora: codEditora,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split("\n")
    };
    controleLivros.incluir(livro);
    navigate("/");
  };

  return (
    <main>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input id="titulo" type="text" className="form-control"  value={titulo} onChange={e => setTitulo(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="resumo">Resumo:</label>
          <textarea className="form-control" id="resumo" value={resumo} onChange={e => setResumo(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="editora">Editora:</label>
          <select className="form-control" id="editora" value={codEditora} onChange={tratarCombo}>
          {opcoes.map((item) => (
              <option key={item.codEditora} value={item.codEditora}>
                {item.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="autores">Autores:</label>
          <textarea className="form-control" id="autores" value={autores} onChange={e => setAutores(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Salvar Dados</button>
      </form>
    </main>
  );
}

export default LivroDados;