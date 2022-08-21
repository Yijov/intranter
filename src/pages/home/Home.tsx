import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
import HomeIcon from './HomeIcon'
import {MAIN_NAVIGATION_ROUTES_AS_CONST} from '../../constants/routes'
import HOMES_TYLES from './HomeStyles'

const Home = () => {
  return (
    <View style={HOMES_TYLES.CONTAINER as ViewStyle}>
      <HomeIcon name="card" route={MAIN_NAVIGATION_ROUTES_AS_CONST.MULTAS} />
      <HomeIcon name="person" route={MAIN_NAVIGATION_ROUTES_AS_CONST.CONDUCTORES} />
      <HomeIcon name="car-sport" route={MAIN_NAVIGATION_ROUTES_AS_CONST.VEHICULOS} />
      <HomeIcon name="list" route={MAIN_NAVIGATION_ROUTES_AS_CONST.TARIFARIO} />
      <HomeIcon name="cloud" route={MAIN_NAVIGATION_ROUTES_AS_CONST.CLIMA}/>
      <HomeIcon name="newspaper" route={MAIN_NAVIGATION_ROUTES_AS_CONST.MEDIA}/>
    </View>
  )
}

export default Home;