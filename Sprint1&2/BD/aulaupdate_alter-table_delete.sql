create database sprint;

use sprint;

create table pessoa (
id int primary key,
nome varchar (50),
altura float,
dtnasc date -- 'YYYY-MM-DD'
);
-- float 7 caracteres 1234567
-- double 15 caracteres
-- decimal 32
-- date 'YYYY-MM-DD'

describe pessoa;

insert into pessoa values
	(1, 'Cássio', '1.95', '1993-10-13');
    
    select * from pessoa;

alter table pessoa modify column id int auto_increment;

insert into pessoa values
	(default, 'neymar', '1.76', '1992-02-05');
    -- (null, 'neymar', '1.76', '1992-02-05');
    -- null ou default conseguem fazer a funçâo para o auto increment
    
select * from pessoa;

alter table pessoa auto_increment = 9;

insert into pessoa values
	(default, 'Endrick', '1.71', null);
    
select * from pessoa;

insert into pessoa values
	(default, 'Arrascaeta', '1.43', '1976-03-01');

select * from pessoa;

delete from pessoa where id = 10;

select * from pessoa;

select nome from pessoa 
	where nome like '%s%';
    
alter table pessoa modify column nome varchar(80);

describe pessoa;

alter table pessoa rename column id to idpessoa;

-- atualizar um dado
select * from pessoa;
update pessoa set nome = 'Cássio lindo'
	where id = 1;
    
select nome from pessoa
	where nome like '_r%';

-- excluir uma colulna

alter table pessoa drop column dtnasc;
-- drop excluir

describe pessoa;




describe pessoa;

update pessoa set posição = 'atacante'
	where id in (2, 9, 11);

update pessoa set posição = 'goleiro'
	where id=1;    
    

select * from pessoa;

-- excluir a linha inteira
delete from pessoa where id = 1;

select * from pessoa;

insert into pessoa (nome) values
('Gustavo gomes'),
('Gil');

select * from pessoa;

update pessoa set posição = 'Zagueiro'
	where id between 2 and 14;
-- entre um numero e outro, between 1 and 10
    
select * from pessoa;

-- Constraint restrição/configuração
alter table pessoa add constraint chkposicao
	check (posição in ('Volante', 'Zagueiro'));
    
insert into pessoa (nome, posição) values
	('Ronaldo', 'Atacante');
    
select * from pessoa;

alter table pessoa add constraint validaEmail
	check (email like '%@%');
    
select * from pessoa;