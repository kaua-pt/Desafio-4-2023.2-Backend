INSERT INTO Motoristas (CPF, Nome, VencimentoCNH, CategoriaCNH)
VALUES
    ('12345678901', 'João Silva', '2023-12-31', 'B'),
    ('98765432101', 'Maria Souza', '2024-08-15', 'AB'),
    ('55555555555', 'Carlos Oliveira', '2023-10-20', 'A');

INSERT INTO Veiculos (Placa, Marca, Modelo, Ano, Cor, CPFmotorista)
VALUES
    ('ABC1234', 'Chevrolet', 'Onix', 2022, 'Azul', '12345678901'),
    ('XYZ5678', 'Ford', 'Ka', 2020, 'Preto', '98765432101'),
    ('DEF9876', 'Volkswagen', 'Gol', 2021, 'Prata', '55555555555');

INSERT INTO Multas (Valor, DataDeVencimento, PontosPenalidade, TipoInfracao, Placaveiculo)
VALUES
    (150.00, '2023-01-15', 3, 'Velocidade Acima', 'ABC1234'),
    (100.00, '2023-02-20', 2, 'Estacionar Proibido', 'XYZ5678'),
    (200.00, '2023-03-10', 5, 'Dirigir Sob Efeito de Álcool', 'DEF9876');
