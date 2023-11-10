import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../../../Constant/Color';

const Button = ({onPress, text}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 60,
        width: '100%',
        backgroundColor: Color.yellow,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        marginVertical:20,
        marginTop:30
      }}>
      <Text style={{fontSize: 18, fontWeight: '400', color: Color.mianColor,fontFamily:'SF-Pro-Text-Regular'}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
