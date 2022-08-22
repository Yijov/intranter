
import { StyleSheet } from "react-native";

const Climastyles = StyleSheet.create({
    root: {
      flex: 1,
    },
    image: {
      flex: 1,
      flexDirection: 'column',
    },
  
    textInput: {
      borderBottomWidth: 3,
      padding: 5,
      paddingVertical: 20,
      marginVertical: 100,
      marginHorizontal: 10,
      backgroundColor: '#fff',
      fontSize: 19,
      fontWeight: '300',
      borderRadius: 16,
      borderBottomColor: '#df8e00',
    },
  
    cityCountryText: {
      color: '#fff',
      fontSize: 40,
      fontWeight: 'bold',
    },
  
    infoView: {
      alignItems: 'center',
    },
  
    dateText: {
      color: '#fff',
      fontSize: 22,
      marginVertical: 10,
    },
    tempText: {
      fontSize: 45,
      color: '#fff',
      marginVertical: 10,
    },
    minMaxText: {
      fontSize: 22,
      color: '#fff',
      marginVertical: 10,
      fontWeight: '500',
    },
    conditions:{
      fontSize: 22,
      color: '#fff',
      marginVertical: 10,
      fontWeight: '500',
    },
  });
  export default Climastyles