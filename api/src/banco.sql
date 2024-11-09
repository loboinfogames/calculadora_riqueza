create database db_turma;

use db_turma;

create table tb_turma (
id_turma int auto_increment primary key,
nm_turma varchar(200),
ds_curso varchar(200),
nr_ano_letivo int,
qtd_capacidade int,
bt_ativo boolean,
dt_inclusao datetime
);


select * from tb_turma
where 
