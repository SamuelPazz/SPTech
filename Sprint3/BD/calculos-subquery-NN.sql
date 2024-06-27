create database aula12;

use aula12;

create table paciente (
	idPaciente int primary key auto_increment,
	nome varchar(45)) auto_increment = 100;
    
insert into paciente (nome) values
	('Brian'),
    ('Dom'),
    ('Mia');


create table medico(
	idMedico int primary key auto_increment,
    nome varchar(45))auto_increment = 1;
    
insert into medico (nome) values
	('Dr. Rock'),
    ('Dr. Shaw'),
    ('Dra. Letty');
    
    
create table consulta (
	idConsulta int,
    fkPaciente int,
    fkMedico int,
    primary key (idConsulta, fkPaciente, fkMedico),
	dtConsulta datetime,
    valor decimal(5,2),
    foreign key (fkPaciente) references paciente (idPaciente),
    foreign key (fkMedico) references medico (idMedico));
    
    
insert into consulta values 
	(1, 100, 1, '2024-05-06 14:00:00', 1.99),
    (1, 100, 2, '2024-05-06 15:00:00', 2.99),
    (1, 101, 1, '2024-05-06 15:00:00', 1.17),
    (1, 101, 2, '2024-05-06 16:00:00', 1.97),
    (2, 100, 1, '2024-05-16 14:00:00', 0);
    
select * from paciente join consulta on idPaciente = fkPaciente join medico on idMedico = fkMedico;

-- funções matématicas

select * from paciente left join consulta on idPaciente = fkPaciente 
left join medico on idMedico = fkMedico
where idConsulta is null
union
select * from paciente right join consulta on idPaciente = fkPaciente 
right join medico on idMedico = fkMedico
where idConsulta is null;

-- COUNT() - CONTABILIZA CAMPOS COM VALOR
select COUNT(dtConsulta) from consulta;

select valor from consulta;

insert into consulta (idConsulta, fkPaciente, fkMedico, valor)values
	(1, 102, 3, 1.99);
    
select * from consulta;

-- DISTINCT - SÓ APARECE OS CAMPOS QUE SÃO DIFERENTES
select distinct valor from consulta;
select count(valor) from consulta;
select count(distinct valor) from consulta;

-- a consulta mais cara
select max(valor) from consulta;

-- a consulta mais barata
select min(valor) from consulta;

select valor from consulta order by valor limit 2;

-- a soma
select sum(valor) from consulta;

select sum(valor) from consulta join paciente on idPaciente = fkPaciente where paciente.nome = 'Brian';

-- group by

select nome, sum(valor) from paciente join consulta on idPaciente = fkPaciente group by nome;

-- a média 
select avg(valor) from consulta;
select round(avg(valor),2) from consulta;
select truncate(avg(valor),2) from consulta;

-- subquery
select nome, max(valor) from consulta join paciente on idPaciente = fkPaciente;

select distinct(nome) from consulta join paciente on idPaciente = fkPaciente where valor >= (select avg(valor) from consulta);