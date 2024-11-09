import { turmaRepository } from "../repository/turmaRepository.js";
import { Router } from "express";
import { consultarTabela } from "../repository/turmaRepository.js";
import { ConsultarRegistro } from "../repository/turmaRepository.js";


const condicao = Router ();

condicao.post('/add/', async (req, resp) => {
    let pessoa = req.body;

    let sla= turmaRepository(pessoa);

    resp.send({
        nodoID: sla
    })
})


condicao.get ('/consulta/', async (req, resp) => {
    let registro = await consultarTabela();

    resp.send(registro)

   
})

condicao.put ('/registro/:curso'), async (req, resp) => {
    let curso= req.rota.curso;
    let id= await ConsultarRegistro(curso);

    resp.send(id)
}


export default condicao

