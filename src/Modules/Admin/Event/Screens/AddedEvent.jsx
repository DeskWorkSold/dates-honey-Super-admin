import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {STYLES} from '../../../../../Constant/styles';
import EventItem from '../../../../Components/Event/EventItem';
import { ScrollView } from 'react-native-gesture-handler';
import { Color } from '../../../../../Constant/Color';

const AddedEvent = () => {
  return (
    <ScrollView style={STYLES.container} showsVerticalScrollIndicator={false}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '700',
          fontFamily: 'SF-Pro-Text-Bold',
          color: Color.mianColor,
          alignSelf: 'center',
          marginTop:30
        }}>
        Added Events
      </Text>
      <View style={{paddingHorizontal:20,marginTop:20,marginBottom:100}}>
        <View>
        <EventItem width={"100%"} isDetail />
        <EventItem width={"100%"} isDetail />
        <EventItem width={"100%"} isDetail />
        <EventItem width={"100%"} isDetail />
        <EventItem width={"100%"} isDetail />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddedEvent;

const styles = StyleSheet.create({});
