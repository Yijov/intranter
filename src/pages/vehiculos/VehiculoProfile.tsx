import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import IVehiculo from '../../models/Vehiculo'
import { GENERAL_STYLE } from './../../constants/generalStyle';
const VehiculoProfile:React.FC<{vehiculo:IVehiculo}> = ({vehiculo}) => {

    return (
        <View style={styles.container}>
          <Image   source={{uri:vehiculo.foto}} style={{width:300, height:300}} />
          <Text style={styles.name}>{vehiculo.marca.toLocaleUpperCase()} {vehiculo.modelo.toLocaleUpperCase()} </Text>
          <Text style={styles.otherdata}> Año {vehiculo.año}</Text>
          <Text style={styles.otherdata}>Color: {vehiculo.color}</Text>
          <Text style={styles.otherdata}>Propietario:{vehiculo.nombrePropietario} {vehiculo.ApellidoPropietario}</Text>
        </View>
      )

}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        alignItems:"center",
        backgroundColor:GENERAL_STYLE.secundaryColor,
        padding:12,
        height:"82%"
    },
    name:{
    fontSize:25,
    color:"white"

    },
    otherdata:{
        fontSize:16,
        color:"white"
    }
  
  });

export default VehiculoProfile