create table mercado (
idMercado int primary key auto_increment,
nome varchar (80) not null,
localização varchar (80),
senha varchar (20) not null
);


create table setor (
idSetor int primary key auto_increment,
numeroSetor varchar (5) not null,
tipoSetor varchar(40) not null,
qtdSensor varchar(1) not null,
fluxoHora varchar (50)
);

create table sensor (
idSensor int primary key auto_increment,
dados varchar(50)
);

create table adm (
idAdm int primary key auto_increment,
email varchar (40) not null,
senha varchar (20) not null
);

select fluxoHora from setor where tipoSetor = 'doces';
select * from setor where fluxoHora >= '30';
select * from setor;
select * from adm where idAdm = 1;
select * from sensor where idSensor = 1;
select * from mercado where nome = 'Carrefour express';
select concat(nome, '  ', localização) as market from mercado where idMercado = 1;


insert into setor values
(default, 22, 'doces', 4, '');

insert into adm values
(default, 'samuel.paz@sptech.school', 'sptech');

insert into mercado values
(default, 'Carrefour express', 'Rua bela cintra 1173', 'mercado123');

insert into sensor values
(default, '');


