/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const mobileInputStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#D9DBDD',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
  
    disableStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 10,
      backgroundColor: '#E6EAEB',
    },
  
    imageBox: {
      width: 23,
      height: 23,
    },
  
    imageStyle: {
      width: 15,
      marginLeft: 8,
    },
  
    image: {
      width: '100%',
      height: '100%',
    },
    countryCodeBox: {
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      borderRightWidth: 1,
      borderColor: '#ccc',
      flexDirection: 'row',
    },
  
    textInput: {
      height: 40,
      flex: 1,
      paddingLeft: 10,
    },
  
    textInputValue: {
      fontSize: 16,
      color: '#02111A',
      fontWeight: '500',
    },
  
    countryCode: {
      width: 30,
      fontSize: 16,
      fontWeight: '500',
      color: '#02111A',
    },
  
    placeholderText: {
      position: 'absolute',
      left: 123,
      top: 5,
      fontSize: 14,
      // marginTop:9,
      color: '#4E585E',
    },
  });