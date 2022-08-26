import React,{useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ApIConnection from '../../../connections/api/apo';
import Imulta from '../../../models/Multa';



export default function MultasMapa() {
  const [listadoMultas, setListadoMultas] = useState<Imulta[]|undefined>(undefined);

  const LoadMultas=async()=>{
    let response= (await ApIConnection.getMultas())
    setListadoMultas(response)
  }

  useEffect(() => {
    LoadMultas();
  }, [])

//"latitud":"18.462495312454095",  "longitud":"-69.93606165916758", 
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map}  
      initialRegion={{
      latitude: 18.46983585825316,  
      longitude: -69.93727801762788,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.042,
    }} >


    {listadoMultas && listadoMultas.map((multa, index) => (
    <Marker key={index} 
    coordinate={{ latitude : Number(multa.latitud), 
                  longitude : Number(multa.longitud)}}
    title={multa.motivo}
    description={multa.timestamp}/>))}


    </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});