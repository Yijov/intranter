import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ITarifa } from '../../models/Tarifario';
import { DataTable } from 'react-native-paper';



const TarifarioItem:React.FC<{tarifa:ITarifa}> = ({tarifa}) => {
  return (
    <DataTable.Row >
    <View><Text style={styles.cell}>{tarifa.infraccion}</Text></View>
    <View><Text style={styles.cell}> {tarifa.ley}</Text></View>
    <View><Text style={styles.cell}> {tarifa.monto}</Text></View>
  </DataTable.Row>
  )
}

export default TarifarioItem;

const styles = StyleSheet.create({
    cell:{
        display:"flex",
        paddingLeft:5,
        textAlignVertical:"center",
        flexDirection:"column", 
        flexWrap:"wrap",
        height:102, 
        width:112,
    },
})