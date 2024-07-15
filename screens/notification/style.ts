/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const notification = StyleSheet.create({
  overAllScreenSx: {
    flex: 1,
    paddingHorizontal:16,
    // // background: 'rgb(255,255,255)'
    // backgroundColor: 'linear-gradient(41deg, rgba(255,255,255,1) 35%, rgba(255,159,2,0.2359068627450981) 100%)',
    position: 'relative',
  },
  titleSx: {
    fontSize: 34,
    color: '#02111A',
    fontWeight: '500',
    textAlign: 'left',
  },
  titSx: {
    fontSize: 20,
    color: '#02111A',
    fontWeight: '500',
    textAlign: 'left',
    paddingBottom:12
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
    height: 400,
  },
  bottom:{
    flex:1,
    marginHorizontal:20,
  },
  profilePic:{
    width:44,height:48,
  },
  textSx:{
    fontSize:12
  },
  locationSx:{
    width:12,height:18,
  },
  sortIcon:{
    width:28,height:28
  },

  inputField : {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D9DBDD',
    borderRadius: 50,
    paddingHorizontal: 12,
    marginVertical: 16,
    justifyContent: 'space-between',
  },
  Searchicon: {
    width: 24,
    height: 24,
  },
  inputFieldStyles: {
    height: 60,
    borderColor: 'transparent',
    color: '#090806',
    fontWeight: '400',
  },
  overAllchipDetails: {
    borderTopWidth: 1,
    borderTopColor: '#f4f4f4',
    paddingTop: 20,
    paddingBottom: 8,

    // marginTop: 4,
  },

  chipIcon: {
    width: 32,
    height: 32,
  },

  carousel: {
    gap: 10,
  },

  chip: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 50,
    borderColor: 'lightgray',
  },

  chipText: {
    fontSize: 14,
    fontWeight: '600',
  },

});
