import Livro from '../modelo/Livro'

var livros: Array<Livro> = [
    {   codigo: 100,
        codEditora: 10,
        titulo: "Pequeno Manual Antirracista.",
        resumo: "Neste pequeno manual, trata temas do racismo, negritude, branquitude, violência racial, cultura, desejos e afetos. presenta caminhos de reflexão para aqueles que queiram aprofundar sua percepção sobre discriminações racistas estruturais e assumir a responsabilidade pela transformação do estado das coisas.",
        autores: ["Ribeiro, Djamila"],
    },
    {   codigo: 103,
        codEditora: 10,
        titulo: "A Revolução dos Bichos: Um Conto de Fadas.",
        resumo: "Uma história intrigante e provocativa por ser um tipo de narrativa protagonizada geralmente por animais, mas que reflete ações humanas com algum ensinamento de cunho moral.",
        autores: ["Orwell, George"],
    },
    {   codigo: 200,
        codEditora: 205,
        titulo: "A Menina Submersa.",
        resumo: "Memórias é um verdadeiro conto de fadas, uma história de fantasmas habitada por sereias e licantropos. A Menina Submersa é como esse canto, que nos hipnotiza até que tenhamos virado a última página, e fica conosco para sempre ao lado de nossas melhores lembranças.",
        autores: ["R, Kiernan Caitlín"],
    },
    {   codigo: 206,
        codEditora: 205,
        titulo: "Alice No País Das Maravilhas.",
        resumo: "Uma menina, um coelho e uma história capazes de fazer qualquer um de nós voltar a sonhar.",
        autores: ["Carroll, Lewis"],
    },
    {   codigo: 1000,
        codEditora: 1028,
        titulo: "Um Mundo Melhor Para Todos.",
        resumo: "Após seu pai perder o emprego, Isabela sugere aos seus colegas na escola, durante a Semana Economia e Vida, que todos ajudassem suas famílias no orçamento doméstico. Ao mesmo tempo, seu amigo Thiago transforma-se a partir do exemplo de solidariedade de irmã Dulce. Outros temas também são abordados neste livro, como consumismo, preservação ambiental e trabalho infantil, mostrando o quanto a construção de um mundo melhor é responsabilidade de todos nós.",
        autores: ["Carraro, Fernando"],
    },
    {   codigo: 1007,
        codEditora: 1028,
        titulo: "A Tempestade.",
        resumo: "Próspero, um mago muito poderoso, vive exilado com sua filha numa ilha, vítima de uma conspiração o rei e sua tripulação faziam uma viagem em alto-mar quando uma tempestade, provocada por Próspero, os faz naufragar em sua ilha. Mas o mago, ao arquitetar seu plano de vingança, não contava que Ferdinando, filho de Alonso, e Miranda iriam se apaixonar.",
        autores: [ "Shakespeare, William"],
    }
];

class ControleLivros {
  
  obterLivros(): Array<Livro> {
    return livros
  }
  
  
  incluir(livro: Livro): void {
    const novoCodigo = livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1
    livros.push({ ...livro, codigo: novoCodigo })
  }

  
  excluir(codigo: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigo)
    if (index !== -1) {
      livros.splice(index, 1)
    }
  }
}

export default ControleLivros;