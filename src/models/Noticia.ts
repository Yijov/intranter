import { ImageSourcePropType } from "react-native";

export default interface INoticia{
    id: number;
    titular: string;
    contenido: string;
    url:string,
    fotoUri: string;
    autor: string;
    timeStamp: string;

}