/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {merchantStyles} from './style';
import Card from '../../packages/atoms/card';
import {
  CheckProductReviews,
  SelectCarosle,
  productsListed,
} from '../../utils/contants';
import TopStatusBar from '../../packages/atoms/TopStatusBar';
import {useNavigation} from '@react-navigation/native';

const MerchantScreen = () => {
  const navigation:any = useNavigation();
  const [productFilter, setProductFilter] = useState(productsListed);
  const [quantity, setQuantity] = useState<any>({});
  const [overAllCount, setOverallCount] = useState(0);
  const [amount, setamount] = useState(0);
  const [onselect, setOnselect] = useState({
    id: SelectCarosle[1]?.id,
    title: SelectCarosle[1]?.title,
    icon: SelectCarosle[1]?.icon,
  });

  const CheckItem = (val: any) => {
    const data = val?.data;

    return (
      <View
        style={{
          borderRightColor: '#e8e8e8',
          paddingRight: 16,
          marginRight: 8,
          borderRightWidth: val?.count !== 2 ? 1 : 0,
        }}>
        <View>
          <View style={merchantStyles.storeIconSection}>
            <Image
              source={data?.icon}
              style={merchantStyles.storeIcon}
              resizeMode="contain"
            />
            <View>
              <Text style={merchantStyles.title}>{data?.rating}</Text>
            </View>
          </View>
          <Text style={merchantStyles.subText}>{data?.description}</Text>
        </View>
      </View>
    );
  };

  const Carousel = ({text, icon, active, onPress}: any) => (
    <TouchableOpacity
      style={[
        merchantStyles.chip,
        {
          backgroundColor: active ? '#ea741b' : '#FFF',
          borderWidth: active ? 0 : 1,
        },
      ]}
      onPress={onPress}>
      <Text
        style={{
          ...merchantStyles.chipText,
          color: active ? '#fff' : '#767676',
        }}>
        {text}
      </Text>
      {icon && (
        <Image
          source={icon}
          style={merchantStyles.chipIcon}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );

  const onProductIncrease = (id: any, amount: any) => {
    setQuantity((prev: any) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    const calculateAmount = parseFloat(amount?.replace('$', ''));
    setamount((prev: any) => prev + calculateAmount);
    setOverallCount((prev: any) => prev + 1);
  };

  const onProductDecrease = (id: any, amount: any) => {
    const calculateAmount = parseFloat(amount.replace('$', ''));

    setQuantity((prev: any) => ({...prev, [id]: prev[id] - 1}));
    setamount((prevCount: any) => Math.max(prevCount - 1, 0));
    setOverallCount((prevAmount: any) =>
      Math.max(prevAmount - calculateAmount, 0),
    );
  };

  const getIntialData = (initialSelect: string) => {
    if (initialSelect === 'All') {
      setProductFilter(productsListed);
    } else {
      const filtered = productsListed?.filter(
        (item: any) => item?.category === initialSelect,
      );
      setProductFilter(filtered);
    }
  };

  const onBackScreen = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    getIntialData(onselect?.title);
  }, [onselect]);

  return (
    <View style={merchantStyles.overAllScreenSx}>
      <TopStatusBar headTitle="Merchant Detail" onBack={onBackScreen} />

      {/*first section*/}
      <View
        style={{
          backgroundColor: '#ffffff',
          padding: 12,
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}>
        <View style={{borderBottomWidth: 1, borderColor: '#f4f4f4'}}>
          <Card
            leftSideContent={{
              backgroundColor: '#ebd4c8',
              height: 54,
              padding: 8,
              borderRadius: 8,
            }}
            overAllscreen={{paddingBottom: 12, paddingHorizontal: 8}}
            ImageSx={{width: 46, height: 38, borderRadius: 8}}
            source={require('../../assets/foodImg.png')}
            dissource={require('../../assets/location.png')}
            disImageSx={{width: 16, height: 16}}
          />
        </View>

        <FlatList
          data={CheckProductReviews}
          renderItem={({item, index}: any) => (
            <CheckItem data={item} count={index} />
          )}
          keyExtractor={(item: any) => item?.id}
          horizontal={true}
          style={{padding: 14}}
          showsHorizontalScrollIndicator={false}
        />

        <View style={merchantStyles.overAllchipDetails}>
          <FlatList
            data={SelectCarosle}
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
            contentContainerStyle={merchantStyles.carousel}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/*second section*/}

      <View
        style={{
          ...merchantStyles.secondContentSx,
        }}>
        <Text style={{...merchantStyles.titleselect}}>
          {onselect?.title || 'title'}
        </Text>

        {productFilter && productFilter?.length > 0 ? (
          <FlatList
            data={productFilter}
            keyExtractor={(item: any) => item?.id}
            style={{padding: 14}}
            showsHorizontalScrollIndicator={true}
            renderItem={({item}: any) => (
              <Card
                overAllscreen={{paddingBottom: 20, paddingHorizontal: 8}}
                ImageSx={{width: 67, height: 62, borderRadius: 8}}
                source={item?.image}
                quantity
                price={item?.amount}
                titleStyle={{fontSize: 16}}
                DesCriptionTitleSx={{width: 180}}
                title={item?.title}
                subTitle={item?.description}
                checkoutStyle={{width: 190}}
                Countervalue={quantity[item?.id] || 0}
                onDecrease={() => onProductIncrease(item?.id, item?.amount)}
                onIncrease={() => onProductDecrease(item?.id, item?.amount)}
              />
            )}
          />
        ) : (
          <Text style={{...merchantStyles.nodataSx}}>No dish Found !!!</Text>
        )}
      </View>

      {/*Third section*/}

      <TouchableOpacity
        style={merchantStyles.bottom}
        onPress={() => Alert.alert('Your Food Added To Cart')}>
        <View
          style={{
            ...merchantStyles.ButtonStyle,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...merchantStyles.amountSx,
              }}>{`$${amount || 0}`}</Text>
            <Text
              style={{
                ...merchantStyles.countSx,
              }}>{`${overAllCount} Food Selected`}</Text>
          </View>
          <TouchableOpacity
            style={{marginHorizontal: 12}}
            onPress={() => Alert.alert('Your Food Added To Cart')}>
            <Image
              source={require('../../assets/right.png')}
              style={{width: 18, height: 18}}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MerchantScreen;
