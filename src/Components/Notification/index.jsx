import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Color} from '../../../Constant/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native"

const NotificationCard = ({data}) => {
  let navigation = useNavigation()
  let {title,discription,date,ageRange,image,id} = data
  console.log(data)
  return (
    <View
      style={{
        width: '100%',
        height: 140,
        backgroundColor: 'white',
        elevation: 5,
        marginVertical: 10,
        flexDirection: 'row',
        // alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        zIndex:-1
      }}>
      <Image
        style={{height: 110, width: '30%', borderRadius: 10}}
        source={image}
      />
      <View style={{width: '65%', marginLeft: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'SF-Pro-Text-Medium',
              fontWeight: '500',
              color: Color.mianColor,
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'SF-Pro-Text-Medium',
              fontWeight: '400',
              color: '#2A3182',
            }}>
            {date}
          </Text>
        </View>
        <View style={{width: '70%'}}>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 16,
              fontFamily: 'SF-Pro-Text-Regular',
              fontWeight: '400',
              color: Color.mianColor,
              opacity: 0.7,
            }}>
            {discription}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 2,
          }}>
          <Text
          numberOfLines={1}
            style={{
              fontSize: 15,
              fontFamily: 'SF-Pro-Text-Regular',
              fontWeight: '400',
              color: Color.mianColor,
              opacity: 0.7,
              width:"50%"
            }}>
           {ageRange}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate("EDIT_NOTIFICATION",{title,discription,date,ageRange,image,id})} >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'SF-Pro-Text-Regular',
                  fontWeight: '400',
                  color: '#0FCC88',
                  opacity: 0.7,
                }}>
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 8,
                paddingVertical: 5,
                backgroundColor: Color.yellow,
                borderRadius: 10,
                marginLeft: 8,
              }}>
              <Text
                style={{
                  color: Color.white,
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                }}>
                Resend
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({});
