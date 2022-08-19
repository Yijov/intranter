import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "@expo/vector-icons/Ionicons"
import NAVIGATION_ROUTES from "../../constants/routes";
import MapaMultas from './multas_mapa/MapaMultas';
import CrearMulta from './multas_aplicar/CrearMulta';
import MultasConsulta from './multas_consultar/MultasConsulta';


const Tab = createBottomTabNavigator();
const Multas = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            if (route.name === NAVIGATION_ROUTES.MULTAS_CREAR) {
                return <Icon name={"create"} size={size} color={color} />
            } else if (route.name === NAVIGATION_ROUTES.MULTAS_CONSULTAR) {
                return <Icon name={"search"} size={size} color={color} />
            }else{
                return <Icon name={"map"} size={size} color={color} />
            }
           ;
          },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={NAVIGATION_ROUTES.MULTAS_CONSULTAR} component={MultasConsulta}  />
      <Tab.Screen name={NAVIGATION_ROUTES.MULTAS_CREAR} component={CrearMulta} />
      <Tab.Screen name={NAVIGATION_ROUTES.MULTAS_MAPA} component={MapaMultas} />
    </Tab.Navigator>
  )
}

export default Multas