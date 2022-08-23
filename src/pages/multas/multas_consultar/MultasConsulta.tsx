import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView } from 'react-native'
import ApIConnection from '../../../connections/api/apo'
import Imulta from '../../../models/Multa'
import MultaDisplayItem from './MultaDisplayItem'
import MultaListItem from './MultaListItem'


  const MultasConsulta = () => {
    const [listadoMultas, setListadoMultas] = useState<Imulta[]|undefined>(undefined)
    const [selected, seSelected] = useState<Imulta|undefined>(undefined)

  
    const onSelectMulta=async(id:number)=>{
      let multa=(await ApIConnection.getMultas()).find(m=>m.id==id)
      seSelected(multa)
    }

    const LoadMultas=async()=>{
      let response= (await ApIConnection.getMultas())
      setListadoMultas(response)
    }

    const onMultaDisplayClose=()=>{
      seSelected(undefined)
    }

    useEffect(() => {
      LoadMultas();
    }, [])
    
    return (
      <View>
      {selected ? 
      <MultaDisplayItem multa={selected} onClose={onMultaDisplayClose}/>
      :listadoMultas?.map(multa=> <MultaListItem key={multa.id} multa={multa} onSelect={onSelectMulta}/> )
      } 
    </View>
    )
  }

export default MultasConsulta;
