-- atividade 1

create table Atleta2 (
	idAtleta int primary key,
    nome varchar(40),
    modalidade varchar(40),
    qtdMedalha int);
    
insert into Atleta2 values
	('1', 'neymar', 'futebol', '9'),
    ('2', 'samuel', 'futebol', '8'),
    ('3', 'vivian', 'volei', '6'),
    ('4', 'diego', 'volei', '5'),
    ('5', 'igu', 'basquete', '4'),
    ('6', 'drake', 'basquete', '2');
    
    update Atleta2 set qtdMedalha =2
		where idAtleta = 1;
    
    update Atleta2 set qtdMedalha =7
		where idAtleta in (2, 3);
        
update Atleta2 set nome = 'jose'
	where idAtleta = 4;

alter table Atleta2 add column dtnasc date;


    
update Atleta2 set dtnasc = '1999-08-28'
	where idAtleta in (1,2);
    
update Atleta2 set dtnasc = '2005-04-03'
	where idAtleta between 3 and 5;

update Atleta2 set dtnasc = '2000-08-10'
	where idAtleta = 6;

delete from Atleta2 where idAtleta = 5;

select * from Atleta2 where modalidade !='natacao';

select * from Atleta2 where qtdMedalha >=3;

alter table Atleta2 modify column modalidade varchar(60);

describe Atleta2;

truncate table Atleta2;

-- atividade 2

create table musica(
	idmusica int primary key,
    titulo varchar(40),
    artista varchar(40),
    genero varchar(40));
    
insert into musica values
	('1', 'Mandrake', 'kyan', 'trap'),
    ('2', 'Lágrimas', 'mc ig', 'trap'),
    ('3', 'Chapatti', 'tyler', 'eletronica'),
    ('4', 'Flores', 'tyler', 'eletronica'),
    ('5', 'deixar alagar', 'kyan', 'pagode'),
    ('6', 'melhor eu ir', 'pericles', 'pagode'),
    ('7', 'Medley2022', 'mc ig', 'funk'),
    ('8', 'Set dos casados', 'pericles', 'funk');
select * from musica;

alter table musica add column curtidas int;

update musica set curtidas = 90
	where idmusica=1;

update musica set curtidas = 1000
	where idmusica in (2,3);
    
update musica set curtidas = 2000
	where idmusica between 4 and 6;

alter table musica modify column artista varchar(80);

update musica set curtidas = 120
	where idmusica=1;
    
update musica set curtidas = 2
	where idmusica in (2,3);

update musica set titulo = 'Todo mundo erra'
	where idmusica = 5;
    
delete from musica where idmusica =4;    
    
select * from musica where genero != 'funk';

select * from musica where curtidas >= 20;

describe musica;

truncate musica;

-- atividade 3

create table filme (
	idfilme int primary key,
    titulo varchar (50),
    genero varchar (40),
    diretor varchar (40));

insert into filme values
	('1', 'Ford vs Ferrari', 'Corrida', 'guilherme soul'),
    ('2', 'Rush', 'Corrida', 'jeferson'),
    ('3', 'Até o ultimo homem', 'Guerra', 'mario'),
    ('4', 'dunkirk', 'Guerra', 'jeferson'),
    ('5', 'A orfã', 'Terror', 'mario'),
    ('6', 'Atividade paranormal', 'Terror', 'jose'),
    ('7', '007', 'Ação', 'guilherme soul'),
    ('8', '007 Parte 2', 'Ação', 'jose');
    
select * from filme;

alter table filme add column protagonista varchar(50);

update filme set protagonista = 'Toretto'
	where idfilme = 1;
    
update filme set protagonista = 'Carlos sainz'
	where idfilme in (2,3,4);
    
update filme set protagonista = 'Evoney fernandes'
	where idfilme between 5 and 7;
    
update filme set protagonista = 'Bahianinho de mauá'
	where idfilme = 8;
    
alter table filme modify column diretor varchar (150);

update filme set diretor = 'pedrinho'
	where idfilme = 5;
    
update filme set diretor = 'Messi'
	where idfilme in (2, 7);
    
update filme set diretor = 'Bluezao'
	where idfilme = 6;
    
delete from filme where idfilme=3;

select * from filme where genero != 'drama';

select * from filme where genero = 'suspense';

describe filme;

truncate filme;

-- atividade 4

create table professor (
	idprofessor int primary key,
	nome varchar(50),
    especialidade varchar(40),
    dtnasc date);
    
    insert into professor values
		('1', 'fernanda', 'pi', '1990-09-29'),
        ('2', 'vivian', 'bd', '1999-10-20'),
        ('3', 'kaline', 'se', '2005-02-18'),
        ('4', 'rayssa', 'se', '2002-10-25'),
        ('5', 'jp', 'algoritmos', '1987-10-12'),
        ('6', 'braian', 'algoritmos', '1995-05-04');
        
select * from professor;

alter table professor add column função varchar(50);

alter table professor add constraint validafunção
	check (função in ('monitor', 'assistente', 'titular'));
    
update professor set função = 'titular'
	where idprofessor = 1;
    
update professor set função = 'monitor'
	where idprofessor in (4, 6);
    
update professor set função = 'assistente'
	where idprofessor between 2 and 3;

update professor set função = 'titular'
	where idprofessor = 5;
    
insert into professor values
	('7', 'joaquim', 'bd', '2004-10-23', 'monitor');

delete from professor where idprofessor = 5;

select * from professor where função = 'titular';

select especialidade, dtnasc from professor where função ='monitor';

update professor set dtnasc = '1999-09-09'
	where idprofessor = 3;
    
truncate professor;

-- atividade 5

create table curso (
	idCurso int primary key auto_increment,
    nome varchar(50),
    sigla varchar(3),
    coordenador varchar(50));
    
    insert into curso values
    (default, 'javascript', 'js', 'joao pedro'),
    (default, 'estilização css', 'css', 'caramico'),
    (default, 'banco de dados', 'bd', 'vivian');
    
    select * from curso;
    
    select coordenador from curso;
    
    select * from curso where sigla = 'js';
    
    select * from curso order by nome;
    
    select * from curso order by coordenador desc;
    
    select * from curso where nome like 'b%';
    
    select * from curso where nome like '%s';
    
    select * from curso where nome like '_s%';
    
    select * from curso where nome like '%s_';
    
    drop table curso;
    
-- atividade 6

create table revista (
	idRevista int primary key,
    nome varchar (40),
    categoria varchar (30));
    
    alter table revista auto_increment = 1;
    
    insert into revista (idRevista, nome) values
		(default, 'rodas'),
		(default, 'espaço'),
		(default, 'g1'),
		(default, 'tempo');
        
	select * from revista;
    
    update revista set categoria = 'news'
		where idRevista in (3,4);
	
    update revista set categoria = 'carros'
		where idRevista = 1;
	
    update revista set categoria = 'futuro'
		where idRevista = 2;
        
	select * from revista;
    
    insert into revista values
		(default, 'games', 'geek'),
		(default, 'esporte maximo', 'esportes'),
		(default, 'bola na rede', 'futebol');
        
	select * from revista;
    
    describe revista;
    
    alter table revista modify column categoria varchar (40);
    
    describe revista;

    alter table revista add column periodicidade varchar (15);
    
    select * from revista;
    
    alter table revista drop column periodicidade;