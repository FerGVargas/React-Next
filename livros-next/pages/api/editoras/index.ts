import ControleEditora from '@/classes/controle/ControleEditora'
import {NextApiResponse, NextApiRequest} from 'next'

const controleEditoras = new ControleEditora();

export default (res: NextApiResponse, req: NextApiRequest) => {

  try {
    if (req.method === 'GET'){
      const editoras = controleEditoras.getEditoras();
      res.status(200).json(editoras);

    } else{
        res.status(405).json({ error405: "Método não permitido." });
    }
    
  } catch (error500){
    console.error(error500);
        res.status(500).json({ error500: "Exceção ocorrida no servidor." });
  }
};

