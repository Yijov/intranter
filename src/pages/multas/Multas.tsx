import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "@expo/vector-icons/Ionicons"
import NAVIGATION_ROUTES from "../../constants/routes";
import MapaMultas from './multas_mapa/MapaMultas';
import CrearMulta from './multas_aplicar/CrearMulta';
import MultasConsulta from './multas_consultar/MultasConsulta';
import { ParamListBase, RouteProp } from '@react-navigation/native';


const Tab = createBottomTabNavigator();


const Multas = () => {

  const iconConfig = (route:RouteProp<ParamListBase, string>, color:string, size:number)=>{
            if (route.name === NAVIGATION_ROUTES.MULTAS_CREAR) {
                return <Icon name={"create"} size={size} color={color} />
            } else if (route.name === NAVIGATION_ROUTES.MULTAS_CONSULTAR) {
                return <Icon name={"search"} size={size} color={color} />
            }else{
                return <Icon name={"map"} size={size} color={color} />
            }
        }

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => iconConfig(route, color, size),
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign:"center"
      })}>
      <Tab.Screen name={NAVIGATION_ROUTES.MULTAS_CONSULTAR} component={MultasConsulta}  />
      <Tab.Screen name={NAVIGATION_ROUTES.MULTAS_CREAR} component={CrearMulta} />
      <Tab.Screen name={NAVIGATION_ROUTES.MULTAS_MAPA} component={MapaMultas} />
    </Tab.Navigator>
  )
}

export default Multas;