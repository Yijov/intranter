import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { GENERAL_STYLE } from '../../../constants/generalStyle';
import Imulta from '../../../models/Multa'
import { Ionicons } from '@expo/vector-icons';

interface ImultaListItemProp{
    multa:Imulta, 
    onSelect:(id: number) => Promise<void>

}
const MultaListItem:React.FC<ImultaListItemProp> = ({multa, onSelect}) => {
    const runSelection=()=>{
        onSelect(multa.id)
    }

  return (
    <View style={styles.container}>
    <View style={styles.textContainer}>
        <Text style={styles.motivo}>{multa.motivo}</Text>
        <Text style={styles.timestamp}>{multa.timestamp}</Text>
    </View>    
    
    <TouchableOpacity style={styles.iconContainer} onPress={runSelection}>
        <Ionicons style={styles.info} name='information-circle-outline'/>
    </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        height:"25%", 
        width:"100%", 
        padding:20, 
        backgroundColor:GENERAL_STYLE.mainColor, 
        marginBottom:15
    },
  
    motivo:{
        fontSize:18,
        color:"white"

    },
    timestamp:{
        fontSize:14,
        color:"white"
    },
    info:{
        fontSize:40,
        color:"white",
        marginRight:1,
        
    },
    iconContainer:{
        width:"15%",

    },
    textContainer:{
        height:"95%",
        width:"84%",

    }
  
  });

export default MultaListItem