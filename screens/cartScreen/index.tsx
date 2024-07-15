/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {getStartedStyles} from './style';

import {useNavigation} from '@react-navigation/native';

const AddCart = () => {
    const navigation: any = useNavigation();
  const [Countervalue, setCounterValue] = useState(0);

  const onIncrease = () => {
    setCounterValue(prevValue => prevValue + 1);
  };

  const onDecrease = () => {
    setCounterValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
  };

  return (
    <View style={getStartedStyles.overAllScreenSx}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // marginHorizontal: 40,
          alignItems: 'center',
          marginVertical: 18,
        }}>
        <TouchableOpacity onPress={()=>navigation.navigate('Category')} style={{backgroundColor: '#fff', padding: 12, borderRadius: 50}}>
          <Image
            style={{width: 23, height: 23}}
            source={require('../../assets/back.png')}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
          <Text style={{...getStartedStyles.textSx}}>Details</Text>
        </View>

        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 50,
            }}>
            <Image
              source={require('../../assets/heart.png')}
              style={getStartedStyles.sortIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{position: 'absolute', top: 60, left: 100}}>
        <Image
          style={{width: 460, height: 460}}
          source={require('../../assets/foodImg.png')}
        />
      </View>
      <View>
        <View>
          <Text style={getStartedStyles?.titleSx}>Burger Bills</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 8,
            }}>
            <Image
              source={require('../../assets/starOrange.png')}
              style={{width: 12, height: 12, marginRight: 8}}
            />
            <Text>4.8(105 reviews)</Text>
          </View>
        </View>
        <View style={{paddingTop: 18}}>
          <Text style={{color: 'grey', fontSize: 16}}>Price</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text style={{color: '#000', fontSize: 30, fontWeight: '600'}}>
              $ 7.50
            </Text>
          </View>
        </View>
        <View style={{paddingTop: 16}}>
          <Text style={{color: 'grey', fontSize: 18}}>calories</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text style={{color: '#000', fontSize: 18, fontWeight: '600'}}>
              450 cal
            </Text>
          </View>
        </View>
        <View style={{paddingTop: 18}}>
          <Text style={{color: 'grey', fontSize: 16}}>Diameter</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text style={{color: '#000', fontSize: 18, fontWeight: '600'}}>
              15.05 cm
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: 18,
          }}>
          <TouchableOpacity
            style={[
              getStartedStyles.button,
              Countervalue === 0 && getStartedStyles.disabledButton,
            ]}
            onPress={()=>onDecrease()}
            activeOpacity={1}
            disabled={Countervalue === 0}>
            <Text style={getStartedStyles.buttonText}>-</Text>
          </TouchableOpacity>
          <View>
            <Text style={getStartedStyles.valueText}>{Countervalue}</Text>
          </View>
          <TouchableOpacity
            style={getStartedStyles.button}
            onPress={onIncrease}
            activeOpacity={1}>
            <Text style={getStartedStyles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 18}}>
          <Text style={{color: 'grey', fontSize: 16}}>Size</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 8,
            }}>
            <Text style={getStartedStyles.size}>Small</Text>
            <Text
              style={{
                ...getStartedStyles.size,
                color: '#000',
                backgroundColor: '#fff',
              }}>
              Medium
            </Text>
            <Text
              style={{
                ...getStartedStyles.size,
                color: '#000',
                backgroundColor: '#fff',
              }}>
              Large
            </Text>
          </View>
        </View>
        <View style={{paddingTop: 8}}>
          <Text style={{color: 'grey', fontSize: 16}}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters  the readable content of a page when looking at its layout....
          </Text>
        </View>
      </View>
       {/* <View style={getStartedStyles?.bottom}> */}
       <TouchableOpacity style={getStartedStyles?.bottom}
          onPress={() => Alert.alert('Your Food Added To Cart')}>
          <Text
            style={{
              ...getStartedStyles.ButtonStyle,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
        Add to cart
          </Text>
        </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

export default AddCart;
