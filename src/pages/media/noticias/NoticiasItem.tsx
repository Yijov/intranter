import { View, Text, Image, TouchableOpacity , Linking } from 'react-native'
import React from 'react'
import INoticia from './../../../models/Noticia';



const NoticiasItem:React.FC<{noticia:INoticia}> = ({noticia}) => {
 
        const onPress = async () => {
          const url = noticia.url;
          await Linking.canOpenURL(url);
          Linking.openURL(url);
        };
  
    return (
    <View style={{display:"flex", alignItems:"center", marginTop:10, padding:16}}>
      <Text style={{fontSize:20 , textAlign:"justify"}}>{noticia.titular}</Text>
      <Image   source={{uri:noticia.fotoUri}} accessibilityLabel="foto" style={{width:300, height:300, backgroundColor:"red"}} />
      <Text style={{fontSize:16, textAlign:"justify", width:300}}>{noticia.contenido}</Text>
     
      <Text onPress={onPress} style={{fontSize:12, marginTop:5 }}>Seguir leyendo...</Text>
     
    </View>
  )
}

export default NoticiasItem