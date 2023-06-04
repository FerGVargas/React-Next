import Editora from "../modelo/Editora"

let editoras: Array<Editora> = [
  
  {codEditora: 10, nome: "Companhia das Letras"},
  {codEditora: 205, nome: 'Darkside Books'},
  {codEditora: 1028, nome: 'FTD'},
];

class ControleEditora{
  getEditoras(): Array<Editora>{
    return editoras;
  }
  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora?.nome;
  }

  obterEditoraPorCodigo(codEditora: number): Editora | undefined {
    return editoras.find((e) => e.codEditora === codEditora)
}

}

export default ControleEditora

