import React, {useState} from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { IClimaApiResponse } from './../../models/Clima';

import climaStyles from './climaStyles'

const ClimaInfoDisplay:React.FC<{data: IClimaApiResponse}>= ({data}) => {
    
  return (
        <View style={climaStyles.infoView}>
          <Text style={climaStyles.cityCountryText}>{`${data.name}, ${data.sys.country}`}</Text>

          <Text style={climaStyles.dateText}>{new Date().toLocaleString()}</Text>

          <Text style={climaStyles.tempText}>{`${Math.round(data.main.temp,)} °C`}</Text>

          <Text style={climaStyles.minMaxText}>
            {`Min ${Math.round(data.main.temp_min,)} °C / Max ${Math.round(data?.main?.temp_max)} °C`}
          </Text>
          <Text style={climaStyles.conditions}>{data.weather[0].description}</Text>
        
        </View>
      
  )
}

export default ClimaInfoDisplay