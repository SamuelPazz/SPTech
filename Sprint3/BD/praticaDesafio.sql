create database Exercicio11;
use Exercicio11;

create table Departamento(
     idDepto int primary key,
     nomeDepto varchar(45),
     fkGerente int,
     dataInicioGer date);

create table Funcionario(
    idFunc int primary key,
    nomeFunc varchar (30), 
    salario decimal(4),
    sexo char(1),
    fkSupervisor int, 
    dataNasc date, 
    fkDepto int);

create table Projeto(
    idProj int primary key,
    nomeProj varchar(45),
    localProj varchar(45),
    fkDepto int);

create table FuncProj (
    fkFunc int,
    fkProj int,
    horas decimal(3,1));

insert into Departamento values
    (105, 'Pesquisa', 2, '2008-05-22'),
    (104, 'Administração', 7, '2015-01-01'),
    (101, 'Matriz', 8, '2001-06-19');

insert into Funcionario values
    (1, 'Joao silva', 3500, 'm', 2, '1985-01-09', 105),
    (2, 'Fernando Wong', 4500, 'm', 8, '1975-12-08', 105),
    (3, 'Alice Sousa', 2500, 'f', 7, '1988-01-19', 104),
    (4, 'Janice Morais', 4300, 'f', 8, '1970-06-20', 104),
    (5, 'Ronaldo Lima', 3800, 'm', 1, '1982-09-15', 105),
    (6, 'Joice Leite', 2500, 'f', 1, '1992-07-31', 105),
    (7, 'Antonio Pereira', 2500, 'm', 4, '1989-03-29', 104),
    (8, 'Juliano Brito', 5500, 'm', null, '1957-11-10', 101);

insert into Projeto values  
    (1, 'Produto X', 'Santo André', 105),
    (2, 'Produto Y', 'Itu', 105),   
    (3, 'Produto Z', 'São Paulo', 105),
    (10, 'Informatização', 'Mauá', 104),
    (20, 'Reorganização', 'São Paulo', 101),
    (30, 'BenefíciosProduto', 'Mauá', 104);

insert into FuncProj values
    (1, 1, 32.5),
    (1, 2, 7.5),
    (5, 3, 40.0),
    (6, 1, 20.0),
    (6, 2, 20.0),
    (2, 2, 10.0),
    (2, 3, 10.0),
    (2, 10, 10.0),
    (2, 20, 10.0),
    (3, 30, 30.0),
    (3, 10, 10.0),
    (7, 10, 35.0),
    (7, 30, 5.0),
    (4, 30, 20.0),
    (4, 20, 15.0),
    (8, 20, NULL);

-- fkGerente da tabela Departamento
alter table Departamento add foreign key (fkGerente) references Funcionario (idFunc);

-- fkSupervisor e fkDepto da tabela Funcionario
alter table Funcionario add foreign key (fkSupervisor) references Funcionario (idFunc),
                        add foreign key (fkDepto) references Departamento (idDepto);

-- fkDepto da tabela Projeto
alter table Projeto add foreign key (fkDepto) references Departamento (idDepto);

-- fkFunc e fkProj da tabela FuncProj 
alter table FuncProj add foreign key (fkFunc) references Funcionario (idFunc),
                    add foreign key (fkProj) references Projeto (idProj);

alter table FuncProj add primary key (fkFunc, fkProj);

select * from Departamento;

select * from Funcionario;

select * from Projeto;

select * from FuncProj;

insert into Funcionario values
	(null, 'Cecília Ribeiro', 2800, 'f', null, '1980-04-05', 104);
-- Conseguiu inserir? Por que? - R: Não foi inserido pois o idFunc não pode ser nulo

insert into Funcionario values
	(3, 'Alice Sousa', 2800, 'f', 4, '1980-04-05', 104);
-- Conseguiu inserir? Por que? - R: Não foi inserido pois a chave primaria (idFunc) não pode ser duplicado, não pode haver dois idFunc "3"


insert into Funcionario values
	(9, ' Cecília Ribeiro', 2800, 'f', 4, '1980-04-05', 107);
