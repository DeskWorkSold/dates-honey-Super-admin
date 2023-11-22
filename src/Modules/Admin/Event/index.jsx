import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {STYLES} from '../../../../Constant/styles';
import {Color} from '../../../../Constant/Color';
import EventItem from '../../../Components/Event/EventItem';
import EIcon from 'react-native-vector-icons/Entypo';
import Tag from '../../../Components/Event/Tag';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window');

const Events = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={[STYLES.container]} showsVerticalScrollIndicator={false}>
      <View
        style={{
          marginBottom: 10,
          marginTop: 40,
        }}>
        {/* <SearchTab search={search} setSearch={setSearch} /> */}
        <View style={styles.NumberInput}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              height: 55,
              alignItems: 'center',
              // justifyContent: 'center',
              paddingHorizontal: 20,
              backgroundColor: 'rgba(0,0,0,0.06)',
              borderRadius: 10,
            }}>
            <Image
              source={require('../../../../assest/images/akar-icons_search.png')}
              resizeMode="contain"
              style={{
                marginRight: 5,
                color: Color.mianColor,
              }}
            />
            <TextInput
              // value={search}
              placeholder="Search events"
              placeholderTextColor={Color.mianColor}
              // onChangeText={search => searchFilterFunction(search)}
              style={styles.TextInput}
            />
          </View>
        </View>
      </View>
      <View
        style={{marginVertical: 20, paddingHorizontal: 20, marginBottom: 100}}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text
            style={{
              color: Color.mianColor,
              opacity: 1,
              fontWeight: '500',
              fontSize: 22,
              fontFamily: 'SF-Pro-Text-Medium',
            }}>
            New Events
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("ADDED_EVENT")}>
            <Text
              style={{
                color: Color.mianColor,
                opacity: 1,
                fontWeight: '500',
                fontSize: 22,
                fontFamily: 'SF-Pro-Text-Medium',
              }}>
              All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{height: 310}}>
            <EventItem width={width / 1.3} />
            <EventItem width={width / 1.3} />
            <EventItem width={width / 1.3} />
            <EventItem width={width / 1.3} />
            <EventItem width={width / 1.3} />
          </ScrollView>
        </View>
        <View>
          <Text
            style={{
              color: Color.mianColor,
              opacity: 1,
              fontWeight: '500',
              fontSize: 22,
              fontFamily: 'SF-Pro-Text-Medium',
            }}>
            Categories
          </Text>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Tag isSelected text="New Events" />
              <Tag text="Today" />
              <Tag text="1 Hour" />
            </ScrollView>
          </View>
          <Text
            style={{
              color: Color.mianColor,
              opacity: 0.8,
              fontWeight: '400',
              fontSize: 19,
              width: '80%',
              marginTop: 10,
            }}>
            168 events are found matching your categories
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Events;

const styles = StyleSheet.create({
  NumberInput: {
    // flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: 20,
    // paddingHorizontal: 20,
    // height: 45,
    // width: '100%',
    // backgroundColor: COLORS.light,
    // borderRadius: 5,
  },
  TextInput: {
    backgroundColor: 'transparent',
    width: '90%',
    color: Color.mianColor,
    fontSize: 18,
  },
});
