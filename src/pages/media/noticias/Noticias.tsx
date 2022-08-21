import { View, Text, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import INoticia from '../../../models/Noticia'
import ApIConnection from '../../../connections/api/apo'
import NoticiasItem from './NoticiasItem'

const Noticias = () => {

  const [moticias, setNoticias] = useState<INoticia[]|null>(null)

  const cargarNoticias= async ()=>{
    let response=await ApIConnection.getNoticias();
    setNoticias(response);
 }

 useEffect(() => {
  cargarNoticias()
 }, [])

  return (
    <ScrollView>
      {moticias?.map(not=> <NoticiasItem noticia={not} key={not.id} />)}
    </ScrollView>
  )
}

export default Noticias