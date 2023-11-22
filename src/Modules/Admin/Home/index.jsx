import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {STYLES} from '../../../../Constant/styles';
import {Color} from '../../../../Constant/Color';
import {useNavigation} from "@react-navigation/native"

const Home = () => {
  const [Id, setId] = useState(1);
  const navigation = useNavigation()
  const [MainItems, setMianItem] = useState([
    {
      id: 1,
      text: 'Staff',
      isSelected: true,
      route:"STAFF"
    },
    {
      id: 2,
      text: 'Client',
      isSelected: false,
      route:"CLIENT"
    },
    {
      id: 3,
      text: 'Event',
      isSelected: false,
      route:"EVENT"
    },
    {
      id: 4,
      text: 'Withdraw Request',
      isSelected: false,
      route:"WITHDRAW_REQUEST"
    },
    {
      id: 5,
      text: 'Clients Pricing',
      isSelected: false,
      route:"CLIENT_PRICE_MANAGEMENT"
    },
    {
      id: 6,
      text: 'Crew Pricing',
      isSelected: false,
      route:"CREW_PRICE_MANAGEMENT"
    },
    {
      id: 7,
      text: 'Notifications',
      isSelected: false,
      route:"NOTIFICATION"
    },
    {
      id: 8,
      text: 'Posts',
      isSelected: false,
      route:"POSTS"
    },
    {
      id: 9,
      text: 'Article',
      isSelected: false,
      route:"ARTICLE"
    },
    {
      id: 10,
      text: 'Notes',
      isSelected: false,
      route:"NOTES"
    },
  ]);
  return (
    <ScrollView style={STYLES.container} showsVerticalScrollIndicator={false}>
      <View style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Text></Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
              fontFamily: 'SF-Pro-Text-Bold',
              color: Color.mianColor,
              alignSelf: 'center',
            }}>
            Admin
          </Text>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("NOTIFICATION")
          }}>
          <Image
            style={{justifyContent: 'flex-end'}}
            source={require('../../../../assest/images/NotificationIcon.png')}
          />
          </TouchableOpacity>
        </View>
        <View style={{marginTop:50,marginBottom:100}}>
        {MainItems.map(({text, id, isSelected,route}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setId(id);
                  route&&navigation.navigate(route)
                }}
                key={id}
                style={{
                  width: '100%',
                  height: 60,
                  borderRadius: 10,
                  borderColor: Color.yellow,
                  borderWidth: id == Id ? 2 : 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: id != Id ? 4 : 0,
                  // shadowColor: 'rgba(0, 0, 0, 0.9)',
                  // shadowOffset: {width: 0, height: 2.42353},
                  // shadowRadius: 10.09804,
                  marginVertical: 10,
                  backgroundColor:"white"
                }}>
                <Text
                  style={{
                    color: Color.mianColor,
                    fontSize: 18,
                    fontFamily: 'SF-Pro-Text-Regular',
                    fontWeight: '400',
                  }}>
                  Manage {text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
