/* eslint-disable prettier/prettier */
import {StatusBar, StyleSheet} from 'react-native';

export const registerStyles = StyleSheet.create({
  overAllScreenSx: {
    flex: 1,
    backgroundColor: '#D6EFE7',
  },

  containerOne: {
    paddingTop: 22,
    paddingBottom: 26,
    textAlign: 'center',
  },

  frameSx: {
    width: 268,
    height: 170,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headSx: {
    fontSize: 14,
    color: '#02111A',
    fontWeight: '600',
    width: '100%',
    maxWidth: 180,
    margin: 'auto',
    textAlign: 'center',
    marginTop: 12,
  },
  loginSubTitleSx: {
    fontSize: 14,
    color: '#4E585E',
    fontWeight: '400',
    textAlign: 'center',
    width:'100%',
    maxWidth:220,
    marginLeft:'auto',
    marginRight:'auto',
    // marginBottom:4
  },
  containerBodySx: {
    backgroundColor: '#FFFFFF',
    // padding: 16,
    flex:2.6,
    height: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  bodySx: {
    flex: 6,
  },
  scrollView: {
    padding: 16,
    flexDirection: 'column',
},

scrollViewContainer: {
    paddingBottom: 100,
},

ButtonStyle: {
    backgroundColor: '#30AF89',
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
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
