import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Color} from '../../../../Constant/Color';
import {ScrollView} from 'react-native-gesture-handler';
import {STYLES} from '../../../../Constant/styles';
import Button from '../../../Components/Buttons';

const Profile = () => {
  return (
    <ScrollView style={STYLES.container} showsVerticalScrollIndicator={false}>
      <View
        style={{
          width: '100%',
          height: '100%',
          paddingHorizontal: 20,
          marginTop: 40,
          marginBottom: 100,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
              borderColor: Color.yellow,
              borderWidth: 6,
            }}
            source={require('../../../../assest/images/userProfile.png')}
          />
          <View style={{marginLeft: 20}}>
            <Text
              style={{
                fontSize: 26,
                fontFamily: 'SF-Pro-Text-Bold',
                fontWeight: '700',
                color: Color.mianColor,
              }}>
              John Harry
            </Text>
            <Text
              style={{
                backgroundColor: 'rgba(0,0,0,0.09)',
                paddingHorizontal: 15,
                paddingVertical: 7,
                borderRadius: 10,
                fontSize: 16,
                color: Color.mianColor,
                fontWeight: '400',
                fontFamily: 'SF-Pro-Text-Regular',
                marginTop: 10,
              }}>
              Event Vendor
            </Text>
          </View>
        </View>
        <View style={{width: '100%'}}>
          <Text
            style={{
              borderRadius: 10,
              fontSize: 18,
              color: Color.mianColor,
              fontWeight: '500',
              fontFamily: 'SF-Pro-Text-Medium',
              marginTop: 10,
              marginLeft: 10,
            }}>
            Name
          </Text>
          <View>
            <TextInput
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 3,
                marginVertical: 5,
                paddingHorizontal: 10,
                fontSize: 18,
                color: Color.mianColor,
                fontWeight: '400',
                fontFamily: 'SF-Pro-Text-Regular',
                textAlignVertical: 'top',
                opacity: 0.8,
              }}
              value="John Harry"
              placeholder="Name"
            />
            <TouchableOpacity
              style={{position: 'absolute', top: 20, right: 10}}>
              <Image
                source={require('../../../../assest/images/EditIconBtn.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: '100%'}}>
          <Text
            style={{
              borderRadius: 10,
              fontSize: 18,
              color: Color.mianColor,
              fontWeight: '500',
              fontFamily: 'SF-Pro-Text-Medium',
              marginTop: 10,
              marginLeft: 10,
            }}>
            Email
          </Text>
          <View>
            <TextInput
              value="business@gmail.com"
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 3,
                marginVertical: 5,
                paddingHorizontal: 10,
                fontSize: 18,
                color: Color.mianColor,
                fontWeight: '400',
                fontFamily: 'SF-Pro-Text-Regular',
                textAlignVertical: 'top',
                opacity: 0.8,
              }}
              placeholder="Name"
            />
            <TouchableOpacity
              style={{position: 'absolute', top: 20, right: 10}}>
              <Image
                source={require('../../../../assest/images/EditIconBtn.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: '100%'}}>
          <Text
            style={{
              borderRadius: 10,
              fontSize: 18,
              color: Color.mianColor,
              fontWeight: '500',
              fontFamily: 'SF-Pro-Text-Medium',
              marginTop: 10,
              marginLeft: 10,
            }}>
            Location
          </Text>
          <View>
            <TextInput
              value="business@gmail.com"
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 3,
                marginVertical: 5,
                paddingHorizontal: 10,
                fontSize: 18,
                color: Color.mianColor,
                fontWeight: '400',
                fontFamily: 'SF-Pro-Text-Regular',
                textAlignVertical: 'top',
                opacity: 0.8,
              }}
              placeholder="Name"
            />
            <TouchableOpacity
              style={{position: 'absolute', top: 20, right: 10}}>
              <Image
                source={require('../../../../assest/images/EditIconBtn.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: '100%'}}>
          <Text
            style={{
              borderRadius: 10,
              fontSize: 18,
              color: Color.mianColor,
              fontWeight: '500',
              fontFamily: 'SF-Pro-Text-Medium',
              marginTop: 10,
              marginLeft: 10,
            }}>
            About
          </Text>
          <View>
            <TextInput
              multiline
              numberOfLines={5}
              value="Lorem ipsum dolor sit amet, ConnectEDU advising elite. Rut rum in Masada unique consequent. Tells Eros Ohio Del donec cliquey in. Get caucus get dolor, sit nun. Odio Del donec cliquey in. Get caucus get dolor, sit nun Ohio Del done "
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 3,
                marginVertical: 5,
                paddingHorizontal: 10,
                fontSize: 18,
                color: Color.mianColor,
                fontWeight: '400',
                fontFamily: 'SF-Pro-Text-Regular',
                textAlignVertical: 'top',
                opacity: 0.8,
              }}
              placeholder="Name"
            />
            <TouchableOpacity
              style={{position: 'absolute', top: 20, right: 10}}>
              <Image
                source={require('../../../../assest/images/EditIconBtn.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '45%',
              borderRadius: 10,
              height: 60,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                fontFamily: 'SF-Pro-Text',
                color: Color.mianColor,
              }}>
              Log Out
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '45%',
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: Color.yellow,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                fontFamily: 'SF-Pro-Text',
                color: Color.mianColor,
              }}>
              Change Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
const styles = StyleSheet.create({});
