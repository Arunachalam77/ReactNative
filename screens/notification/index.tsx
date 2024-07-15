/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {notification} from './style';

// import {useNavigation} from '@react-navigation/native';

const CategoryScreen = () => {
  //   const navigation: any = useNavigation();

  return (
    <View style={notification.overAllScreenSx}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // marginHorizontal: 40,
          marginVertical: 18,
        }}>
        <View>
          <Image
            style={notification.profilePic}
            source={require('../../assets/user.png')}
          />
        </View>
        <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
          <Image
            style={notification.locationSx}
            source={require('../../assets/locationRed.png')}
          />
          <Text style={{...notification.textSx}}>canada</Text>
        </View>

        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 50,
            }}>
            <Image
              source={require('../../assets/sort.png')}
              style={notification.sortIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryScreen;
