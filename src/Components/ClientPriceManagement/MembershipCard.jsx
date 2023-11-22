import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../../Constant/Color';

const MembershipCard = ({discountedRate, limits, rate}) => {
  return (
    <View style={{marginVertical: 10, position: 'relative', marginTop: 40,marginRight:20}}>
      <View
        style={{
          width: 150,
          height: 160,
          borderRadius: 24,
          borderColor: Color.yellow,
          borderWidth: 2,
          backgroundColor: Color.white,
          elevation: 3,
          shadowOpacity: 0.7,
          marginVertical: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              color: 'rgba(28, 28, 28, 0.60)',
              fontFamily: 'SF-Pro-Text-Medium',
              textDecorationLine: 'line-through',
              fontWeight: '500',
              fontSize: 14,
              // marginBottom:-10
            }}>
            {rate}
          </Text>
        </View>
        <Text
          style={{
            color: Color.mianColor,
            fontFamily: 'SF-Pro-Text-Medium',
            fontWeight: '500',
            fontSize: 24,
            marginTop: -10,
          }}>
          {discountedRate}
        </Text>
        <Text
          style={{
            color: 'rgba(28, 28, 28, 0.40)',
            fontSize: 18,
            fontFamily: 'SF-Pro-Text-Regular',
            fontWeight: '400',
            marginTop: -10,
          }}>
          {limits}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Color.mianColor,
          borderRadius: 15,
          paddingVertical: 5,
          paddingHorizontal: 18,
          position: 'absolute',
          left: 28,
          top: -23,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'SF-Pro-Text-Regular',
            color: Color.white,
          }}>
          On Sale
        </Text>
      </View>
    </View>
  );
};

export default MembershipCard;

const styles = StyleSheet.create({});
