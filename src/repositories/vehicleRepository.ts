import { mysqlConn } from "../base/mysql";

const createVehicle = async (placa:string,marca:string,cor:string,ano:number,modelo:string,cpf:string) =>
    await mysqlConn.execute("INSERT INTO Veiculos (Placa, Marca, Modelo, Ano, Cor,CPF_motorista) VALUES (?, ?, ?, ?, ?, ?)",
    [placa, marca, modelo, ano, cor,cpf]) 


export default {createVehicle}