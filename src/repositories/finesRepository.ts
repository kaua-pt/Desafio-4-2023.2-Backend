import { mysqlConn } from "../base/mysql"
import { finesSchema } from "../schemas/fines.schema";

const createFines = async (valor:number,dataDaMulta:Date,pontos:number,tipoDeInfracao:string) =>
    await mysqlConn.execute("INSERT INTO MULTA (valor, dataDaMulta, pontos, tipoDeInfracao) VALUES (?, ?, ?, ?)",
    [valor, dataDaMulta, pontos, tipoDeInfracao]) 


const readFines = async ()=>{
    const fines = await mysqlConn.execute("SELECT * FROM MULTA");
    return finesSchema.array().parse(fines) ;
}


export default {createFines,readFines}