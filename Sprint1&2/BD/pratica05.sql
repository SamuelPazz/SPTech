-- ex1
create database Pet;
use Pet;

create table pet(
idPet int primary key auto_increment,
fkCliente int,
tipo varchar(45),
nome varchar(45),
raca varchar(45),
dtNasc date,
constraint fkPetCliente foreign key (fkCliente)
	references cliente(idCliente))auto_increment = 101;
    

    
create table cliente(
idCliente int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
telFixo varchar(45),
telCelular varchar(45),
cep char (9),
bairro varchar(45),
rua varchar(45),
numero varchar(8),
complemento varchar(45));


insert into cliente values
	(default, 'Samuel', 'paz', '11990122222', '11990122201', '01234560', 'jardins', 'rua conde', '782', 'casa3'),
    (default, 'Cleiton', 'silva', '11990122221', '11990122202', '01234569', 'jardins', 'rua conde', '341', 'casa4'),
    (default, 'João', 'gomes', '11990122223', '11990122203', '01234568', 'consolação', 'rua orelhão', '561', 'casa1'),
    (default, 'Gerson', 'gomes', '11990122224', '11990122204', '01234567', 'taipas', 'rua joão coutinho', '669', 'casa2');
    
insert into pet values
	(default, 1, 'cachorro', 'farol', 'golden', '2015-04-03'),
    (default, 1, 'gato', 'romeu', 'himalaio', '2016-04-08'),
    (default, 2, 'hammister', 'neymar', 'cinza', '2020-12-31'),
	(default, 2, 'cavalo', 'ramon', 'ponnte', '2014-07-25'),
	(default, 3, 'cobra', 'shi', 'cascavel', '2019-02-28'),
	(default, 4, 'tartaruga', 'ronaldo', 'casco-duro', '2012-08-07');
    
select * from cliente;
    
select * from pet;

alter table cliente modify column nome varchar(50);

select * from pet where tipo = 'cachorro';

select pet.nome, pet.dtNasc from pet;

select * from pet order by nome;

select * from cliente order by bairro desc;

select * from pet where pet.nome like 'f%';

select * from cliente where sobrenome = 'gomes';

update cliente set telCelular = '11999999905'
	where idCliente = 1;

select * from cliente;

select pet.*, cliente.* from pet join cliente on pet.fkCliente = cliente.idCliente;

select pet.*, cliente.* from pet join cliente on pet.fkCliente = cliente.idCliente where cliente.nome = 'Cleiton';

delete from pet where fkCliente = 4;

select * from pet;

create database pratica05;
use pratica05;
-- ex2

create table pessoa(
idPessoa int primary key auto_increment,
nome varchar(45),
dtNasc date,
profissao varchar(45)
);

create table gasto(
idGasto int,
fkPessoa int,
constraint pkGastoPessoa primary key (idGasto, fkPessoa),
data date,
valor decimal(7,2),
descricao varchar(45),
constraint fkPessoaGasto foreign key(fkPessoa)
	references pessoa(idPessoa));


insert into pessoa values
(default, 'João', '2005-05-15', 'Engenheiro'),
(default, 'Marcos', '1995-08-20', 'Motorista'),
(default, 'Rodolfo', '2004-11-10', 'Comentarista'),
(default, 'Moises', '2003-03-25', 'Professor');

insert into gasto values
(1, 1, '2022-10-12', 150.50, 'Compras no mercado'),
(1, 2, '2023-07-25', 200.00, 'Roupas'),
(1, 3, '2023-02-17', 80.75, 'Compras no mercado'),
(2, 3, '2021-09-07', 110.75, 'Transporte'),
(1, 4, '2020-08-10', 50.00, 'Cinema');

drop tables gasto, pessoa;

select * from pessoa;

select * from gasto;

select * from pessoa where profissao = 'Motorista';

select * from gasto where valor > 80;

select * from pessoa join gasto on fkPessoa = idPessoa; 

select * from pessoa join gasto on fkPessoa = idPessoa where pessoa.nome = 'Marcos'; 

update pessoa set nome = 'Samuel'
	where idPessoa = 1;

update gasto set valor = 150
	where fkPessoa = 4;
    
delete from gasto where fKPessoa = 4;

-- ex3

create database praticafuncionario;
use praticafuncionario;

create table setor(
idSetor int primary key auto_increment,
nome varchar(45),
andar varchar(4));

