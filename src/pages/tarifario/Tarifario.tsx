import React, { useEffect, useState } from 'react'
import {StyleSheet,  Text, ScrollView, Dimensions } from 'react-native';
import { DataTable } from 'react-native-paper';
import ApIConnection from '../../connections/api/apo';
import TarifarioItem from './TarifarioItem';
import { ITarifa } from '../../models/Tarifario';


export default function Tarifario() {
  const [Tarifas, setTarifas] = useState<ITarifa[]|null>(null)
  const cargarTarifas= async ()=>{
    let response=await ApIConnection.getTarifas()
    setTarifas(response);
 }

 useEffect(() => {
  cargarTarifas()
 }, [])

  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems:"center"}} >
      <Text>TARIFARIO DE MULTAS DIGISET</Text>
      <DataTable style={styles.teble}  collapsable>
        <DataTable.Header>
          <DataTable.Title>INFRACCIONES</DataTable.Title>
          <DataTable.Title >LEY</DataTable.Title>
          <DataTable.Title>TARIFAS</DataTable.Title>
        </DataTable.Header>

        {Tarifas?.map(tarifa=><TarifarioItem tarifa={tarifa} />)}

      </DataTable>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    display:"flex",
    paddingTop: 30,
    alignContent:"center"
  },
  teble:{
    paddingBottom:50,
    width:Dimensions.get('window').width,
  }
});