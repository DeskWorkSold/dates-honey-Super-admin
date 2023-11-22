import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import {Color} from '../../../Constant/Color';
import {useNavigation} from '@react-navigation/native';

const EventItem = ({width, isDetail, data, isSelected, SelectedArrow=false, setIsSelected}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        height: 290,
        borderRadius: 10,
        width,
        // backgroundColor: 'red',
        elevation: 2,
        marginVertical: 10,
        marginRight: 20,
      }}>
      <Image
        style={{
          width: '100%',
          height: 200,
          borderRadius: 10,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        source={
          data ? data?.image : require('../../../assest/images/eventItem.png')
        }
      />
      <View
        style={{
          marginHorizontal: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            fontFamily: 'Sf-Pro-Text-Medium',
            color: Color.mianColor,
          }}>
          {data ? data.name : 'Grand Party at salvik'}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            fontFamily: 'Sf-Pro-Text-Bold',
            color: Color.mianColor,
          }}>
          {data?.price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        {data ? (
          <></>
        ) : (
          <>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assest/images/locationIcon.png')}
              />
              <Text
                style={{
                  marginLeft: 5,
                  fontWeight: '400',
                  fontSize: 16,
                  fontFamily: 'SF-Pro-Text-Regular',
                  color: Color.mianColor,
                  opacity: 0.9,
                }}>
                South Karolina, New City
              </Text>
            </View>
          </>
        )}
        {isDetail ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('EVENT_DETAIL')}
            style={{
              backgroundColor: Color.yellow,
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 5,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: Color.mianColor,
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'SF-Pro-Text-Regular',
              }}>
              Details
            </Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
       {
        SelectedArrow?isSelected?<TouchableOpacity onPress={setIsSelected} style={{width:"100%"}}>
          <View
        style={{
          width: '100%',
          paddingVertical: 3,
          borderRadius: 10,
          // borderWidth: 1,
          backgroundColor: "#0FCC88",
          justifyContent:"center",
          alignItems:"center",
          marginTop:10
        }}>
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'SF-Pro-Text-Medium',
            color: Color.white,
          }}>
          Selected
        </Text>
      </View>
        </TouchableOpacity>:<TouchableOpacity onPress={setIsSelected} style={{width:"100%"}}>
        <View
        style={{
          width: '100%',
          paddingVertical: 3,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: Color.mianColor,
          justifyContent:"center",
          alignItems:"center",
          marginTop:10
        }}>
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'SF-Pro-Text-Medium',
            color: Color.mianColor,
          }}>
          UnSelected
        </Text>
      </View>
        </TouchableOpacity>:
      <></>
       }
      </View>
    </TouchableOpacity>
  );
};

export default EventItem;

const styles = StyleSheet.create({});
