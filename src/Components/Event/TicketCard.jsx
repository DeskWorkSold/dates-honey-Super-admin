import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Color} from '../../../Constant/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const TicketCard = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 170,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        marginVertical: 5,
        padding: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'SF-Pro-Text-Regular',
            fontWeight: '400',
            color: Color.mianColor,
          }}>
          Early Bird general admissions
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            color: '#0FCC88',
            fontSize: 20,
            fontWeight: '600',
            fontFamily: 'SF-Pro-Text-Semibold',
          }}>
          $100
        </Text>
        <Text
          style={{
            color: 'rgba(28, 28, 28, 0.60)',
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'SF-Pro-Text-Semibold',
            textDecorationLine: 'line-through',
            marginLeft: 7,
          }}>
          $120
        </Text>
      </View>
      <View style={{}}>
        <Text
          style={{
            color: 'rgba(28, 28, 28, 0.60)',
            fontSize: 13,
            fontWeight: '500',
            fontFamily: 'SF-Pro-Text-Semibold',
          }}>
          Sales end on Oct 9, 2022
        </Text>
        <Text
          style={{
            color: 'rgba(28, 28, 28, 0.60)',
            fontSize: 13,
            fontWeight: '500',
            fontFamily: 'SF-Pro-Text-Semibold',
          }}>
          Access to enter the between 5:00AM–8:45AM.{' '}
        </Text>
      </View>
      <View style={{marginTop: 5, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="man" color="#E94057" size={18} />
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'SF-Pro-Text-Regular',
              fontWeight: '400',
              color: '#E94057',
            }}>
            {' '}
            2Left
          </Text>
        </View>
        <View
          style={{
            height: 5,
            width: 5,
            borderRadius: 10,
            backgroundColor: Color.yellow,
            marginLeft: 10,
          }}
        />
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <Text style={{color: Color.mianColor,
            fontSize: 13,
            fontWeight: '500',
            fontFamily: 'SF-Pro-Text-Semibold',}}>Time Left:</Text>
          <Text style={{color: Color.mianColor,
            fontSize: 13,
            fontWeight: '700',
            fontFamily: 'SF-Pro-Text-Bold',}}>{' '}01:12:03</Text>
        </View>
      </View>
    </View>
  );
};

export default TicketCard;

const styles = StyleSheet.create({});
