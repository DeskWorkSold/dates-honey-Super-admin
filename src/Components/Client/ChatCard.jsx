import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Color} from '../../../Constant/Color';
import Button from '../Buttons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const ChatCard = () => {
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
        <Image
          source={require('../../../assest/images/Avatarimage2.png')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderColor: Color.yellow,
            borderWidth: 3,
            marginLeft: -20,
            zIndex: -1,
          }}
        />
      </View>
      <View>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{
            color: Color.mianColor,
            fontWeight: '400',
            fontFamily: 'SF-Pro-Text-Regular',
            fontSize: 18,
            width: 150,
          }}>
          Sony & munly brown
        </Text>
      </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate("CHAT_DETAILS")}
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
          View Chat
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({});
