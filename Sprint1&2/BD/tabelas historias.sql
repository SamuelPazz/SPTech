create table endereco(
idEndereco int primary key auto_increment,
CEP varchar(8),
rua varchar(80),
numero int(5),
bairro varchar(50),
complemento varchar(80) default('nao tem'),
país varchar(60),
estado varchar(40),
cidade varchar(80));


insert into endereco values
	(default, '02815000', 'rua haddock lobo', '550', 'paulista', default, 'Brasil', 'SP', 'São Paulo');
    
select * from endereco;



