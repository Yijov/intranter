import React, {useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import ApIConnection from '../../connections/api/apo'
import SearchInput from '../../components/search_input/SearchInput'
import IVehiculo from '../../models/Vehiculo'
import VehiculoProfile from './VehiculoProfile'

const Vehiculos = () => {
  const [valorDeBusca, setvalorDeBusca] = useState("")
  const [Found, setFound] = useState<IVehiculo|undefined>(undefined)
  const [ErrorMessage, setErrorMessage] = useState("")

  const onInputSearch=async ()=>{
    
    let response= (await ApIConnection.getVehiculos()).find(c=> c.placa===valorDeBusca)
    if(!response){
      setErrorMessage("SIN RESULTADOS")
      setFound(undefined)
      return
    }
    setFound(response)
    setErrorMessage("")
  }
  return (
    <View style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
      <SearchInput 
      pleaceholder='Número de placa'
      searchQuery={valorDeBusca} 
      onSearch={onInputSearch} 
      setSearchQuery={setvalorDeBusca} />
      <Text style={{marginTop:20, color:"red", fontSize:18}}>{ErrorMessage}</Text>
      {Found && <VehiculoProfile vehiculo={Found}/>} 
    </View>
  )
}



export default Vehiculos;