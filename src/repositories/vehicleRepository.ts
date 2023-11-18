import { mysqlConn } from "../base/mysql"
import { vehicleSchema } from "../schemas/vehicle.schema";

const createVehicle = async (placa:string,marca:string,cor:string,ano:number,modelo:string) =>
    await mysqlConn.execute("INSERT INTO VEICULO (placa, marca, modelo, ano, cor) VALUES (?, ?, ?, ?, ?)",
    [placa, marca, modelo, ano, cor]) 


const readVehicles = async ()=>{
    const drivers = await mysqlConn.execute("SELECT * FROM VEICULO");
    return vehicleSchema.array().parse(drivers) ;
}


export default {createVehicle,readVehicles}