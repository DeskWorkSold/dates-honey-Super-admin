import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {Color} from '../../../Constant/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Select = ({label}) => {
  return (
    <View >
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'SF-Pro-Text-Regular',
          fontWeight: '400',
          color: Color.mianColor,
          zIndex:-1
        }}>
        Select {label}
      </Text>
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: 'rgba(0,0,0,0.05)',
          borderRadius: 10,
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 7,
          zIndex:-1
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'SF-Pro-Text-Regular',
            fontWeight: '400',
            color: Color.mianColor,
          }}>
          Select
        </Text>
        <Pressable onPress={() => console.log(label)}>
          <Image source={require('../../../assest/images/dropIcon.png')} />
        </Pressable>
      </View>
      <View style={{position: 'relative'}}>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: 100,
            backgroundColor: 'white',
            zIndex: 2,
          }}></View>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({});
