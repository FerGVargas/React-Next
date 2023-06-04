import ControleLivros from "@/classes/controle/ControleLivros";
import {NextApiResponse, NextApiRequest} from 'next'

const controleLivro = new ControleLivros();

export default (res: NextApiResponse, req: NextApiRequest) => {

    try {
      if (req.method === "DELETE") {
        const codigo = Number(req.query.codigo);
        controleLivro.excluir(Number(codigo));
        res.status(200).json({ Message: "Sucesso ao excluir!"});
      } else {

        res.status(405).json({ error405: "Método não permitido."});
      }
    } catch (error) {

      res.status(500).json({ error500: "Exceção ocorrida no servidor."});
    }
  }
