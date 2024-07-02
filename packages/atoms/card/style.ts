/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const CardStyles = StyleSheet.create({
  overAllScreenSx: {
    backgroundColor: '#ffffff',
    
  },
  TotalcardSx: {
    flex: 0,
    flexDirection: 'row',
    alignItems:'center'
  },
  rightSideContent: {
    flex: 0,
    marginLeft:12
  },
  leftSideContent: {
    flex: 0,
  },
  titleSx: {
    fontSize: 18,
    fontWeight: '600',
    color:'#02111A',
  },
  SubTitleSx: {
    fontSize: 12,
    fontWeight: '400',
    color:'#9da1a1'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  button: {
    width: 16,
    height: 16,
    alignItems: 'center',
    lineHeight: 20,
    backgroundColor: '#ea741b',
    borderRadius: 50,
  },

  disabledButton: {
    backgroundColor: '#A9A9A9',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -4,
  },

  valueText: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 3,
    color: '#02111A',
  },
  priceSx:{
    fontSize: 16,
    color: '#f3c066',
    fontWeight: '800',
  }
});
