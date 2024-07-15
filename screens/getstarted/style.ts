/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const getStartedStyles = StyleSheet.create({
  overAllScreenSx: {
    flex: 1,
    // background: 'rgb(255,255,255)'
    backgroundColor: 'linear-gradient(41deg, rgba(255,255,255,1) 35%, rgba(255,159,2,0.2359068627450981) 100%)',
    position: 'relative',
  },
  titleSx: {
    fontSize: 38,
    color: '#02111A',
    fontWeight: '500',
    textAlign: 'center',
  },

  subtitleSx: {
    fontSize: 16,
    paddingTop:18,
    color: '#aaaaaa',
    fontWeight: '600',
    textAlign: 'center',
  },

  ButtonStyle: {
    backgroundColor: '#ea741b',
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF',
    borderRadius: 50,
    textAlign: 'center',
    paddingVertical: 16,
    marginBottom: 18,
    position:'absolute',
    bottom:0,
    width:'100%'
  },
  imgSx: {
    width: '100%',
    maxWidth: 500,
    height: 430,
  },
  bottom:{
    flex:1,
    marginHorizontal:16
  }
});
