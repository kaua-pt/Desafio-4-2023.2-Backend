import { mysqlConn } from "../base/mysql"
import { driverSchema } from "../schemas/driver.schema"
import { finesSchema } from "../schemas/fines.schema";
import { vehicleSchema } from "../schemas/vehicle.schema";

const createDriver = async (cpf:string,nome:string,cnh:Date,cat:string) =>
    await mysqlConn.execute("INSERT INTO Motoristas (CPF, Nome, VencimentoCNH, CategoriaCNH) VALUES (?, ?, ?, ?)",
    [cpf,nome,cnh,cat]) 


const readDrivers = async ()=>{
    const drivers = await mysqlConn.execute("select * from Motoristas;");
    console.log("chegando");
    return driverSchema.array().parse(drivers);
}

const readVehicles = async (cpf:string)=>{
    console.log(cpf);
    const vehicles = await mysqlConn.execute(`SELECT m.*, v.*
                                            FROM Motoristas m
                                            JOIN Veiculos v ON m.CPF = ?;`,[cpf]);
    return vehicleSchema.array().parse(vehicles);
}

const readFines = async (cpf:string)=>{
    const fines = await mysqlConn.execute(`SELECT m.*, v.Placa
                                        FROM Motoristas m
                                        JOIN Veiculos v ON m.CPF = ?
                                        JOIN Multas m ON v.Placa = m.Placa_veiculo;`,[cpf]);
    return finesSchema.array().parse(fines);
}

const readThreePointsDrivers = async ()=>{
    const drivers = await mysqlConn.execute(`SELECT m.CPF AS motorista, SUM(M.PontosPenalidade) AS pontos
                                            FROM Motoristas m
                                            JOIN Veiculos v ON m.CPF = v.CPF_motorista
                                            JOIN Multas mu ON v.Placa = mu.Placa_veiculo
                                            GROUP BY m.CPF
                                            HAVING SUM(mu.PontosPenalidade) >= 10;`);
    return driverSchema.array().parse(drivers) ;
}

export default {createDriver,readDrivers,readVehicles,readThreePointsDrivers,readFines}