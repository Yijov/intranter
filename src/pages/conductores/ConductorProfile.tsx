import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import IConductor from '../../models/Conductor';
import { GENERAL_STYLE } from './../../constants/generalStyle';

const ConductorProfile:React.FC<{conductor:IConductor}> = ({conductor}) => {

        return (
            <View style={styles.container}>
              <Image   source={{uri:conductor.foto}} style={{width:300, height:300}} />
              <Text style={styles.name}>{conductor.nombre.toLocaleUpperCase()} {conductor.apellido.toLocaleUpperCase()} </Text>
              <Text style={styles.otherdata}>{conductor.nacimiento}</Text>
              <Text style={styles.otherdata}>{conductor.direccion}</Text>
              <Text style={styles.otherdata}>{conductor.celular}</Text>
              <Text style={styles.otherdata}>Licencia: {conductor.tipoLicencia}</Text>
              <Text style={styles.otherdata}>Estado de licencia: {conductor.estadoLicencia}</Text>
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
export default ConductorProfile