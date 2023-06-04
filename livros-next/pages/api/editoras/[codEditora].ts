import ControleEditora from "../../../classes/controle/ControleEditora"
import {NextApiResponse, NextApiRequest} from 'next';

const controlEditoras = new ControleEditora();

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'GET') {

      try {
        const codEditora = Number(req.query.codEditora);
        const nomeEditora = controlEditoras.getNomeEditora(codEditora);
  
        if (nomeEditora) {
          const response = { nomeEditora };
          res.status(200).json(response);

        } else {
          res.status(405).json({ error405: "Método não permitido." });
        }

        } catch (error500) {
            console.error(error500);
                res.status(500).json({ error500: "Exceção ocorrida no servidor." });
      }
  }
};