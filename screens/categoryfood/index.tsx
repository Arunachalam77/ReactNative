/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {useRef, useState} from 'react';
import {
  DrawerLayoutAndroid,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {getStartedStyles} from './style';
import {
  drawerOption,
  popularFood,
  SelectCarosle,
  SelectCarosleTwo,
} from '../../utils/contants';

import {useNavigation} from '@react-navigation/native';
import InputField from '../../packages/atoms/inputField';
const CategoryScreen = () => {
  const navigation: any = useNavigation();
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const [search, setSearch] = useState('');
  const [onselect, setOnselect] = useState({
    id: SelectCarosle[1]?.id,
    title: SelectCarosle[1]?.title,
    icon: SelectCarosle[1]?.icon,
  });
  const handleChange = (e: any) => {
    setSearch(e);
  };

  const Carousel = ({text, icon, active, onPress}: any) => (
    <TouchableOpacity
      style={[
        getStartedStyles.chip,
        {
          backgroundColor: active ? '#ea741b' : '#FFF',
          // borderWidth: active ? 0 : 1,
        },
      ]}
      onPress={onPress}>
      {icon && (
        <Image
          source={icon}
          style={getStartedStyles.chipIcon}
          resizeMode="contain"
        />
      )}
      <Text
        style={{
          ...getStartedStyles.chipText,
          color: active ? '#fff' : '#767676',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  const navigationView = () => (
    <View style={getStartedStyles.drawerRoot}>
      <View style={getStartedStyles.closeIconBox}>
        <Text />
        <TouchableWithoutFeedback
          style={getStartedStyles.drawerCloseicon}
          onPress={() => drawer?.current?.closeDrawer()}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/close.png')}
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={{padding: 12, marginVertical: 12}}>
        <FlatList
          data={drawerOption}
          keyExtractor={(item: any) => item?.id}
          renderItem={({item}: any) => (
            <TouchableOpacity
              style={getStartedStyles.drawerBox}
              onPress={() => handleDrawernavigate(item.route)}>
              <View style={getStartedStyles.drawerIcon}>
                <Image
                  source={item?.icon}
                  style={getStartedStyles.drawerIconsStyle}
                />
              </View>
              <Text style={getStartedStyles.drawerText}>{item?.name}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
  const handleDrawernavigate = (item: any) => {
    navigation.navigate(item);
  };
  return (
    <View style={getStartedStyles.overAllScreenSx}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={'left'}
        renderNavigationView={navigationView}>
        <View style={{paddingHorizontal:16}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginHorizontal: 40,
              marginVertical: 18,
            }}>
            <View>
              <Image
                style={getStartedStyles.profilePic}
                source={require('../../assets/user.png')}
              />
            </View>
            <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
              <Image
                style={getStartedStyles.locationSx}
                source={require('../../assets/locationRed.png')}
              />
              <Text style={{...getStartedStyles.textSx}}>canada</Text>
            </View>

            <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 12,
                  borderRadius: 50,
                }}>
                <Image
                  source={require('../../assets/sort.png')}
                  style={getStartedStyles.sortIcon}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{}}>
            <Text style={getStartedStyles?.titleSx}>
              Ready to order your favourite food?
            </Text>
            <View style={getStartedStyles.inputField}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image
                  source={require('../../assets/search.png')}
                  style={getStartedStyles.Searchicon}
                />
                <InputField
                  value={search}
                  onChangeText={(e: any) => handleChange(e)}
                  placeholder="Search"
                  keyboardType="default"
                  editable={true}
                  inputMode="text"
                  style={getStartedStyles.inputFieldStyles}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#ea741b',
                  padding: 8,
                  borderRadius: 50,
                  marginRight: -8,
                }}>
                <Image
                  source={require('../../assets/sortb.png')}
                  style={{...getStartedStyles.sortIcon}}
                />
              </View>
            </View>
          </View>

          <View style={{paddingBottom: 14}}>
            <FlatList
              data={SelectCarosleTwo}
              horizontal
              keyExtractor={(item: any) => item?.id}
              renderItem={({item}: any) => (
                <Carousel
                  text={item?.title}
                  icon={item?.icon}
                  active={item?.id === onselect?.id}
                  onPress={() =>
                    setOnselect({
                      id: item?.id,
                      title: item?.title,
                      icon: item?.icon,
                    })
                  }
                />
              )}
              contentContainerStyle={getStartedStyles.carousel}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // marginHorizontal: 40,
              }}>
              <Text style={getStartedStyles?.titSx}>Popular Food</Text>
              <Text
                style={{
                  ...getStartedStyles?.titSx,
                  fontSize: 14,
                  color: 'grey',
                }}>
                see all
              </Text>
            </View>

            <FlatList
              data={popularFood}
              horizontal
              keyExtractor={(item: any) => item?.id}
              renderItem={({item}: any) => (
                <View style={{marginRight: 23}}>
                  <View
                    style={{
                      width: '100%',
                      maxWidth: 210,
                      backgroundColor: '#ffffff',
                      borderRadius: 26,
                      padding: 12,
                    }}>
                    <Image
                      style={{
                        width: '100%',
                        height: 174,
                        marginVertical: 'auto',
                      }}
                      source={item?.image}
                    />
                    <View style={{marginHorizontal: 12}}>
                      <Text
                        style={{fontSize: 18, fontWeight: 500, color: '#000'}}
                        numberOfLines={1}>
                        {item?.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 8,
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../assets/starOrange.png')}
                          style={{width: 12, height: 12, marginTop: 8}}
                        />
                        <Image
                          source={require('../../assets/starOrange.png')}
                          style={{width: 12, height: 12, marginTop: 8}}
                        />
                        <Image
                          source={require('../../assets/starOrange.png')}
                          style={{width: 12, height: 12, marginTop: 8}}
                        />
                        <Image
                          source={require('../../assets/starOrange.png')}
                          style={{width: 12, height: 12, marginTop: 8}}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 8,
                          alignItems: 'center',
                          paddingTop: 8,
                        }}>
                        <Text
                          style={{fontSize: 14, fontWeight: 400, color: 'grey'}}
                          numberOfLines={1}>
                          {item?.distance}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: 400,
                            color: 'grey',
                            marginRight: 3,
                          }}
                          numberOfLines={1}>
                          {item?.delivery}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </DrawerLayoutAndroid>
    </View>
  );
};

export default CategoryScreen;