create table funcionario(
idFunc int primary key auto_increment,
nome varchar(45),
telefone varchar(45),
salario decimal (7,2),
constraint chksalarioMaior0 check (salario > 0),
fkSetor int,
constraint fkFuncSetor foreign key (fkSetor)
	references setor(idSetor));

create table acompanhante(
idAcompanhante int,
fkFunc int,
constraint pkFuncAcompanhante primary key (idAcompanhante, fkFunc),
nome varchar(45),
relacao varchar(45),
dtNasc date,
constraint fkFuncAcompanhante foreign key (fkFunc)
	references funcionario(idFunc));


insert into setor values
(default, 'Financeiro', 2),
(default, 'TI', 3);

insert into funcionario values
(default, 'Joaquim Silvano', '11990123456', 5000.00, 1),
(default, 'Fernanda Caramico', '11990123457', 5500.00, 1),
(default, 'Debora Flores', '11990123458', 6000.00, 2),
(default, 'John Kennedy', '11990123459', 5200.00, 2);

insert into acompanhante values
(1, 1, 'Pedro Paulo', 'Irmão', '2005-03-15'),
(1, 2, 'Luiza Sonza', 'Cônjuge', '2000-02-17'),
(1, 3, 'Samuel Paz', 'Irmão', '2005-04-03'),
(2, 3, 'Neymar Junior', 'Irmão', '1992-05-24'),
(1, 4, 'Livia Martins', 'Filha', '2012-07-30');


select * from acompanhante;
select * from setor;
select * from funcionario;

select * from setor join funcionario on fkSetor = idSetor;

select * from setor join funcionario on fkSetor = idSetor where setor.nome = 'TI';

select * from funcionario  join acompanhante on acompanhante.fkFunc = funcionario.idFunc;

select * from funcionario  join acompanhante on acompanhante.fkFunc = funcionario.idFunc where funcionario.nome = 'Debora Flores';

select * from funcionario  
join setor on funcionario.fkSetor = setor.idSetor
join acompanhante on acompanhante.fkFunc = funcionario.idFunc;

-- ex4

create database Treinador;
use Treinador;

create table nadador (
idNadador int primary key auto_increment,
nome varchar(45),
estadoOrigem varchar(45),
dtNasc date,
fkTreinador int,
constraint fkTreinadorNadador foreign key (fkTreinador)
	references treinador (idTreinador))auto_increment = 100;

create table treinador (
idTreinador int primary key auto_increment,
nome varchar(45),
telefone varchar(20),
email varchar(45),
fkExperiente int,
constraint fkTreinadorExperiente foreign key (fkExperiente)
	references treinador (idTreinador))auto_increment = 10;

insert into treinador (idTreinador, nome, telefone, email)values
(default, 'boris', '11988888888', 'boris@treino'),
(default, 'jonas', '11888888887', 'jonas@treino');

insert into treinador values
(default, 'luani', '11988888886', 'luani@treino', 10),
(default, 'cleber', '11888888885', 'cleber@treino', 10),
(default, 'kaleb', '11888888884', 'kalab@treino', 11);

select * from treinador;

insert into nadador values
(default, 'nicollas', 'SP', '2004-08-18', 10),
(default, 'gabriel', 'RJ', '2002-04-02', 10),
(default, 'matheus', 'BH', '1998-09-07', 13),
(default, 'silvano', 'BA', '1991-06-14', 14);

select * from treinador;

select * from nadador;

select * from treinador join nadador on nadador.fkTreinador = treinador.idTreinador;

select * from treinador join nadador on nadador.fkTreinador = treinador.idTreinador where treinador.nome = 'cleber';

select * from treinador join treinador as Experiente on Experiente.fkExperiente = treinador.idTreinador;

select * from treinador join treinador as Experiente on Experiente.fkExperiente = treinador.idTreinador where treinador.nome = 'boris';

select treinador.*, nadador.*, experiente.idTreinador as OrientadorTreinador, experiente.nome, experiente.telefone, experiente.telefone, experiente.email, experiente.fkExperiente 
from nadador
right join treinador on treinador.idTreinador = nadador.fkTreinador
left join treinador as experiente on treinador.fkExperiente = experiente.idTreinador;

select treinador.*, nadador.*, experiente.idTreinador as OrientadorTreinador, experiente.nome, experiente.telefone, experiente.telefone, experiente.email, experiente.fkExperiente 
from nadador
right join treinador on treinador.idTreinador = nadador.fkTreinador
left join treinador as experiente on treinador.fkExperiente = experiente.idTreinador where treinador.nome = 'cleber';
