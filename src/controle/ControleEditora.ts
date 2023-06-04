import Editora  from '../modelo/Editora'

const editoras: Array<Editora> = [
    {codEditora: 10, nome: "Companhia das Letras"},
    {codEditora: 205, nome: 'Darkside Books'},
    {codEditora: 1028, nome: 'FTD'},
]

class ControleEditoras {
    getEditoras(): Array<Editora> {
        return editoras
    }

    getNomeEditora(codEditora: number): string {
        const editora = editoras.find((e) => e.codEditora === codEditora)
        return editora ? editora.nome : ""
    }

    obterEditoraPorCodigo(codEditora: number): Editora | undefined {
        return editoras.find((e) => e.codEditora === codEditora)
    }
}

export default ControleEditoras;
