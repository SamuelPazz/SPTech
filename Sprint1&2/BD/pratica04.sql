use sprint2;

create table professor (
idProfessor int primary key auto_increment not null,
nome varchar(50),
sobrenome varchar(30),
especialidade1 varchar(40),
especialidade2 varchar(40));

select * from professor;

 insert into professor values
(default,'Vivian', 'Silva', 'BD', 'Português'),
(default,'Maria', 'Aparecida', 'Português', 'Inglês'),
(default,'João', 'Pedro', 'Algoritmos', 'Matemática'),
(default,'Fernanda', 'Caramico', 'Matemática', 'Arq'),
(default,'Marise', 'machine', 'Arq', 'Matemática'),
(default,'Rayssa', 'socio', 'Socioemocional', 'Biologia');

create table disciplina (
idDisc int primary key auto_increment not null,
nomeDisc varchar(45));

insert into disciplina values 
(default, 'Português'),
(default, 'BD'),
(default, 'Matemática'),
(default, 'Arq'),
(default, 'Socioemocional'),
(default, 'Algoritmos');

alter table disciplina add column fkProfessor int,
	add constraint fkProfessorDisc foreign key (fkProfessor)
		references professor(idProfessor);
        
update disciplina set fkProfessor = 1
	where idDisc = 2;
    
update disciplina set fkProfessor = 2
	where idDisc = 1;

update disciplina set fkProfessor = 3
	where idDisc = 6;
    
update disciplina set fkProfessor = 4
	where idDisc = 3;
    
update disciplina set fkProfessor = 5
	where idDisc = 4;

update disciplina set fkProfessor = 6
	where idDisc = 5;

alter table disciplina modify column fkProfessor int not null;    
    
select * from professor join disciplina on fkProfessor = idProfessor; 

select d.nomeDisc as NomeDisciplina, p.nome as NomeProfessor from disciplina as d join professor as p on fkProfessor = idProfessor;

select * from professor join disciplina on fkProfessor = idProfessor where sobrenome = 'Silva';

select p.especialidade1, d.nomeDisc from professor as p join disciplina as d on fkProfessor = idProfessor where nome = 'Vivian' order by especialidade1;

-- ex2

create table curso (
idCurso int primary key auto_increment not null,
nome varchar(50),
sigla char(3),
coordenador varchar(50));

insert into curso values
(default, 'Mecânica', 'MEC', 'João Pedro'),
(default, 'Ciência da computação', 'CCO', 'Marise'),
(default, 'Ánalise e desenvolvimento de sistemas', 'ADS', 'Gerson');

create table alunoC(
idAluno int primary key auto_increment not null,
nomeAluno varchar(45),
idade char(2),
email varchar(60),
sexo varchar(10),
fkCurso int not null,
constraint fkCursoAluno foreign key (fkCurso)
references curso (idCurso)
);


insert into alunoC values
(default, 'Samuel', '18', 'samuel@pratica.com', 'homem', '3'),
(default, 'Matheus', '17', 'matheus@pratica.com', 'homem', '2'),
(default, 'Marise', '20', 'marise@pratica.com', 'mulher', '1');

select * from alunoC join curso on idCurso = fkCurso;

select * from alunoC join curso on idCurso = fkCurso where sigla = 'MEC';

alter table curso add column modelo varchar(20),
	add constraint chkModelo check (modelo in('Presencial', 'Ead', 'Hibrído'));


