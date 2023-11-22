import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {STYLES} from '../../../../../Constant/styles';
import {Color} from '../../../../../Constant/Color';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../../Components/Buttons';

const Infulencer = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={STYLES.container} showsVerticalScrollIndicator={false}>
      <View
        style={{
          marginTop: 25,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../../../assest/images/short_left.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '600',
            fontFamily: 'SF-Pro-Text-Bold',
            color: Color.mianColor,
            marginLeft: -10,
          }}>
          Influencers Pricing
        </Text>
        <Text></Text>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 25}}>
        <Text
          style={{
            color: Color.mianColor,
            fontSize: 20,
            fontWeight: '500',
            fontFamily: 'SF-Pro-Text-Medium',
          }}>
          General Pricing
        </Text>
        <View style={{marginVertical: 5}}>
            <Text
              style={{
                fontSize: 18,
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Regualr',
                fontWeight: '400',
              }}>
              Second influencer Subscription Share
            </Text>
            <TextInput
              value="5%"
              style={{
                marginVertical: 5,
                width: '100%',
                height: 50,
                backgroundColor: 'white',
                elevation: 2,
                shadowOpacity: 0.4,
                borderRadius: 8,
                fontSize: 18,
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Regular',
                fontWeight: '400',
                paddingHorizontal: 10,
                textAlignVertical: 'center',
              }}
            />
          </View>
        <View style={{marginVertical: 5}}>
            <Text
              style={{
                fontSize: 18,
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Regualr',
                fontWeight: '400',
              }}>
              End user share
            </Text>
            <TextInput
              value="10%"
              style={{
                marginVertical: 5,
                width: '100%',
                height: 50,
                backgroundColor: 'white',
                elevation: 2,
                shadowOpacity: 0.4,
                borderRadius: 8,
                fontSize: 18,
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Regular',
                fontWeight: '400',
                paddingHorizontal: 10,
                textAlignVertical: 'center',
              }}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{width: 140}}>
              <View
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(0,0,0,0.08)',
                  height: 60,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'SF-Pro-Text-Medium',
                    fontWeight: '500',
                    opacity: 0.8,
                  }}>
                  Cancel
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{width: '60%'}}>
              <Button text="Save Changes" />
            </View>
          </View>
      </View>
    </ScrollView>
  );
};

export default Infulencer;

const styles = StyleSheet.create({});
