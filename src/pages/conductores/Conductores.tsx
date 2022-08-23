import React, {useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import ApIConnection from '../../connections/api/apo'
import SearchInput from '../../components/search_input/SearchInput'
import IConductor from '../../models/Conductor'
import ConductorProfile from './ConductorProfile'

const Conductores = () => {
  const [valorDeBusca, setvalorDeBusca] = useState("")
  const [Found, setFound] = useState<IConductor|undefined>(undefined)
  const [ErrorMessage, setErrorMessage] = useState("")

  const onInputSearch=async ()=>{
    
    let response= (await ApIConnection.getConductores()).find(c=> c.licenciaId===valorDeBusca)
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
      pleaceholder='Número de licencia'
      searchQuery={valorDeBusca} 
      onSearch={onInputSearch} 
      setSearchQuery={setvalorDeBusca} />
      <Text style={{marginTop:20, color:"red", fontSize:18}}>{ErrorMessage}</Text>
      {Found && <ConductorProfile conductor={Found}/>} 
    </View>
  )
}

export default Conductores;