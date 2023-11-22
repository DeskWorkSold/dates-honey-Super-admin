import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../../Constant/Color';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Select = ({label, data,selectItem,setSelectItem}) => {
  const [select, setSelect] = useState(false);
  return (
    <View style={{position: 'relative', zIndex: 10}}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'SF-Pro-Text-Regular',
          fontWeight: '400',
          color: Color.mianColor,
          zIndex: -1,
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
          zIndex: -1,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'SF-Pro-Text-Regular',
            fontWeight: '400',
            color: Color.mianColor,
          }}>
          {selectItem?selectItem:"Select"}
        </Text>
        <Pressable onPress={() => setSelect(!select)}>
          {select ? (
            <Image source={require('../../../assest/images/dropIcon.png')} />
          ) : (
            <Image source={require('../../../assest/images/dropIcon.png')} />
          )}
        </Pressable>
      </View>
      <ScrollView
        style={{
          // position: 'absolute',
          width: '100%',
          backgroundColor: 'white',
          zIndex: 1,
          // bottom: -150,
          display: select ? 'flex' : 'none',
          borderRadius: 10,
          // paddingVertical: 10,
          top: 10,
          borderWidth: 2,
          borderColor: 'rgba(0,0,0,0.2)',
          maxHeight: 150,
        }}>
        {data?.map(item => {
          return (
            <TouchableOpacity onPress={() => {
              console.log(item.value,"kk")
              setSelectItem(item.value)
              setSelect(false)
            }}>
              <Text
                style={{
                  textTransform: 'capitalize',
                  color: Color.mianColor,
                  // borderBottomWidth: 1,
                  borderBottomColor: 'rgba(0,0,0,0.2)',
                  fontSize: 16,
                  paddingLeft: 10,
                  fontWeight: '600',
                  fontFamily: 'SF-Pro-Text-Semibold',
                  opacity: 0.8,
                }}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({});
