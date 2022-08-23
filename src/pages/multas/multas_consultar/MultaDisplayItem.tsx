import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Imulta from '../../../models/Multa'
import { GENERAL_STYLE } from '../../../constants/generalStyle';
import { Ionicons } from '@expo/vector-icons';

const MultaDisplayItem:React.FC<{multa:Imulta, onClose:()=> void}> = ({multa, onClose}) => {

    return (
        <View style={styles.container}>
          <Image   source={{uri:multa.fotoevidencia}} style={{width:270, height:270}} />
          <Text style={styles.name}>{multa.nombreInfractor.toLocaleUpperCase()} {multa.apellidoInfractor.toLocaleUpperCase()}</Text>
          <Text style={styles.otherdata}>PLACA: {multa.placaVehiculo}</Text>
          <Text style={styles.otherdata}>FECHA: {multa.timestamp}</Text>
          <Text style={styles.otherdata}>MOTIVO: {multa.motivo}</Text>
          <Text style={styles.otherdata}>MONTO: {multa.monto}</Text>
          <TouchableOpacity style={styles.iconContainer} onPress={onClose}>
            <Ionicons name='close-circle' style={styles.info}/>
          </TouchableOpacity>
        </View>
      )

}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        backgroundColor:GENERAL_STYLE.secundaryColor,
        height:"100%",
        alignItems:"center",
        textAlign:"center",
        paddingTop:25
    },
    info:{
        fontSize:40,
        color:"white",
        marginRight:1,
        
      },
      iconContainer:{
        width:"15%",
      
      },
  
    name:{
    fontSize:20,
    color:"white"

    },
    otherdata:{
        fontSize:16,
        color:"white"
    }
  
  });
export default MultaDisplayItem