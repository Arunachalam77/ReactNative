/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import { inputStyles } from './style';

const InputField = (props: any) => {
  const {
    value,
    multiline,
    placeholder,
    onChange,
    keyboardType,
    numberOfLines,
    maxLength,
    editable,
    inputMode,
    style,
    error,
    isError,
    placeholderTextColor='#4E585E',
    ...rest
  } = props;

  return (
    <View>
      <TextInput
        value={value}
        multiline={multiline}
        keyboardType={keyboardType}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        style={{...inputStyles.input,...style, paddingTop:value?.length>0 ? 28: 10}}
        editable={editable}
        inputMode={inputMode}
         placeholder={value !== '' ? '' : placeholder}
        onChangeText={onChange}
        placeholderTextColor={placeholderTextColor}
        {...rest}
      />
      {isError && <Text style={inputStyles.errorText} >{error}</Text>}
      {value !== '' && (
        <Text style={[value && inputStyles.placeholderText]}>
          {placeholder}
        </Text>
      )}
    </View>
  );
};

export default InputField;
