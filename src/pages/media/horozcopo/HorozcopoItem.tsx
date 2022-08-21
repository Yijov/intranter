import { View, Text } from 'react-native'
import React from 'react'
import { IHorozcopoItem } from '../../../models/Horozcopo'

const HorozcopoItem :React.FC<IHorozcopoItem>= ({consejo,signo}) => {
  return (
    <View>
      <Text>{signo} : {consejo}</Text>
    </View>
  )
}

export default HorozcopoItem