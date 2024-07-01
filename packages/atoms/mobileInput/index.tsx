/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {mobileInputStyles} from './style';

const MobileInput = (props: any) => {
  const {
    countryCodes,
    countryCodeState,
    mobileNumberState,
    onChange,
    editable = true,
  } = props;

  return (
    <>
      <View
        style={
          editable
            ? mobileInputStyles.inputContainer
            : mobileInputStyles.disableStyle
        }>
        <View style={mobileInputStyles.imageBox}>
          <Image
            source={countryCodes?.[1]?.image}
            style={mobileInputStyles.image}
            resizeMode="contain"
          />
        </View>
        <View style={mobileInputStyles.countryCodeBox}>
          <Text style={mobileInputStyles.countryCode}>{countryCodeState}</Text>
          <View style={mobileInputStyles.imageStyle}>
            <Image
              source={require('../../../assets/downarrow.png')}
              style={mobileInputStyles.image}
              resizeMode="contain"
            />
          </View>
        </View>
        <View>
          <TextInput
            style={[
              mobileInputStyles.textInput,
              mobileInputStyles.textInputValue,
              {
                marginBottom: mobileNumberState?.length > 0 ? -16 : 0,
              },
            ]}
            onChangeText={onChange}
            value={mobileNumberState}
            placeholder={mobileNumberState !== '' ? '' : 'Mobile number'}
            keyboardType="phone-pad"
            editable={editable}
          />
        </View>
        {mobileNumberState !== '' && (
          <Text style={mobileNumberState && mobileInputStyles.placeholderText}>
            Mobile Number
          </Text>
        )}
      </View>
    </>
  );
};

export default MobileInput;
