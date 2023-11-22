import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import {Color} from '../../../../../Constant/Color';
import {useNavigation} from '@react-navigation/native';
import {STYLES} from '../../../../../Constant/styles';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../../../Components/Buttons';
import TicketCard from '../../../../Components/Event/TicketCard';
const width = Dimensions.get('window').width;
const EventDetails = () => {
  const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={STYLES.container} showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 30,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View></View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
              fontFamily: 'SF-Pro-Text-Bold',
              color: Color.mianColor,
              alignSelf: 'center',
              marginLeft: 30,
            }}>
            Event Details
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                fontFamily: 'SF-Pro-Text-Bold',
                color: '#E64143',
                textDecorationLine: 'underline',
              }}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: '100%',
            paddingHorizontal: 20,
            marginTop: 40,
            marginBottom: 100,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: width / 1.7,
                height: 250,
                borderRadius: 10,
                backgroundColor: 'rgba(255, 222, 89, 0.05)',
              }}>
              <View style={{position: 'relative'}}>
                <Image
                  source={require('../../../../../assest/images/image2.png')}
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: 10, right: 10}}>
                  <Image
                    source={require('../../../../../assest/images/croosClose.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginLeft: 10}}>
              <View
                style={{
                  width: width / 3.4,
                  height: 245 / 2,
                  borderRadius: 10,
                  backgroundColor: 'red',
                  marginBottom: 10,
                }}>
                <View style={{position: 'relative'}}>
                  <Image
                    source={require('../../../../../assest/images/image2.png')}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                  />
                  <TouchableOpacity
                    style={{position: 'absolute', top: 10, right: 10}}>
                    <Image
                      source={require('../../../../../assest/images/croosClose.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  width: width / 3.4,
                  height: 245 / 2,
                  borderRadius: 10,
                  backgroundColor: 'rgba(255, 222, 89, 0.05)',
                }}>
                <View style={{position: 'relative'}}>
                  <Image
                    source={require('../../../../../assest/images/image2.png')}
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                  />
                  <TouchableOpacity
                    style={{position: 'absolute', top: 10, right: 10}}>
                    <Image
                      source={require('../../../../../assest/images/croosClose.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                width: width / 3.4,
                height: 245 / 2,
                borderRadius: 10,
                backgroundColor: 'rgba(255, 222, 89, 0.05)',
                marginRight: 5,
              }}>
              <View style={{position: 'relative'}}>
                <Image
                  source={require('../../../../../assest/images/image2.png')}
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: 10, right: 10}}>
                  <Image
                    source={require('../../../../../assest/images/croosClose.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: width / 3.4,
                height: 245 / 2,
                borderRadius: 10,
                backgroundColor: 'rgba(255, 222, 89, 0.05)',
                marginRight: 5,
              }}>
              <View style={{position: 'relative'}}>
                <Image
                  source={require('../../../../../assest/images/image2.png')}
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: 10, right: 10}}>
                  <Image
                    source={require('../../../../../assest/images/croosClose.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: width / 3.4,
                height: 245 / 2,
                borderRadius: 10,
                backgroundColor: 'rgba(255, 222, 89, 0.05)',
              }}>
              <View style={{position: 'relative'}}>
                <Image
                  source={require('../../../../../assest/images/image2.png')}
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: 10, right: 10}}>
                  <Image
                    source={require('../../../../../assest/images/croosClose.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <View style={{width: '100%'}}>
              <Text
                style={{
                  borderRadius: 10,
                  fontSize: 18,
                  color: Color.mianColor,
                  fontWeight: '500',
                  fontFamily: 'SF-Pro-Text-Medium',
                  marginTop: 10,
                  marginLeft: 10,
                  opacity: 0.6,
                }}>
                Title
              </Text>
              <View>
                <TextInput
                  value="Name"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    elevation: 3,
                    marginVertical: 5,
                    paddingHorizontal: 10,
                    fontSize: 16,
                    color: Color.mianColor,
                    fontWeight: '400',
                    fontFamily: 'SF-Pro-Text-Regular',
                    textAlignVertical: 'top',
                  }}
                  placeholder="Name"
                />
              </View>
            </View>
            <View style={{width: '100%'}}>
              <Text
                style={{
                  borderRadius: 10,
                  fontSize: 18,
                  color: Color.mianColor,
                  fontWeight: '500',
                  fontFamily: 'SF-Pro-Text-Medium',
                  marginTop: 10,
                  marginLeft: 10,
                  opacity: 0.6,
                }}>
                Description
              </Text>
              <View>
                <TextInput
                  multiline
                  numberOfLines={6}
                  value="Details "
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    elevation: 3,
                    marginVertical: 5,
                    paddingHorizontal: 10,
                    fontSize: 16,
                    color: Color.mianColor,
                    fontWeight: '400',
                    fontFamily: 'SF-Pro-Text-Regular',
                    textAlignVertical: 'top',
                  }}
                  placeholder="Details"
                />
              </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row'}}>
              <View style={{width: '49%'}}>
                <Text
                  style={{
                    borderRadius: 10,
                    fontSize: 18,
                    color: Color.mianColor,
                    fontWeight: '500',
                    fontFamily: 'SF-Pro-Text-Medium',
                    marginTop: 10,
                    marginLeft: 10,
                    opacity: 0.6,
                  }}>
                  Start Date
                </Text>
                <View>
                  <TextInput
                    value="09-Dec-2022"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 10,
                      elevation: 3,
                      marginVertical: 5,
                      paddingHorizontal: 10,
                      fontSize: 16,
                      color: Color.mianColor,
                      fontWeight: '400',
                      fontFamily: 'SF-Pro-Text-Regular',
                      textAlignVertical: 'top',
                    }}
                    placeholder="Name"
                    editable={false}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: 16,
                      right: 10,
                    }}>
                    <MIcon
                      name="calendar-month-outline"
                      size={25}
                      color={Color.mianColor}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{width: '49%', marginLeft: 10}}>
                <Text
                  style={{
                    borderRadius: 10,
                    fontSize: 18,
                    color: Color.mianColor,
                    fontWeight: '500',
                    fontFamily: 'SF-Pro-Text-Medium',
                    marginTop: 10,
                    marginLeft: 10,
                    opacity: 0.6,
                  }}>
                  End Date
                </Text>
                <View>
                  <TextInput
                    value="09-Dec-2022"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 10,
                      elevation: 3,
                      marginVertical: 5,
                      paddingHorizontal: 10,
                      fontSize: 16,
                      color: Color.mianColor,
                      fontWeight: '400',
                      fontFamily: 'SF-Pro-Text-Regular',
                      textAlignVertical: 'top',
                    }}
                    placeholder="Name"
                    editable={false}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: 16,
                      right: 10,
                    }}>
                    <MIcon
                      name="calendar-month-outline"
                      size={25}
                      color={Color.mianColor}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row'}}>
              <View style={{width: '49%'}}>
                <Text
                  style={{
                    borderRadius: 10,
                    fontSize: 18,
                    color: Color.mianColor,
                    fontWeight: '500',
                    fontFamily: 'SF-Pro-Text-Medium',
                    marginTop: 10,
                    marginLeft: 10,
                    opacity: 0.6,
                  }}>
                  Start Time
                </Text>
                <View>
                  <TextInput
                    value="09-Dec-2022"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 10,
                      elevation: 3,
                      marginVertical: 5,
                      paddingHorizontal: 10,
                      fontSize: 16,
                      color: Color.mianColor,
                      fontWeight: '400',
                      fontFamily: 'SF-Pro-Text-Regular',
                      textAlignVertical: 'top',
                    }}
                    placeholder="Name"
                    editable={false}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: 16,
                      right: 10,
                    }}>
                    <MIcon
                      name="clock-outline"
                      size={25}
                      color={Color.mianColor}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{width: '49%', marginLeft: 10}}>
                <Text
                  style={{
                    borderRadius: 10,
                    fontSize: 18,
                    color: Color.mianColor,
                    fontWeight: '500',
                    fontFamily: 'SF-Pro-Text-Medium',
                    marginTop: 10,
                    marginLeft: 10,
                    opacity: 0.6,
                  }}>
                  End Time
                </Text>
                <View>
                  <TextInput
                    value="09-Dec-2022"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 10,
                      elevation: 3,
                      marginVertical: 5,
                      paddingHorizontal: 10,
                      fontSize: 16,
                      color: Color.mianColor,
                      fontWeight: '400',
                      fontFamily: 'SF-Pro-Text-Regular',
                      textAlignVertical: 'top',
                    }}
                    placeholder="Name"
                    editable={true}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: 16,
                      right: 10,
                    }}>
                    <MIcon
                      name="clock-outline"
                      size={25}
                      color={Color.mianColor}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width: '100%'}}>
              <Text
                style={{
                  borderRadius: 10,
                  fontSize: 18,
                  color: Color.mianColor,
                  fontWeight: '500',
                  fontFamily: 'SF-Pro-Text-Medium',
                  marginTop: 10,
                  marginLeft: 10,
                  opacity: 0.6,
                }}>
                Location
              </Text>
              <View>
                <TextInput
                  value="Add location of event"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    elevation: 3,
                    marginVertical: 5,
                    paddingHorizontal: 10,
                    fontSize: 18,
                    color: Color.mianColor,
                    fontWeight: '400',
                    fontFamily: 'SF-Pro-Text-Regular',
                    textAlignVertical: 'top',
                  }}
                  placeholder="Name"
                  editable={false}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: 20, right: 10}}>
                  <Image
                    source={require('../../../../../assest/images/EditIconBtn.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{width: '100%'}}>
              <Text
                style={{
                  borderRadius: 10,
                  fontSize: 18,
                  color: Color.mianColor,
                  fontWeight: '500',
                  fontFamily: 'SF-Pro-Text-Medium',
                  marginTop: 10,
                  marginLeft: 10,
                  opacity: 0.6,
                }}>
                Ticket Price
              </Text>
              <View>
                <TextInput
                  value="$150 to $300"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    elevation: 3,
                    marginVertical: 5,
                    paddingHorizontal: 10,
                    fontSize: 18,
                    color: Color.mianColor,
                    fontWeight: '400',
                    fontFamily: 'SF-Pro-Text-Regular',
                    textAlignVertical: 'top',
                  }}
                  placeholder="Name"
                  editable={false}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: 20, right: 10}}>
                  <Image
                    source={require('../../../../../assest/images/EditIconBtn.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                borderRadius: 10,
                fontSize: 18,
                color: Color.mianColor,
                fontWeight: '500',
                fontFamily: 'SF-Pro-Text-Medium',
                marginTop: 10,
                marginLeft: 10,
                opacity: 0.6,
              }}>
              Tickets
            </Text>
            <TicketCard />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{width: '35%'}}>
              <View
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(0,0,0,0.08)',
                  height: 60,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'SF-Pro-Text-Medium',
                    fontWeight: '500',
                    opacity: 0.8,
                  }}>
                  Cancel
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{width: '60%'}}>
              <Button text="Save Changes" />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default EventDetails;

const styles = StyleSheet.create({});
