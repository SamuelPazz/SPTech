use sprint2;

create table atleta (
idAtleta int primary key auto_increment,
nome varchar(40),
modalidade varchar (40),
qtdMedalha int);

insert into atleta values
	(default, 'Vini', 'Futebol', 40),
    (default, 'Ney', 'Futebol', 40),
    (default, 'Stephen', 'Basquete', 40),
    (default, 'Lebron', 'Basquete', 40),
    (default, 'Max', 'F1', 2),
    (default, 'Hamilton', 'F1', 5);
    
create table pais(
idPais int primary key auto_increment,
nome varchar(30),
capital varchar (40));
    
insert into pais values
	(default, 'Russia', 'Moscovo'),
    (default, 'Brasil', 'Brasília'),
    (default, 'Argentina', 'Bueno Aires'),
    (default, 'Japão', 'Tóquio');
    

 alter table atleta add column fkPais int,
	add constraint fkAtletaPais foreign key (fkPais)
	references pais(idPais);
    
update atleta set fkPais = 1
	where idAtleta in(1,2);

update atleta set fkPais = 2
	where idAtleta in(3,4);
    
update atleta set fkPais = 3
	where idAtleta = 5;
    
update atleta set fkPais = 4
	where idAtleta = 6;

select * from atleta join pais on idPais = fkPais;

select atleta.nome as NomeAtleta, pais.nome as NomePais from atleta join pais on fkPais = idPais;

select * from atleta join pais on fkPais = idPais 
	where capital = 'Moscovo';

create table musica (
idMusica int primary key not null,
titulo varchar(40),
artista varchar(40),
genero varchar(40)
);

insert into musica values
(1, 'Bom te encontrar', 'João Gomes', 'rap'),
(2, 'Super Rich Kids', 'Frank Ocean', 'rap'),
(3, 'Aquelas Coisas', 'João Gomes', 'sertanejo'),
(4, 'Lost', 'Frank Ocean', 'R&B'),
(5, 'Só uma noite', 'Fabio brazza', 'R&B'),
(6, 'Caso indefinido', 'Fabio brazza', 'sertanejo');

create table album (
idAlbum int primary key not null,
nome varchar(40),
tipo varchar(10),
constraint chkTipo check (tipo in ('físico', 'digital')),
dtLancamento date
); 

insert into album values
(1, 'orange', 'digital', '2015-06-07'),
(2, 'apenas', 'digital', '2020-04-28'),
(3, 'lágrimas', 'físico', '2023-12-03'); 

select * from musica;
select * from album;

alter table musica add column fkAlbum int,
	add constraint fkMusicaAlbum foreign key (fkAlbum)
		references album(idAlbum);
        
update musica set fkAlbum = 1 where idMusica in(2,4);
update musica set fkAlbum = 2 where idMusica in (5,6);
update musica set fkAlbum = 3 where idMusica in (1,3);

alter table musica modify column fkAlbum int not null;

select * from musica join album on fkAlbum = idAlbum;

select musica.titulo as TituloMusica, album.nome as NomeAlbum from musica join album on fkAlbum = idAlbum;

select * from musica join album on fkAlbum = idAlbum
	where tipo = 'digital';