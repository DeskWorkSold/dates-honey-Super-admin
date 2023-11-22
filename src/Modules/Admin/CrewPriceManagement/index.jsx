import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {STYLES} from '../../../../Constant/styles';
import {Color} from '../../../../Constant/Color';
import {useNavigation} from '@react-navigation/native';

const CrewManagePricing = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={STYLES.container} showsVerticalScrollIndicator={false}>
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
            marginLeft: -10,
          }}>
          Manage Crew Pricing
        </Text>
        <Text></Text>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 30}}>
        <TouchableOpacity
        onPress={()=>navigation.navigate("INFUENCER")}
          style={{
            width: '100%',
            height: 50,
            borderRadius: 10,
            backgroundColor: 'white',
            elevation: 3,
            shadowOpacity: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical:5
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'SF-Pro-Text-Regular',
              fontWeight: '400',
              color:Color.mianColor
            }}>
            Talent agency/Influencer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate("ON_BOARDING")}
          style={{
            width: '100%',
            height: 50,
            borderRadius: 10,
            backgroundColor: 'white',
            elevation: 3,
            shadowOpacity: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical:5
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'SF-Pro-Text-Regular',
              fontWeight: '400',
              color:Color.mianColor
            }}>
            In-house Talent Agency onboarding 
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CrewManagePricing;

const styles = StyleSheet.create({});
