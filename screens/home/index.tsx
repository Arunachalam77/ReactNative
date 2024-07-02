/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HomePageStyles} from './style';

const HomePage = ({navigation}: any) => {
  return (
    <View style={HomePageStyles.root}>
      <TouchableOpacity onPress={() => navigation.navigate('Merchant Details')}>
        <View
          style={{
            ...HomePageStyles.ButtonStyle,
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 14,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Merchant Details
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register Page')}>
        <View
          style={{
            ...HomePageStyles.ButtonStyle,
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 14,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Register Page
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
