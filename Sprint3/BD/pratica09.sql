create database pratica09;
use pratica09;

create table grupo (
    idGrupo int primary key auto_increment,
    nome varchar(45),
    descricaoProjeto varchar(45));

create table aluno (
    ra int primary key,
    nome varchar(45),
    email varchar (45),
    fkGrupo int,
    foreign key (fkGrupo) references grupo (idGrupo));

create table professor (
    idProfessor int primary key auto_increment,
    nome varchar(45),
    disciplina varchar(45))auto_increment=10000;

create table avaliacao (
    idAvaliacao int auto_increment,
    fkProfessor int,
    fkGrupo int,
    foreign key (fkProfessor) references professor (idProfessor),
    foreign key (fkGrupo) references grupo (idGrupo),
    primary key (idAvaliacao, fkProfessor, fkGrupo),
    datahora datetime,
    nota decimal(5,2));

insert into grupo (nome, descricaoProjeto) values
    ('3GO', 'Controle de temperatura e umidade/Trigo'),
    ('GP-Spirit', 'Controle de temperatura em carros'),
    ('Real madrid', 'Controle de bola'),
    ('Loud', 'Controle de temperatura em bois');

insert into aluno values
    (1, 'Tayson', 'tayson@tayson', 1),
    (2, 'Samuel', 'samuel@samuel', 2),
    (3, 'Rafael', 'rafael@rafael', 3),
    (4, 'Leonardo', 'leonardo@leonardo', 4),
    (5, 'Rebeca', 'rebeca@rebeca', 1),
    (6, 'Ronielli', 'Ronielli', 2);

insert into professor (nome, disciplina) values
    ('Braian', 'UI/UX'),
    ('Vivian', 'BD'),
    ('Marcio', 'SO'),
    ('Marcos', 'TI'),
    ('JP', 'Algoritmos'),
    ('Marise', 'Arq Comp');
  
insert into avaliacao values
    (1, 10000, 1, '2024-05-18 10:00:00', 9.8),
    (2, 10001, 1, '2024-05-19 10:00:00', 8.7),
    (1, 10003, 2, '2024-05-20 10:30:00', 7.95),
    (2, 10004, 2, '2024-05-21 10:30:00', 10),
    (1, 10002, 3, '2024-05-22 11:00:00', 6.9),
    (2, 10005, 3, '2024-05-23 11:00:00', 8.2),
    (1, 10005, 4, '2024-05-24 11:30:00', 8.9),
    (2, 10000, 4, '2024-05-25 11:30:00', 6.7);

select * from professor;
select * from aluno;
select * from grupo;
select * from avaliacao;

select * from grupo join aluno on aluno.fkGrupo = grupo.idGrupo;

select * from grupo join aluno on aluno.fkGrupo = grupo.idGrupo where idGrupo = 2;


select avg(nota) as mediaNota from avaliacao;

select min(nota) as MinNota, max(nota) as MaxNota from avaliacao;

select sum(nota) as SomaNota from avaliacao;

select professor.*, grupo.*, avaliacao.datahora from professor
join avaliacao on professor.idProfessor = avaliacao.fkProfessor
join grupo on avaliacao.fkGrupo = grupo.idGrupo;

select professor.*, grupo.*, avaliacao.datahora from professor
join avaliacao on professor.idProfessor = avaliacao.fkProfessor
join grupo on avaliacao.fkGrupo = grupo.idGrupo where idGrupo = 3;

select grupo.nome from grupo 
join avaliacao on avaliacao.fkGrupo = grupo.idGrupo where fkProfessor = 10000;

select grupo.*, aluno.*, professor.*, avaliacao.datahora from grupo 
join aluno on aluno.fkGrupo = grupo.idGrupo
join avaliacao on avaliacao.fkGrupo = grupo.idGrupo
join professor on avaliacao.fkProfessor = professor.idProfessor;

select count(distinct(nota)) from avaliacao;

select avaliacao.fkProfessor, avg(nota) as MediaNota, sum(nota) as SomaNota from avaliacao group by avaliacao.fkProfessor;

select avaliacao.fkGrupo, avg(nota) as MediaNota, sum(nota) as SomaNota from avaliacao group by avaliacao.fkGrupo;

select avaliacao.fkProfessor, min(nota) as MinNota, max(nota) as MaxNota from avaliacao group by avaliacao.fkProfessor;

select avaliacao.fkGrupo, min(nota) as MinNota, max(nota) as MaxNota from avaliacao group by avaliacao.fkGrupo;
