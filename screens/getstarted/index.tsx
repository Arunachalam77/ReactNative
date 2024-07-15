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
import {getStartedStyles} from './style';
import { useNavigation } from '@react-navigation/native';

// import {useNavigation} from '@react-navigation/native';

const GetStartedScreen = () => {
  //   const navigation: any = useNavigation();
  const navigation:any = useNavigation();

  return (
    <View style={getStartedStyles.overAllScreenSx}>
      
      <View style={{paddingTop: 4}}>
        <Image
          style={{...getStartedStyles.imgSx}}
          source={require('../../assets/overall.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingTop: 40,
          width: '100%',
          maxWidth: 300,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginHorizontal: 40
        }}>
        <Text style={getStartedStyles?.titleSx}>
          Taste the Joy of Delivery
        </Text>
        <Text style={getStartedStyles?.subtitleSx}>
          Unlock a world of culinary delights right at your fingertips
        </Text>
      </View>
      {/* <View style={getStartedStyles?.bottom}> */}
        <TouchableOpacity style={getStartedStyles?.bottom}
          onPress={() =>navigation.navigate('Category') }>
          <Text
            style={{
              ...getStartedStyles.ButtonStyle,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

export default GetStartedScreen;
