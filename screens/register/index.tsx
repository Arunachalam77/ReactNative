/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {registerStyles} from './style';
import InputField from '../../packages/atoms/inputField';
import MobileInput from '../../packages/atoms/mobileInput';

const countryCodes = [
  {code: '+91', image: require('../../assets/indiaFlag.png')},
  {code: '+44', image: require('../../assets/canadaFlag.png')},
  {code: '+44', image: require('../../assets/canadaFlag.png')},
];
const RegisterScreen = () => {


  const [Profile, setProfile] = useState({
    name: '',
    email: '',
    address: '',
    countryCode: countryCodes[2]?.code,
    mobileNumber: '67890 89765',
    error: {
      name: '',
      email: '',
      address: '',
    },
  });

  const [sucess, setSuccess] = useState(false);

  const isIamValideToSign = () => {
    let isValid = true;
    let errors = {
      name: '',
      email: '',
      address: '',
    };

    if (!Profile.name) {
      errors.name = 'Enter a name';
      isValid = false;
    }

    if (!Profile.email) {
      errors.email = 'Enter a email';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(Profile.email)) {
      errors.email = 'Enter valid email';
      isValid = false;
    }

    if (!Profile.address) {
      errors.address = 'Enter a address';
      isValid = false;
    }

    setProfile({
      ...Profile,
      error: errors,
    });
    return isValid;
  };

  const handleChange = (key: string, value: any) => {
    setProfile({
      ...Profile,
      [key]: value,
    });
  };

  const onClearProfile = () => {
    setProfile({
        name: '',
        email: '',
        address: '',
        countryCode: countryCodes[2]?.code,
        mobileNumber: '67890 89765',
        error: {
            name: '',
            email: '',
            address: '',
        }
    });

};

  const onRegister = () => {
    if (isIamValideToSign()) {
      Alert.alert('Profile Register');
      setSuccess(true);
      onClearProfile()
    } else {
      Alert.alert('Profile Not Register');
    }
  };

  return (
    <View style={registerStyles.overAllScreenSx}>
      {!sucess ? (
        <>
          <View style={registerStyles.containerOne}>
            <Image
              style={registerStyles.frameSx}
              source={require('../../assets/registerFrame.png')}
            />
            <Text style={registerStyles.headSx}>
              {' '}
              Earn loyalty for every purchase{' '}
            </Text>
          </View>

          <View style={registerStyles.containerBodySx}>
            <View style={registerStyles.bodySx}>
              <Text
                style={{
                  ...registerStyles.loginSubTitleSx,
                  fontWeight: '600',
                  color: '#02111A',
                  paddingTop:24,
                }}>
                {' '}
                Profile Details{' '}
              </Text>
              <Text
                style={{
                  ...registerStyles.loginSubTitleSx,
                  paddingTop: 12,
                  paddingBottom: 4,
                }}>
                {' '}
                Please provide your basic details to proceed further{' '}
              </Text>
              <ScrollView
                style={registerStyles.scrollView}
                contentContainerStyle={registerStyles.scrollViewContainer}>
                <View style={{flex: 1, gap: 16}}>
                  <InputField
                    value={Profile.name}
                    onChange={(e: any) => handleChange('name', e)}
                    placeholder="Name"
                    keyboardType="default"ss
                    editable={true}
                    inputMode="text"
                    error={Profile?.error?.name}
                    isError={Profile?.error?.name?.length ? true : false}
                  />
                  <MobileInput
                    countryCodes={countryCodes}
                    countryCodeState={Profile.countryCode}
                    mobileNumberState={Profile.mobileNumber}
                    onChange={(e: any) => handleChange('mobileNumber', e)}
                    editable={false}
                    value={Profile.mobileNumber}
                  />
                  <InputField
                    value={Profile.email}
                    onChange={(e: any) => handleChange('email', e)}
                    placeholder="Email"
                    keyboardType="email-address"
                    editable={true}
                    inputMode="text"
                    isError={Profile?.error?.email?.length ? true : false}
                    error={Profile?.error?.email}
                  />
                  <InputField
                    value={Profile.address}
                    onChange={(e: any) => handleChange('address', e)}
                    keyboardType="default"
                    placeholder="Address"
                    editable={true}
                    isError={Profile?.error?.address?.length ? true : false}
                    error={Profile?.error?.address}
                    inputMode="text"
                    multiline={true}
                    style={{
                      height: 120,
                      minHeight: 50,
                      textAlignVertical: 'top',
                    }}
                    numberOfLines={5}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
          <TouchableOpacity style={registerStyles.bottom} onPress={onRegister}>
            <Text style={registerStyles.ButtonStyle}>Register</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 650,
              width: 230,
              margin: 'auto',
            }}>
            <Text
              style={{
                fontWeight: '600',
                color: '#02111A',
                fontSize: 18,
                textAlign: 'center',
              }}>
              Customer details registered successfully !!!!
            </Text>
            <TouchableOpacity  onPress={()=>setSuccess(false)}>
            <Text >Back</Text>
          </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default RegisterScreen;
