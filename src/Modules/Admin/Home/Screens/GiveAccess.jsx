import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {STYLES} from '../../../../../Constant/styles';
import {Color} from '../../../../../Constant/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../../Components/Buttons';

const GiveAccess = () => {
  return (
    <ScrollView style={STYLES.container} showsVerticalScrollIndicator={false}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '700',
          fontFamily: 'SF-Pro-Text-Bold',
          color: Color.mianColor,
          alignSelf: 'center',
          marginTop: 25,
        }}>
        Give Access
      </Text>
      <View style={{paddingHorizontal: 20, marginTop: 30, marginBottom: 30}}>
        <Image
          source={require('../../../../../assest/images/image.png')}
          style={{width: '100%', height: 400, borderRadius: 10}}
        />
        <View
          style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 28,
              fontWeight: '800',
              color: Color.mianColor,
              letterSpacing: -0.383,
              fontStyle: 'normal',
            }}>
            Sofia
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 15,
              color: Color.mianColor,
              marginLeft: 10,
              marginTop: 10,
              fontWeight: '400',
            }}>
            4 years+ of experience
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: Color.mianColor,
              fontWeight: '400',
            }}>
            Lawyer
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Color.yellow,
              paddingHorizontal: 12,
              paddingVertical: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 15,
                color: Color.mianColor,
                fontWeight: '500',
                marginTop: 2,
              }}>
              Los Angles, CA
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 35, height: 35}}
              source={require('../../../../../assest/images/UserImage.png')}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                fontFamily: 'Poppins-SemiBold',
                fontWeight: '600',
                color: Color.mianColor,
              }}>
              Bio
            </Text>
          </View>
          <View style={{marginTop: 15}}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                fontWeight: '400',
                color: Color.mianColor,
                opacity: 0.8,
              }}>
              Et ult rices met lacks, viva mus temper Rivera Ohio incident null
              Corvallis met various RELIT groin faculty Nisei fuse Phaedra
              various imper diet Mathis
            </Text>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <View
            style={{
              backgroundColor: 'white',
              height: 50,
              width: '100%',
              borderRadius: 10,
              shadowColor: '#000000',
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.19,
              shadowRadius: 17,
              elevation: 4,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: 35, height: 35, marginHorizontal: 10}}
              source={require('../../../../../assest/images/info.png')}
            />
            <View
              style={{
                height: '80%',
                width: 2,
                backgroundColor: '#0FCC88',
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 13,
                  color: Color.mianColor,
                }}>
                Lawyer Service
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  color: Color.mianColor,
                  textDecorationLine: 'underline',
                  marginLeft: 10,
                }}>
                Donation Based + Monthly
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 50,
              width: '100%',
              borderRadius: 10,
              shadowColor: '#000000',
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.19,
              shadowRadius: 17,
              elevation: 4,
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <Image
              style={{width: 35, height: 35, marginHorizontal: 10}}
              source={require('../../../../../assest/images/mon.png')}
              resizeMode="contain"
            />
            <View
              style={{
                height: '80%',
                width: 2,
                backgroundColor: '#0FCC88',
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 13,
                  color: Color.mianColor,
                }}>
                $50
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  color: Color.mianColor,
                  marginLeft: 10,
                  opacity: 0.8,
                }}>
                Per Month + Donations
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 35, height: 35}}
              source={require('../../../../../assest/images/infoMian.png')}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                fontFamily: 'Poppins-Medium',
                fontWeight: '500',
                color: Color.mianColor,
              }}>
              Sofia’s info
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'rgba(0,0,0,0.07)',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
                marginRight: 10,
              }}>
              <Image
                source={require('../../../../../assest/images/Heart.png')}
              />
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 5,
                  fontWeight: '400',
                  color: Color.mianColor,
                }}>
                Single
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'rgba(0,0,0,0.07)',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
                marginRight: 10,
              }}>
              <Image
                source={require('../../../../../assest/images/lang.png')}
              />
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 5,
                  fontWeight: '400',
                  color: Color.mianColor,
                }}>
                English
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'rgba(0,0,0,0.07)',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
                marginRight: 10,
              }}>
              <Image
                source={require('../../../../../assest/images/garduate.png')}
              />
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 5,
                  fontWeight: '400',
                  color: Color.mianColor,
                }}>
                LLB
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              color: Color.mianColor,
              fontSize: 20,
              fontWeight: '700',
              fontFamily: 'SF-Pro-Text-Semibold',
            }}>
            Requested from
          </Text>
          <View>
            <View
              style={{
                backgroundColor: 'white',
                height: 65,
                width: '100%',
                borderRadius: 10,
                shadowColor: '#000000',
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.19,
                shadowRadius: 17,
                elevation: 4,
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 20,
                paddingHorizontal: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 18,
                    color: Color.mianColor,
                  }}>
                  Talent agency/Influencer
                </Text>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 16,
                      color: '#0FCC88',
                      marginLeft: 10,
                    }}>
                    Accepted
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 13,
                      color: Color.mianColor,
                      marginLeft: 10,
                      opacity: 0.8,
                    }}>
                    May 12, 2022
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                height: 65,
                width: '100%',
                borderRadius: 10,
                shadowColor: '#000000',
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.19,
                shadowRadius: 17,
                elevation: 4,
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 20,
                paddingHorizontal: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 18,
                    color: Color.mianColor,
                  }}>
                  Concierges
                </Text>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 16,
                      color: '#F66A6A',
                      marginLeft: 10,
                    }}>
                    Declined
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 13,
                      color: Color.mianColor,
                      marginLeft: 10,
                      opacity: 0.8,
                    }}>
                    May 12, 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Button text="Give Access" />
        </View>
      </View>
    </ScrollView>
  );
};

export default GiveAccess;

const styles = StyleSheet.create({});
