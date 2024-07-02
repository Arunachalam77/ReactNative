/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { styles } from './style';

const TopStatusBar = (props: any) => {
  const {headTitle, topBarStyle, titleStyle, onBack} = props;

  return (
    <View style={[styles.topBar, topBarStyle]}>
      <TouchableOpacity
        onPress={onBack}
        activeOpacity={1}
        style={styles.backButton}>
        <Image
          source={require('../../../assets/backIcon.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={[styles.title, titleStyle]}>{headTitle}</Text>
    </View>
  );
};



export default TopStatusBar;