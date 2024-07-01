/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const inputStyles = StyleSheet.create({
  input: {
    // margin: 10,
    borderWidth: 1,
    height: 62,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: '#D9DBDD',
    backgroundColor: '#FFF',
    fontSize: 16,
    color: '#02111A',
    fontWeight: '600',
   
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 2,
    marginBottom: 1,
    marginLeft: 2,
  },
  placeholderText: {
    position: 'absolute',
    left: 24,
    top: 10,
    fontSize: 14,
    color: '#4E585E',
    transform:'translate(-9px)'
  },
});
