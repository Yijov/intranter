import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NAVIGATION_ROUTES from './src/constants/routes';
//pages
import { HomeScreen, HorozcopoScreen, TarifarioScreen, 
         ClimaScreen, ConductoresScreen,
          MultasScreen, NoticiasScreen, VehiculosScreen } from './src/pages';
import { StatusBar } from 'react-native';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NAVIGATION_ROUTES.HOME} component={HomeScreen} />
        <Stack.Screen name={NAVIGATION_ROUTES.MULTAS} component={MultasScreen} />
        <Stack.Screen name={NAVIGATION_ROUTES.VEHICULOS} component={VehiculosScreen} />
        <Stack.Screen name={NAVIGATION_ROUTES.CONDUCTORES} component={ConductoresScreen} />
        <Stack.Screen name={NAVIGATION_ROUTES.HOROZCOPOS} component={HorozcopoScreen} />
        <Stack.Screen name={NAVIGATION_ROUTES.TARIFARIO} component={TarifarioScreen} />
        <Stack.Screen name={NAVIGATION_ROUTES.CLIMA} component={ClimaScreen} />
        <Stack.Screen name={NAVIGATION_ROUTES.NOTICIAS} component={NoticiasScreen} />
      </Stack.Navigator>
      <StatusBar animated={true} backgroundColor="#61dafb" />

    </NavigationContainer>
  );
}

export default App;