import React, {useState, useEffect} from 'react'
import { View,  ImageBackground, ActivityIndicator } from 'react-native'
import * as Location from 'expo-location';
import useClimateData from './useClimateData'
import ClimaInfoDisplay from './ClimaInfoDisplay'
import climaStyles from './climaStyles'


const Clima = () => {

  const data= useClimateData()
  return (
    <View style={climaStyles.root}>
      <ImageBackground 
        style={climaStyles.image} 
        resizeMode='cover' 
        source={require("../../assets/images/clima/dia.jpg")}>

        {data? 
        <ClimaInfoDisplay data={data}/>
        : (<View><ActivityIndicator size={'large'} color={'#fff'} /></View>)}


      </ImageBackground>
      
    </View>
  )
}

export default Clima


