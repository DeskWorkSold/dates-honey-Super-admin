import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../../Constant/styles';
import {useNavigation} from '@react-navigation/native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Color} from '../../../../Constant/Color';
import NotificationCard from '../../../Components/Notification';

const {width, height} = Dimensions.get('window');

const Notifications = () => {
  const navigation = useNavigation();
  const [notification, setNotification] = useState([
    {
      id: 1,
      title: 'Lorem Ispum',
      discription: 'Dating users, concierge and three more',
      date: 'July 8,2022',
      ageRange: '22 to 28 years',
      image: require('../../../../assest/images/image.png'),
    },
    {
      id: 2,
      title: 'Lorem Ispum',
      discription: 'Dating users, concierge and three more',
      date: 'July 10,2022',
      ageRange: '18 to 22 years',
      image: require('../../../../assest/images/image2.png'),
    },
    {
      id: 3,
      title: 'Lorem Ispum',
      discription: 'Dating users, concierge and three more',
      date: 'July 7,2022',
      ageRange: '20 to 24 years',
      image: require('../../../../assest/images/image2.png'),
    },
    {
      id: 4,
      title: 'Lorem Ispum',
      discription: 'Dating users, concierge and three more',
      date: 'July 3,2022',
      ageRange: '21 to 26 years',
      image: require('../../../../assest/images/image2.png'),
    },
    {
      id: 5,
      title: 'Lorem Ispum',
      discription: 'Dating users, concierge and three more',
      date: 'July 1,2022',
      ageRange: '19 to 25 years',
      image: require('../../../../assest/images/image2.png'),
    },
  ]);
  return (
    // <ScrollView
    //   style={[
    //     STYLES.container,
    //     {position:"relative"},
    //   ]}
    //   showsVerticalScrollIndicator={false}>
    <View style={{width: '100%', backgroundColor: Color.white, flex: 1}}>
      <View
        style={{
          marginTop: 25,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../../assest/images/short_left.png')} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '600',
            fontFamily: 'SF-Pro-Text-Bold',
            color: Color.mianColor,
            marginLeft: 25,
          }}>
          Notifications
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('NEW_NOTIFICATION')}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
            backgroundColor: '#0FCC88',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontFamily: 'SF-Pro-Text-Regular',
              fontWeight: '400',
            }}>
            Add New
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{height: '100%', width: '100%'}}
        showsVerticalScrollIndicator={false}
        data={notification}
        renderItem={({item}) => <NotificationCard data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
    // </ScrollView>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
