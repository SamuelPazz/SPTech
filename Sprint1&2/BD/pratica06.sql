create database AlunoProjeto ;

use AlunoProjeto;

create table aluno(
raAluno int primary key auto_increment,
nome varchar(45),
telefone varchar(45),
fkRepresentante int,
constraint fkAlunoRepresentante foreign key (fkRepresentante)
	references aluno (raAluno),
fkProjeto int,
constraint fkProjetoAluno foreign key (fkProjeto)
	references projeto (idProjeto));

create table projeto(
idProjeto int primary key auto_increment,
nome varchar(45),
descricao varchar(45));
    
create table acompanhantes(
idAcompanhante int,
fkAluno int,
constraint fkAcompanhanteAluno foreign key (fkAluno)
	references aluno (raAluno),
constraint pkComposta primary key (idAcompanhante, fkAluno),
nome varchar(45),
relacao varchar(45));


insert into projeto values
	(default, 'Aquatech', 'Projeto Aquatech'),
    (default, '3GO', 'Projeto adsb 3GO'),
    (default, 'MKT', 'Projeto MKT');

insert into aluno values
	(default, 'Samuel', '11999999999', null, 1),
    (default, 'Lucas', '11999999999', null, 2),
    (default, 'Joaquim', '11999999999', 1, 1),
    (default, 'Miguel', '11999999999', 2, 2),
    (default, 'Tales', '11999999999', 1, 3);
    
insert into acompanhantes values
	(1, 1, 'Wellinton', 'Tio'),
    (1, 2, 'Manuella', 'Cônjuge'),
    (2, 2, 'Ayslan', 'Irmão'),
    (1, 5, 'Joel', 'Pai');
	
select * from projeto;

select * from aluno;

select * from acompanhantes;

select * from aluno join projeto on aluno.fkProjeto = projeto.idProjeto; 

select * from aluno join acompanhantes on acompanhantes.fkAluno = aluno.raAluno;
    
select * from aluno join projeto on aluno.fkProjeto = projeto.idProjeto where projeto.nome = 'Aquatech'; 

select * from aluno join projeto on aluno.fkProjeto = projeto.idProjeto 
join acompanhantes on acompanhantes.fkAluno = aluno.raAluno;
    

create database campanha;
use campanha;

create table organizador (
idOrganizador int primary key auto_increment,
nome varchar(45),
rua varchar(45),
bairro varchar(45),
email varchar(45),
fkExperiente int,
constraint fkExperienteOrganizador foreign key (fkExperiente)
	references organizador (idOrganizador))auto_increment = 30;
    
create table campanha (
idCampanha int primary key auto_increment,
categoria varchar(45),
instituicao varchar(45),
constraint chkInstituicao check (instituicao in('Vivida', 'UmaCasa')),
datafinal date,
fkOrganizador int,
constraint fkCampanhaOrganizador foreign key (fkOrganizador)
	references organizador (idOrganizador))auto_increment = 500;

insert into organizador values
(default, 'douglas', 'rua coutinho, 72', 'taipas', 'douglas@sptech.school', null),
(default, 'kleber', 'rua lider, 423', 'paulistano', 'kleber@sptech.school', 30),
(default, 'thomaz', 'rua haddock lobo, 900', 'consolação', 'thomaz@sptech.school', 30),
(default, 'rafael', 'rua veno, 123', 'consolação', 'rafael@sptech.school', null),
(default, 'Maicon', 'rua tufik, 22', 'taipas', 'mikaelly@sptech.school', 34);

insert into campanha values
(default, 'alimentos', 'Vivida', '2024-08-24', '30'),
(default, 'material escolar', 'Vivida', '2024-11-04', '31'),
(default, 'material', 'Umacasa', '2025-02-14', '31'),
(default, 'abrigo', 'Umacasa', '2024-05-07', '34'),
(default, 'roupas', 'Vivida', '2025-06-17', '34');

select * from organizador;
select * from campanha;

select * from organizador
join campanha on fkOrganizador = idOrganizador;

select * from organizador
join campanha on fkOrganizador = idOrganizador
where organizador.nome = 'Maicon';

select organizador.*, orientador.* from organizador
join organizador as orientador on orientador.idOrganizador = organizador.fkExperiente;

select organizador.*, orientador.* from organizador
join organizador as orientador on orientador.idOrganizador = organizador.fkExperiente
where orientador.nome = 'douglas';

select organizador.*, campanha .*, orientador.* from organizador
join campanha on campanha.fkOrganizador = organizador.idOrganizador
join organizador as orientador on orientador.idOrganizador = organizador.fkExperiente;
