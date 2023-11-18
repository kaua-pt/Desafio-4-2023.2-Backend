import { type Express } from "express";
import driverRoutes from "./routes/driverRoutes";
import vehicleRoutes from "./routes/vehicleRoutes";
import finesRoutes from "./routes/finesRoutes";

export default function routing(app: Express) {
  app.use("/driver",driverRoutes);
  app.use("/vehicle",vehicleRoutes);
  app.use("/fines",finesRoutes);
}
