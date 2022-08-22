import React, {useState, useCallback, useEffect} from 'react'
import axios from 'axios';
import * as Location from 'expo-location';
import { IClimaApiResponse } from './../../models/Clima';
const API_KEY= "a05af4361bb12e4c8ed8f4ef22171aa1";

const useClimateData= ():IClimaApiResponse => {
    const [data, setData] = useState<IClimaApiResponse>();

    const fetchDataHandler = useCallback(async() => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        let{latitude, longitude} =location.coords
        const APÏ_ROUTE=getApiRoute(latitude, longitude)
        let response = await axios.get<IClimaApiResponse>(APÏ_ROUTE);
        setData(response.data);
      }, []);
    
    useEffect(() => {
    fetchDataHandler()
    }, [])

    
  return data!!
}


const getApiRoute=(latitude: number, longitude: number)=>{
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

}
export default useClimateData;