import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../../Constant/Color';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AdditionalPackageCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={{width:30,height:30}} source={require('../../../assest/images/addtional.png')} />
        <View style={{marginLeft:10}}>
        <Text
          style={{
            color: Color.mianColor,
            fontSize: 16,
            fontWeight: '400',
            fontFamily: 'SF-Pro-Text-Regular',
            marginLeft: 10,
          }}>
          New Coupon
        </Text>
        <Text
        numberOfLines={2}
          style={{
            color: Color.mianColor,
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'SF-Pro-Text-Regular',
            marginLeft: 10,
            marginTop:-8,
            opacity:0.8,
            width:200,
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error illo unde illum. Nisi corrupti 
        </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: Color.yellow,
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 10,
        }}>
        <Text style={{color: Color.mianColor, fontSize: 14}}>Buy 10.00</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdditionalPackageCard;

const styles = StyleSheet.create({});
