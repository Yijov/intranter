import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { IHorozcopoItem, HorozcopoIconName } from '../../../../models/Horozcopo'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import useAsignicon from "./useAsignIconName"



const HorozcopoItem :React.FC<IHorozcopoItem>= ({consejo,signo}) => {
  return (
    <View style={{ display:"flex" ,justifyContent:"center", alignItems:"center", marginBottom:60, marginTop:25}}>
      <Text style={{fontSize:30}}>{signo.toUpperCase()}</Text>
      <MaterialCommunityIcons name={useAsignicon(signo)} size={130} color="black" />
      <Text style={{fontSize:16}}>{consejo} </Text>
    </View>
  )
}


export default HorozcopoItem