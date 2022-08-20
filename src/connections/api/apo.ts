
import axios from "axios"
import API_RESOURCES from "../../constants/apiResources"
import {IHorozcopo} from "../../models/Horozcopo"
import IConductor from "../../models/Conductor"
import Imulta from "../../models/Multa"
import IVehiculo from "../../models/Vehiculo"
import IUser from "../../models/User"
import INoticia from "../../models/Noticia"
import fakedb from "../fake_db/fakedb.json"


export default class ApIConnection{
   private static apiResources=API_RESOURCES
   private static connector= axios

   static getHorozcopo= async ():Promise<IHorozcopo>=>{
    return fakedb.horozcopos;
   }
   static getConductores= async ():Promise<IConductor[]>=>{
    return  fakedb.conductores;
   }
   static getMultas= async ():Promise<Imulta[]>=>{
    return fakedb.multas;
   }
   static getVehiculos= async ():Promise<IVehiculo[]>=>{
    return fakedb.vehiculos;
   }
   static getUsuarios= async ():Promise<IUser[]>=>{
    return fakedb.usuarios
   }
   static getClima= async ():Promise<IHorozcopo>=>{
    let response= await axios.get<IHorozcopo>(this.apiResources.HOROZCOPO)
    return response.data;
   }
   static getNoticias= async ():Promise<INoticia[]>=>{
    return fakedb.noticias
   }
   
}