/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import CategoryScreen from '../../../screens/categoryfood';
import GetStartedScreen from '../../../screens/getstarted';
import AddCart from '../../../screens/cartScreen';

const Tab: any = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      tabBar={(props: any) => {
        const currentRouteName = props?.state?.routeNames[props?.state?.index];

        if (
          currentRouteName === 'GetStarted' ||
          currentRouteName === 'AddCart'
        ) {
          return null; // Hide the tab bar for 'GetStarted' and 'AddCart' screens
        }

        return (
          <View
            style={{
              flexDirection: 'row',
              height: 70,
              bottom: 12,
              marginHorizontal: 12,
              backgroundColor: '#fff',
              borderRadius: 50,
            }}>
            {props?.state?.routes?.map((route: any, index: number) => {
              const {options} = props?.descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;

              const isFocused = props?.state.index === index;

              const onPress = () => {
                const event = props?.navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                });

                if (!isFocused && !event.defaultPrevented) {
                  props?.navigation.navigate(route.name);
                }
              };

              const onLongPress = () => {
                props?.navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              };

              const renderIcon = (label: string) => {
                switch (label) {
                  case 'Category':
                    return isFocused
                      ? require('../../../assets/home.png')
                      : require('../../../assets/home_outline.png');
                  case 'GetStarted':
                    return isFocused
                      ? require('../../../assets/heart_filled.png')
                      : require('../../../assets/heart_unfilled.png');
                  case 'AddCart':
                    return isFocused
                      ? require('../../../assets/cartfilled.png')
                      : require('../../../assets/cart.png');
                  default:
                    return null;
                }
              };

              return (
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityState={isFocused ? {selected: true} : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  key={route.key}>
                  <View style={isFocused ? styles.focused : styles.unfocused}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={renderIcon(label)}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }}>
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="GetStarted"
        component={GetStartedScreen}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="AddCart"
        component={AddCart}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
