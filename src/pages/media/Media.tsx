import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "@expo/vector-icons/Ionicons"
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import NAVIGATION_ROUTES from "../../constants/routes";
import Noticias from './noticias/Noticias';
import Horozcopos from './horozcopo/Horozcopos';
import { ParamListBase, RouteProp } from '@react-navigation/native';


const Tab = createBottomTabNavigator();


const Media = () => {

  const iconConfig = (route:RouteProp<ParamListBase, string>, color:string, size:number)=>{
            if (route.name === NAVIGATION_ROUTES.NOTICIAS) {
                return <Icon name={"newspaper"} size={size} color={color} />
            } else{
                return <MaterialCommunityIcons name="zodiac-virgo" size={size} color="black" />
            }
        }

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => iconConfig(route, color, size),
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={NAVIGATION_ROUTES.NOTICIAS} component={Noticias}  />
      <Tab.Screen name={NAVIGATION_ROUTES.HOROZCOPOS} component={Horozcopos} />
    </Tab.Navigator>
  )
}

export default Media;