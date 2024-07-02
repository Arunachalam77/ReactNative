/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CardStyles} from './style';

const Card = (props: any) => {
  const {
    source,
    dissource,
    disImageSx,
    ImageSx,
    leftSideContent,
    rightSideContent,
    title = 'Chicken Lalapan Gresik',
    subTitle = '4831 Kildeer Boyunton Beach, Florida 33456',
    quantity =false,
    Countervalue,
    onDecrease=()=>{},
    onIncrease=()=>{},
    DesCriptionTitleSx,
    price,
    overAllscreen,
    titleStyle,
    checkoutStyle,
  } = props;


  return (
    <View style={{...CardStyles.overAllScreenSx,...overAllscreen}}>
      <View style={{...CardStyles.TotalcardSx}}>
        <View style={{...CardStyles.leftSideContent, ...leftSideContent}}>
          <Image style={{...ImageSx}} source={source} />
        </View>
        <View
          style={{
            ...CardStyles.rightSideContent,
            ...rightSideContent,
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{marginRight:12,...checkoutStyle}}>
            <Text style={{...CardStyles.titleSx,...titleStyle}}>{title}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 3,
              }}>
           {dissource &&   <Image style={{...disImageSx}} source={dissource} />}
              <Text
                style={{...CardStyles.SubTitleSx,...DesCriptionTitleSx}}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {subTitle}
              </Text>
            </View>
            {price && <Text
                style={{...CardStyles.priceSx}}
                >
                {price}
              </Text>}
          </View>
          {quantity && (
            <>
              <TouchableOpacity
                style={[
                  CardStyles.button,
                  Countervalue === 0 && CardStyles.disabledButton,
                ]}
                onPress={onIncrease}
                activeOpacity={1}
                disabled={Countervalue === 0}>
                <Text style={CardStyles.buttonText}>-</Text>
              </TouchableOpacity>
              <View>
                <Text style={CardStyles.valueText}>{Countervalue}</Text>
              </View>
              <TouchableOpacity
                style={CardStyles.button}
                onPress={onDecrease}
                activeOpacity={1}>
                <Text style={CardStyles.buttonText}>+</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Card;
