import con from "./conection.js";

export async function turmaRepository ( pessoa ){

    const comando = `insert into tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao)
                            values(?,?,?,?,?,?)
            
    `;

    let resposta = await con.query(comando, [pessoa.turma, pessoa.curso, pessoa.ano_letivo, pessoa.capacidade, pessoa.ativo, pessoa.inclusao])
    let info = resposta[0];

    return info.insertID;
}

export async function consultarTabela (){
     const comando= ` select id_turma      id,
                           nm_turma        turma,
                            ds_curso       curso,
                           nr_ano_letivo   letivo,
                           qtd_capacidade  capacidade,
                           bt_ativo        ativo,
                           dt_inclusao     inclusao

                    from tb_turma
     `;

    let resposta= await con.query (comando);
    let registro = resposta[0]

   return registro;
}

export async function ConsultarRegistro (curso){
    const comando = `Select * from tb_turma
                    where ds_curso = ?
    `;

    
    let resposta= await con.query (comando, [curso]);
    let registro = resposta[0]

    return registro; 
}

