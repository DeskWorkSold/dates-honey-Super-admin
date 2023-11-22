import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Color} from '../../../Constant/Color';
import Button from '../Buttons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const WithdrawRequsetCard = ({isCompleted=false}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        marginVertical: 10,
        height: 100,
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.08,
        shadowRadius: 0.08,
        elevation: 0.8,
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../../assest/images/Avatarimage1.png')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderColor: Color.yellow,
            borderWidth: 3,
          }}
        />
      </View>
      <View>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            color: Color.mianColor,
            fontWeight: '500',
            fontFamily: 'SF-Pro-Text-medium',
            fontSize: 18,
            width: 150,
            textTransform:"capitalize"
          }}>
          munly brown
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            color: Color.mianColor,
            fontWeight: '400',
            fontFamily: 'SF-Pro-Text-Regular',
            fontSize: 16,
            width: 150,
            marginTop:-4
          }}>
          2023-11-17
        </Text>
        <View style={{flexDirection:"row",alignItems:"center",marginTop:-8}}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            color: Color.mianColor,
            fontWeight: '500',
            fontFamily: 'SF-Pro-Text-Medium',
            fontSize: 16,
          }}>
          300$
        </Text>
       {
        isCompleted?<Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          color: "#0FCC88",
          fontWeight: '500',
          fontFamily: 'SF-Pro-Text-Medium',
          fontSize: 16,
          marginLeft:5
        }}>
        Completed
      </Text>: <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          color: "#F66A6A",
          fontWeight: '500',
          fontFamily: 'SF-Pro-Text-Medium',
          fontSize: 16,
          marginLeft:5
        }}>
        Pending
      </Text>
       }
        </View>
      </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate("WITHDRAW_DETAILS",{isCompleted:isCompleted})}
        style={{
          backgroundColor: Color.yellow,
          paddingHorizontal: 15,
          paddingVertical: 6,
          borderRadius: 8,
        }}>
        <Text
          style={{
            color: Color.mianColor,
            fontSize: 14,
            fontWeight: '400',
            fontFamily: 'SF-Pro-Text-Regular',
          }}>
          View Detials
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WithdrawRequsetCard;

const styles = StyleSheet.create({});
