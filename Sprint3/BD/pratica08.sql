create database Venda;
use Venda;


create table cliente (
	idCliente int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    cep char(9),
    numero varchar(6),
    complemento varchar(45),
    fkIndicador int,
    constraint fkClienteIndicador foreign key (fkIndicador)
    references cliente (idCliente));
    
create table venda (
	idVenda int primary key auto_increment,
    total decimal(5,2),
    dataVenda date,
	fkCliente int,
    constraint fkClienteVenda foreign key (fkCliente)
    references cliente (idCliente));
    
create table produto (
	idProduto int primary key auto_increment,
    nome varchar(45),
    descricao varchar(45),
    preco decimal(5,2));
    
create table vendaProdutos (
	fkVenda int,
    fkProduto int,
    constraint fkProdutosVenda foreign key (fkProduto)
    references produto (idProduto),
    constraint fkVendasProdutos foreign key (fkVenda)
    references venda (idVenda),
    constraint pkvendaProdutos primary key (fkVenda, fkProduto),
    desconto decimal(5,2),
    quantidade int);
    

insert into cliente  values
(default, 'João Kevin', 'joao@sptech.school', '12345678', '123', 'Ap 101', null),
(default, 'Maria', 'maria@sptech.school', '87654321', '46', 'Ap 202', 1),
(default, 'Pedro', 'pedro@email.com', '98765432', '789', 'Casa', 1);


insert into venda values
(default, 100.50, '2024-05-01', 1),
(default, 50.63, '2024-05-02', 1),
(default, 275.99, '2024-05-03', 2),
(default, 42.75, '2024-05-04', 2),
(default, 99.99, '2024-05-05', 3),
(default, 20.40, '2024-05-06', 3);

insert into produto values
(default, 'Brinco', 'Brinco ponto de luz de diamante', 125.50),
(default, 'Chaveiro', 'Chaveiro opala', 20.00),
(default, 'Tênis', 'Tênis Nike SB Preto e Branco', 45.25);

insert into vendaProdutos values
(1, 1, 25, 1),
(1, 3, 25, 1),
(1, 2, 25, 1),
(2, 2, 9.27, 3),
(3, 1, 0, 2),
(4, 3, 2.5, 1),
(5, 3, 0, 2),
(6, 2, 0, 1);

select * from venda join cliente on idCliente = fkCliente;

select * from venda 
join cliente on idCliente = fkCliente where cliente.nome = 'João Kevin';

select cliente.*, indicador.* from cliente 
left join cliente as indicador on cliente.fkIndicador = indicador.idCliente;

select cliente.*, indicador.* from cliente
left join cliente as indicador on cliente.fkIndicador = indicador.idCliente where indicador.nome = 'João Kevin';

select cliente.*, indicador.*, venda.*, produto.* from cliente 
left join cliente as indicador on cliente.fkIndicador = indicador.idCliente
join venda on venda.fkCliente = cliente.idCliente
join vendaProdutos on venda.idVenda = vendaProdutos.fkVenda
join produto on produto.idProduto = vendaProdutos.fkProduto;

select venda.dataVenda, produto.nome, vendaProdutos.quantidade from vendaProdutos
join venda on venda.idVenda = vendaProdutos.fkVenda
join produto on produto.idProduto = vendaProdutos.fkProduto
where venda.idVenda = 2;

select produto.nome, produto.preco, SUM(vendaProdutos.quantidade) as somaProdutos
from produto 
join vendaProdutos ON produto.idProduto = vendaProdutos.fkProduto
group by produto.nome, produto.preco;

insert into cliente values
(default, 'Francisco', 'francisco@sptech.school', '111451111', '44', 'Casa', '2');

select cliente.*, venda.* from cliente left join venda on venda.fkCliente = cliente.idCliente;

select min(preco) as ValorMinimo, max(preco) as ValorMaximo from produto;

select sum(preco) as SomaProdutos, avg(preco) as MediaProdutos from produto;

select preco from produto where preco > (select avg(preco) from produto);

select sum(distinct(preco)) from produto;

select sum(preco) from produto
join vendaProdutos on vendaProdutos.fkProduto = ven;

select venda.idVenda, SUM(produto.preco) as somaPrecos
from venda join vendaProdutos on venda.idVenda = vendaProdutos.fkVenda
join produto on vendaProdutos.fkProduto = produto.idProduto
where venda.idVenda = 1
group by venda.idVenda;