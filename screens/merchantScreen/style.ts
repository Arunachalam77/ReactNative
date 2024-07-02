/* eslint-disable prettier/prettier */
import { StyleSheet} from 'react-native';

export const merchantStyles = StyleSheet.create({
  overAllScreenSx: {
    flex: 1,
    backgroundColor: '#dedede',
  },

  storeIcon: {
    width: 14,
    height: 14,
  },

  storeIconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },

  title: {
    fontSize: 14,
    color: '#02111A',
    fontWeight: '600',
    marginLeft: 6,
  },

  subText: {
    fontSize: 14,
    color: '#9da1a1',
    fontWeight: '500',
  },
  // Chip style

  overAllchipDetails: {
    borderTopWidth: 1,
    borderTopColor: '#f4f4f4',
    paddingTop: 20,
    paddingBottom: 8,

    // marginTop: 4,
  },

  chipIcon: {
    width: 20,
    height: 20,
  },

  carousel: {
    gap: 10,
  },

  chip: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderColor: 'lightgray',
  },

  chipText: {
    fontSize: 14,
    fontWeight: '600',
  },

  ButtonStyle: {
    backgroundColor: '#ea741b',
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF',
    borderRadius: 8,
    marginHorizontal: 16,
    textAlign: 'center',
    paddingVertical: 16,
    marginBottom: 20,
  },

  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
  countSx:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#e8a775e3',
    padding: 4,
    borderRadius: 8,
  },
  amountSx:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 12,
  },
  nodataSx:{
    color:'#02111A',fontSize:18,fontWeight:'600',textAlign:'center',paddingVertical:50
  },
  titleselect:{
    color: '#02111A',
    paddingHorizontal: 20,
    paddingTop: 18,
    fontSize: 16,
    fontWeight: '600',
  },secondContentSx:{
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 12,
    flex: 1,
  }
});
