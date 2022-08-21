import React from 'react'
import { View, Text , TouchableOpacity, ViewStyle} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import HOMES_TYLES from './HomeStyles';
import { RootNavigationParamList } from '../../constants/routes';
import {MAIN_NAVIGATION_ROUTES_AS_CONST} from '../../constants/routes';



type Keys = keyof typeof MAIN_NAVIGATION_ROUTES_AS_CONST;


interface iconProps{
    name: keyof typeof Ionicons.glyphMap,
    route: typeof MAIN_NAVIGATION_ROUTES_AS_CONST[Keys],
}



const HomeIcon:React.FC<iconProps> = ({name, route}) => {
    const navigation = useNavigation<NavigationProp<RootNavigationParamList>>();
  return (
    <TouchableOpacity 
    style={HOMES_TYLES.HOME_ICON_STYLE as ViewStyle} 
    onPress={()=> navigation.navigate(route)}>

        <Ionicons name={name} size={130} color={"#61daf7"} key={route}/>
        <Text>{route.toUpperCase()}</Text>

    </TouchableOpacity>
  )
}

export default HomeIcon;