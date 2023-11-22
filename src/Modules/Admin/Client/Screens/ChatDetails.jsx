import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Color} from '../../../../../Constant/Color';
import {useNavigation} from "@react-navigation/native"

const ChatDetails = () => {
  const navigation = useNavigation()
  const [chats, setChats] = useState([
    {
      chatId: 1,
      userId: 1,
      chat: 'Yeah I am fine now and what about you?',
    },
    {
      chatId: 2,
      userId: 2,
      chat: 'I am also good. What is going',
    },
    {
      chatId: 3,
      userId: 1,
      chat: 'Yeah I am fine now ',
    },
    {
      chatId: 4,
      userId: 2,
      chat: 'Yeah I am fine now ',
    },
    {
      chatId: 4,
      userId: 2,
      chat: 'Yeah I am fine now ',
    },
    {
      chatId: 4,
      userId: 2,
      chat: 'Yeah I am fine now ',
    },
  ]);
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View
        style={{
          width: '100%',
          elevation: 3,
          shadowOpacity: 0.2,
          borderBottomEndRadius: 10,
          borderBottomStartRadius: 10,
          backgroundColor: 'white',
          height: 180,
        }}>
        <View
          style={{
            marginTop: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack() }>
            <Image
              source={require('../../../../../assest/images/short_left.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '600',
              fontFamily: 'SF-Pro-Text-Bold',
              color: Color.mianColor,
              marginLeft: -20,
            }}>
            Chat Details
          </Text>
          <Text></Text>
        </View>
        <View style={{width: '100%', paddingHorizontal: 20, marginTop: 15}}>
          <View
            style={{
              width: '100%',
              borderWidth: 2,
              borderRadius: 20,
              height: 80,
              borderColor: 'rgba(0,0,0,0.06)',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 10,
              justifyContent: 'space-around',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{width: 45, height: 45, borderRadius: 30}}
                source={require('../../../../../assest/images/Avatarimage1.png')}
              />
              <Text
                numberOfLines={2}
                style={{
                  width: 100,
                  fontSize: 16,
                  color: Color.mianColor,
                  fontWeight: '400',
                  fontFamily: 'SF-Pro-Text-Regular',
                  opacity: 0.7,
                  marginLeft: 10,
                }}>
                Sonay Menly Walkenn
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{width: 45, height: 45, borderRadius: 30}}
                source={require('../../../../../assest/images/Avatarimage2.png')}
              />
              <Text
                numberOfLines={2}
                style={{
                  width: 100,
                  fontSize: 16,
                  color: Color.mianColor,
                  fontWeight: '400',
                  fontFamily: 'SF-Pro-Text-Regular',
                  opacity: 0.7,
                  marginLeft: 10,
                }}>
                Munly Brown
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={{width: '100%', height: '100%', marginTop: 10}} showsVerticalScrollIndicator={false}>
        <View style={{marginBottom:20}}>
        {chats.map(data => {
          return data.userId == 1 ? (
                <>
                  <View
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.06)',
                      minWidth: 200,
                      maxWidth: 250,
                      minHeight: 30,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      marginHorizontal: 10,
                      marginVertical: 5,
                      borderRadius: 10,
                      borderBottomLeftRadius: 0,
                      alignSelf: 'flex-start',
                    }}>
                    <Text
                      style={{
                        color: Color.mianColor,
                        fontSize: 16,
                        fontFamily: 'SF-Pro-Text-Regular',
                        fontWeight: '400',
                      }}>
                      {data.chat}
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <View
                    style={{
                      backgroundColor: Color.yellow,
                      minWidth: 200,
                      maxWidth: 250,
                      minHeight: 30,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      marginHorizontal: 10,
                      marginVertical: 5,
                      borderRadius: 10,
                      borderBottomRightRadius: 0,
                      alignSelf: 'flex-end',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      position: 'relative',
                    }}>
                    <Text
                      style={{
                        color: Color.mianColor,
                        fontSize: 16,
                        fontFamily: 'SF-Pro-Text-Regular',
                        fontWeight: '400',
                        maxWidth: '90%',
                      }}>
                      {data.chat}
                    </Text>
                    <Image
                      style={{position: 'absolute', bottom: 5, right: 4}}
                      source={require('../../../../../assest/images/quill_checkmark-double.png')}
                    />
                  </View>
                </>
              )
          }
        )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({});
