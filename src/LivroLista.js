import { useState, useEffect } from "react";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import './App.css';

const controleLivros = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ resumo, livro, excluir }) => {
    const { codEditora, autores } = livro;
    const nomeEditora = controleEditora.getNomeEditora(codEditora);
    return (
      <tr>
        <td>{livro.titulo}
        <br/>
          <button type="button" class="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button> 
        </td>
        <td>{livro.resumo}</td>
        <td>{nomeEditora}</td>
        <td>
          <ul>
            {autores.map((autor, index) => (
              <li key={index}>{autor}</li>
            ))}
          </ul>
        </td>
      </tr>
    );
  };
  

  const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);
  
    useEffect(() => {
        setLivros(controleLivros.obterLivros());
        setCarregado(true);
    }, [carregado]);
  
    const excluir = (codigo) => {
      controleLivros.excluir(codigo);
      setCarregado(false);
    };  
    return (
      <main>
        <h1> .:Catálogo de Livros:.</h1>
        <table className="table">
          <thead className="bg-dark text-white">
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {livros.map(livros => (
              <LinhaLivro key={livros.codigo} livro={livros}excluir={excluir}/>
            ))}
          </tbody>
        </table>
      </main>
    )
  }
  
  export default LivroLista;