import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../../Constant/Color';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CouponCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../../../assest/images/coupon.png')} />
        <Text
          style={{
            color: Color.mianColor,
            fontSize: 20,
            fontWeight: '400',
            fontFamily: 'SF-Pro-Text-Regular',
            marginLeft: 10,
          }}>
          New Coupon
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: Color.mianColor,
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 10,
        }}>
        <Text style={{color: Color.white, fontSize: 16}}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CouponCard;

const styles = StyleSheet.create({});
