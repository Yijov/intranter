import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IHorozcopo } from '../../models/Horozcopo'
import HorozcopoItem from './HorozcopoItem'
import ApIConnection from '../../connections/api/apo'
const Horozcopos = () => {
  const [horozcopo, setHorozcopo] = useState<IHorozcopo|null>(null)

  const cargarHorozcopo= async ()=>{
     let response=await ApIConnection.getHorozcopo()
     setHorozcopo(response);
  }

  useEffect(() => {
    cargarHorozcopo()
  }, [])
  

  return (
    <View>
      {horozcopo? 
      horozcopo.items
      .map(({consejo,signo})=><HorozcopoItem consejo={consejo} signo={signo} key={signo} /> )
      : <Text>No hay Resultados</Text>}
    </View>
  )
}

export default Horozcopos