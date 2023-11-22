import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../../Constant/styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Color} from '../../../../Constant/Color';
import MembershipCard from '../../../Components/ClientPriceManagement/MembershipCard';
import {useNavigation} from '@react-navigation/native';
import CouponCard from '../../../Components/ClientPriceManagement/CouponCard';
import AdditionalPackageCard from '../../../Components/ClientPriceManagement/AdditionalPackage';

const ClientPriceManagement = () => {
  const navigation = useNavigation();
  const [MemberShips, setMemberShips] = useState([
    {
      basic: [
        {
          rate: '16.00',
          discountedRate: '6.00',
          limits: 'One Month',
        },
        {
          rate: '36.00',
          discountedRate: '18.00',
          limits: 'One Year',
        },
      ],
      gold: [
        {
          rate: '36.00',
          discountedRate: '12.00',
          limits: 'One Month',
        },
        {
          rate: '48.00',
          discountedRate: '32.00',
          limits: 'One Year',
        },
      ],
      diamond: [
        {
          rate: '120.00',
          discountedRate: '60.00',
          limits: 'One Month',
        },
        {
          rate: '200.00',
          discountedRate: '120.00',
          limits: 'One Year',
        },
        {
          rate: '20000.00',
          discountedRate: '12000.00',
          limits: 'Unlimited',
        },
      ],
    },
  ]);
  // console.log(MemberShips[0].basic.memberShip[0])
  return (
    <ScrollView style={STYLES.container} showsVerticalScrollIndicator={false}>
      <View style={{paddingHorizontal: 20, marginVertical: 30}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            fontFamily: 'SF-Pro-Text-Bold',
            color: Color.mianColor,
            alignSelf: 'center',
          }}>
          Manage Clients Pricing
        </Text>
      </View>
      <View style={{paddingHorizontal: 20, marginBottom: 100}}>
        <View style={{marginVertical: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'SF-Pro-Text-Semibold',
                fontWeight: '600',
                color: Color.mianColor,
              }}>
              Cuopon
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('COUPON')}
              style={{
                backgroundColor: Color.yellow,
                borderRadius: 10,
                paddingVertical: 7,
                paddingHorizontal: 19,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'SF-Pro-Text-Regular',
                  color: Color.mianColor,
                }}>
                Add New
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical:20}}>
          <CouponCard/>
          <CouponCard/>
          <CouponCard/>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'SF-Pro-Text-Semibold',
                fontWeight: '600',
                color: Color.mianColor,
              }}>
              Basic Membership
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CREATE_MEMBERSHIP', {
                  name: 'Basic',
                  id: '123',
                })
              }
              style={{
                backgroundColor: Color.yellow,
                borderRadius: 10,
                paddingVertical: 7,
                paddingHorizontal: 19,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'SF-Pro-Text-Regular',
                  color: Color.mianColor,
                }}>
                Add New
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {MemberShips[0].basic?.map(({discountedRate, rate, limits}) => {
              return (
                <MembershipCard
                  discountedRate={discountedRate}
                  rate={rate}
                  limits={limits}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={{marginVertical: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'SF-Pro-Text-Semibold',
                fontWeight: '600',
                color: Color.mianColor,
              }}>
              Gold Membership
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CREATE_MEMBERSHIP', {
                  name: 'Gold',
                  id: '456',
                })
              }
              style={{
                backgroundColor: Color.yellow,
                borderRadius: 10,
                paddingVertical: 7,
                paddingHorizontal: 19,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'SF-Pro-Text-Regular',
                  color: Color.mianColor,
                }}>
                Add New
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {MemberShips[0].gold?.map(({discountedRate, rate, limits}) => {
              return (
                <MembershipCard
                  discountedRate={discountedRate}
                  rate={rate}
                  limits={limits}
                />
              );
            })}
          </ScrollView>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'SF-Pro-Text-Semibold',
                fontWeight: '600',
                color: Color.mianColor,
              }}>
              Diamond & Diamond +
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CREATE_MEMBERSHIP', {
                  name: 'Diamond',
                  id: '789',
                })
              }
              style={{
                backgroundColor: Color.yellow,
                borderRadius: 10,
                paddingVertical: 7,
                paddingHorizontal: 19,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'SF-Pro-Text-Regular',
                  color: Color.mianColor,
                }}>
                Add New
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {MemberShips[0].diamond?.map(({discountedRate, rate, limits}) => {
              return (
                <MembershipCard
                  discountedRate={discountedRate}
                  rate={rate}
                  limits={limits}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={{marginVertical: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'SF-Pro-Text-Semibold',
                fontWeight: '600',
                color: Color.mianColor,
              }}>
              Additional Packages
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ADDTIONAL_PACKAGE')}
              style={{
                backgroundColor: Color.yellow,
                borderRadius: 10,
                paddingVertical: 7,
                paddingHorizontal: 19,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'SF-Pro-Text-Regular',
                  color: Color.mianColor,
                }}>
                Add New
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical:20}}>
          <AdditionalPackageCard/>
          <AdditionalPackageCard/>
          <AdditionalPackageCard/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ClientPriceManagement;

const styles = StyleSheet.create({});
