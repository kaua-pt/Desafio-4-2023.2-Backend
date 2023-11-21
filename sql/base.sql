CREATE DATABASE IF NOT EXISTS base;

USE base;

-- Tabela de Motoristas
CREATE TABLE Motoristas (
    CPF VARCHAR(14) PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    VencimentoCNH DATE NOT NULL,
    CategoriaCNH VARCHAR(2) CHECK (CategoriaCNH IN ('A', 'B', 'AB'))
);

-- Tabela de Veículos
CREATE TABLE Veiculos (
    Placa VARCHAR(8) PRIMARY KEY,
    Marca VARCHAR(50) NOT NULL,
    Modelo VARCHAR(50) NOT NULL,
    Ano INT NOT NULL,
    Cor VARCHAR(20) NOT NULL,
    CPFmotorista VARCHAR(14) REFERENCES Motoristas(CPF)
);

-- Tabela de Multas
CREATE TABLE Multas (
    ID_multa SERIAL PRIMARY KEY,
    Valor DECIMAL(10, 2) NOT NULL,
    DataDeVencimento DATE NOT NULL,
    PontosPenalidade INT NOT NULL,
    TipoInfracao VARCHAR(50) NOT NULL,
    Placaveiculo VARCHAR(8) REFERENCES Veiculos(Placa)
);
