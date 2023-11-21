import { mysqlConn } from "../base/mysql"

const createFines = async (valor:number,dataDaMulta:Date,pontos:number,tipoDeInfracao:string,placa:string) =>
    await mysqlConn.execute("INSERT INTO Multas (Valor, DataDeVencimento, PontosPenalidade, TipoInfracao,Placaveiculo) VALUES (?, ?, ?, ?, ?)",
    [valor, dataDaMulta, pontos, tipoDeInfracao,placa]) 

export default {createFines}