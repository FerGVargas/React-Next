import ControleLivros from "@/classes/controle/ControleLivros"
import {NextApiResponse, NextApiRequest} from 'next'

const controleLivro = new ControleLivros();

export default (res: NextApiResponse, req: NextApiRequest) => {

    try {
      if (req.method === 'GET'){
        const livros = controleLivro.obterLivros();
        res.status(200).json(livros)
        }

        else if (req.method === 'POST'){
            const livro = req.body
            controleLivro.incluir(livro);
            res.status(200).json({ Message: "Sucesso ao incluir!"});
        } else {
            res.status(405).json({ error405: "Método não permitido."})
        }    
      } catch (error) {
        res.status(500).json({ error: "Exceção ocorrida no servidor."})
    }
  }