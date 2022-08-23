import React from 'react';
import { NativeSyntheticEvent, SafeAreaView, StyleSheet, TextInput, TextInputChangeEventData } from 'react-native';
import Imulta from '../../../models/Multa';

const CrearMulta = () =>   {
  const [multa, setMulta] = React.useState<Imulta>(defaultMulta);

  const onInputChange=(e: NativeSyntheticEvent<TextInputChangeEventData>)=>{
  }


  return (
    <SafeAreaView>
      <TextInput 
      style={styles.input} 
      onChange={onInputChange}
      value={multa.cedulaInfractor}
      placeholder="Cedula del infractor"
      keyboardType="numeric"/>
      
      <TextInput 
      style={styles.input} 
      onChange={onInputChange}
      value={multa.nombreInfractor + multa.apellidoInfractor}
      placeholder="Nombre del infractor"
      editable={false}
      />
      <TextInput style={styles.input}
      onChange={onInputChange}
      value={multa.placaVehiculo} 
      placeholder="Placa del vehiculo" 
      keyboardType="numeric" />

     <TextInput style={styles.input}
      onChange={onInputChange}
      value={multa.motivo} 
      placeholder="Motivo(s) de infracción" />

     <TextInput style={styles.input}
      onChange={onInputChange}
      value={multa.monto.toString()} 
      placeholder="Monto" 
      keyboardType="numeric" />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const defaultMulta:Imulta={
  id:0,
  codigo:"",
  nombreInfractor:"", 
  apellidoInfractor:"", 
  cedulaInfractor:"", 
  placaVehiculo:"", 
  monto:0,
  fotoevidencia:"",
  tipoDeLicencia:"",
  motivo:"", 
  latitud:"",
  longitud:"",
  timestamp:""
}
export default CrearMulta;