-- Conseguiu inserir? Por que? - R: Não foi inserido pois não existe o idDepto 107 então a fkDepto não encontra esse valor


insert into Funcionario values
	(9, 'Cecília Ribeiro', 2800, 'f', 4, '1980-04-05', 104);
-- Conseguiu inserir? Por que? - R: Foi inserido pois o idFunc não está duplicado, e o fkDepto está puxando um valor existente

delete from FuncProj where fkFunc = 3 and fkProj = 10;
-- Conseguiu excluir? Por que? - R: Consegui exclui pois existe uma tupla com esses dois dados

delete from Funcionario where idFunc=4;
-- Conseguiu excluir? Por que? - R: Não Consegui pois o Funcionario com idFunc 4 é o supervisor do Funcionario com idFunc 7

delete from Funcionario where idFunc=2;
-- Conseguiu excluir? Por que? - R: Não Consegui pois o Funcionario com idFunc 2 é o gerente do Departamento com idDepto 105

update Funcionario set salario = 2800 where idFunc=3;
-- Conseguiu alterar? Por que? - R: Consegui alterar pois o Funcionario com idFunc 3 existe

update Funcionario set fkDepto = 101 where idFunc=3;
-- Conseguiu alterar? Por que? - R: Consegui alterar pois o Funcionario com idFunc 3 existe e o fkDepto/idDepto 101 também existe

update Funcionario set fkDepto = 107 where idFunc=3;
-- Conseguiu alterar? Por que? - R: Não consegui alterar pois o fkDepto/idDepto 107 não existe  

select dataNasc, salario from Funcionario where idFunc=1;

select salario from Funcionario;

select distinct(salario) from Funcionario;

select * from Funcionario order by nomeFunc;

select *  from Funcionario order by salario desc;

select * from Funcionario where salario >= 200 and salario <= 4000;

select nomeFunc, salario from Funcionario where nomeFunc like 'J%';

select nomeFunc, salario from Funcionario where nomeFunc like '%a';

select nomeFunc, salario from Funcionario where nomeFunc like '__n%';

select nomeFunc, dataNasc from Funcionario where nomeFunc like '%S____';

select * from Funcionario where fkDepto = 105;

select * from Funcionario where fkDepto = 105 and salario > 3500;

select * from Funcionario where fkDepto = 105 and nomeFunc like 'J%';

select Funcionario.idFunc as idFuncionario, Funcionario.nomeFunc as nomeFunc, 
		supervisor.idFunc as idSupervisor, supervisor.nomeFunc as nomeSupervisor 
from Funcionario
left join Funcionario as supervisor on supervisor.idFunc = Funcionario.fkSupervisor;

select Projeto.idProj, Projeto.fkDepto, Funcionario.nomeFunc as GerenteDepto, Funcionario.dataNasc as DataNascimento from Projeto
join Departamento on Departamento.idDepto = Projeto.fkDepto
join Funcionario on Funcionario.idFunc = Departamento.fkGerente where localProj = 'São Paulo';

select * from FuncProj;
select Funcionario.idFunc, Funcionario.nomeFunc, Projeto.idProj, Projeto.nomeProj, FuncProj.horas from FuncProj
join Funcionario on Funcionario.idFunc = FuncProj.fkFunc
join Projeto on Projeto.idProj = FuncProj.fkProj;

select nomeFunc from Funcionario where dataNasc < '1980-01-01';

select count(distinct(salario)) from Funcionario;

select count(distinct(localProj)) from Projeto;

select avg(salario), sum(salario) from Funcionario;

select min(salario), max(salario) from Funcionario;

select idDepto, avg(salario), sum(salario) from Funcionario 
join Departamento on Funcionario.fkDepto = Departamento.idDepto
group by Departamento.idDepto; 

select idDepto, min(salario), max(salario) from Funcionario 
join Departamento on Funcionario.fkDepto = Departamento.idDepto
group by Departamento.idDepto; 

insert into Funcionario values
(10, 'José da Silva', 1800, 'm', 3, '2000-10-12', null),
(11, 'Benedito Almeida', 1200, 'm', 5, '2001-09-01', null);

insert into Departamento values
(110, 'RH', 3, '2018-11-10');











 

 