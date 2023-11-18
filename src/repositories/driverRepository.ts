import { mysqlConn } from "../base/mysql"
import { driverSchema, type Driver } from "../schemas/driver.schema"

const createDriver = async (cpf:string,nome:string,cnh:Date,cat:string,pontos:number) =>
    await mysqlConn.execute("INSERT INTO MOTORISTA (cpf, nome, vencimentoDaCnh, categoriaDaCnh,pontos) VALUES (?, ?, ?, ?, ?)",
    [cpf,nome,cnh,cat,pontos]) 


const readDrivers = async ()=>{
    const drivers = await mysqlConn.execute("SELECT * FROM MOTORISTA");
    return driverSchema.array().parse(drivers) ;
}

const readThreePointsDrivers = async ()=>{
    const drivers = await mysqlConn.execute("SELECT * FROM MOTORISTA WHERE pontos >= 10");
    return driverSchema.array().parse(drivers) ;
}

export default {createDriver,readDrivers,readThreePointsDrivers}