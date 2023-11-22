import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../../../Constant/styles';
import {ScrollView} from 'react-native-gesture-handler';
import {Color} from '../../../../../Constant/Color';
import {useRoute} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import Button from '../../../../Components/Buttons';
import Select from '../../../../Components/Select';

const WithDrawDetials = () => {
  const route = useRoute();
  const {isCompleted} = route.params;
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  console.log(isCompleted);
  const [isModal, setIsModal] = useState(false);
  const [isModal2, setIsModal2] = useState(false);
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
  return (
    <View>
      <StatusBar hidden={true} />
      <ScrollView
        style={[STYLES.container]}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
              fontFamily: 'SF-Pro-Text-Bold',
              color: Color.mianColor,
            }}>
            Withdraw Details
          </Text>
        </View>
        <View style={{paddingHorizontal: 20, marginVertical: 30}}>
          <View
            style={{
              backgroundColor: Color.white,
              borderRadius: 10,
              width: '100%',
              elevation: 3,
              marginVertical: 5,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                borderColor: Color.yellow,
                borderWidth: 5,
              }}
              source={require('../../../../../assest/images/Avatarimage1.png')}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontFamily: 'SF-Pro-Text-Regular',
                  fontWeight: '400',
                  fontSize: 22,
                  color: Color.mianColor,
                }}>
                Munly Brown
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  fontFamily: 'SF-Pro-Text-Regular',
                  fontWeight: '400',
                  fontSize: 16,
                  color: Color.mianColor,
                  opacity: 0.6,
                  width: 200,
                  marginTop: -10,
                }}>
                munlybrown@gmail.com
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: 'SF-Pro-Text-Medium',
              fontWeight: '500',
              fontSize: 18,
              color: Color.mianColor,
              textAlign: 'center',
            }}>
            Account Details
          </Text>
          <View
            style={{
              backgroundColor: Color.white,
              borderRadius: 10,
              width: '100%',
              elevation: 3,
              marginVertical: 5,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{width: '50%'}}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'SF-Pro-Text-Regular',
                    fontSize: 16,
                    color: 'rgba(28, 28, 28, 0.60)',
                  }}>
                  Account Title
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontFamily: 'SF-Pro-Text-Medium',
                    fontSize: 16,
                    color: Color.mianColor,
                    marginTop: -7,
                  }}>
                  Faraz Khan
                </Text>
              </View>
              <View style={{width: '50%'}}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'SF-Pro-Text-Regular',
                    fontSize: 16,
                    color: 'rgba(28, 28, 28, 0.60)',
                  }}>
                  Account Number
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontFamily: 'SF-Pro-Text-Medium',
                    fontSize: 16,
                    color: '#2A3182',
                    marginTop: -7,
                  }}>
                  58863678677543
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{width: '50%'}}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'SF-Pro-Text-Regular',
                    fontSize: 16,
                    color: 'rgba(28, 28, 28, 0.60)',
                  }}>
                  Bank Name
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontFamily: 'SF-Pro-Text-Medium',
                    fontSize: 16,
                    color: Color.mianColor,
                    marginTop: -7,
                  }}>
                  Dggv gyyhg gyy
                </Text>
              </View>
              <View style={{width: '50%'}}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'SF-Pro-Text-Regular',
                    fontSize: 16,
                    color: 'rgba(28, 28, 28, 0.60)',
                  }}>
                  Bank Address
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontFamily: 'SF-Pro-Text-Medium',
                    fontSize: 16,
                    color: Color.mianColor,
                    marginTop: -7,
                  }}>
                  Dggv gyyhg gyy
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{width: '50%'}}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'SF-Pro-Text-Regular',
                    fontSize: 16,
                    color: 'rgba(28, 28, 28, 0.60)',
                  }}>
                  Branch Code
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontFamily: 'SF-Pro-Text-Medium',
                    fontSize: 16,
                    color: '#2A3182',
                    marginTop: -7,
                  }}>
                  326
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontFamily: 'SF-Pro-Text-Medium',
              fontWeight: '500',
              fontSize: 18,
              color: Color.mianColor,
              textAlign: 'center',
            }}>
            Other Details
          </Text>
          <View
            style={{
              backgroundColor: Color.white,
              borderRadius: 10,
              width: '100%',
              elevation: 3,
              marginVertical: 5,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontWeight: '400',
                  fontFamily: 'SF-Pro-Text-Regular',
                  fontSize: 18,
                  color: 'rgba(28, 28, 28, 0.60)',
                }}>
                Status
              </Text>
              {isCompleted ? (
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'SF-Pro-Text-Regular',
                    fontSize: 16,
                    color: '#0FCC88',
                  }}>
                  Complete
                </Text>
              ) : (
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'SF-Pro-Text-Regular',
                    fontSize: 16,
                    color: '#E94057',
                  }}>
                  Pending
                </Text>
              )}
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontWeight: '400',
                  fontFamily: 'SF-Pro-Text-Regular',
                  fontSize: 18,
                  color: 'rgba(28, 28, 28, 0.60)',
                }}>
                Ammount
              </Text>
              <Text
                style={{
                  fontWeight: '600',
                  fontFamily: 'SF-Pro-Text-Semibold',
                  fontSize: 16,
                  color: Color.mianColor,
                }}>
                300$
              </Text>
            </View>
          </View>
          {!isCompleted && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <TouchableOpacity
                onPress={() => setIsModal2(true)}
                style={{
                  borderColor: '#E94057',
                  borderWidth: 2,
                  borderRadius: 10,
                  width: '45%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Poppins-Medium',
                    fontWeight: '500',
                    color: '#E94057',
                  }}>
                  Decline
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsModal(true)}
                style={{
                  backgroundColor: '#0FCC88',
                  borderRadius: 10,
                  width: '45%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Poppins-Medium',
                    fontWeight: '500',
                    color: Color.white,
                  }}>
                  Accept
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
      {isModal && (
        <TouchableOpacity
          onPress={() => setIsModal(false)}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 3,
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '90%',
                height: 500,
                borderRadius: 10,
                backgroundColor: 'white',
                padding: 10,
                zIndex: 4,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'SF-Pro-Text-Regular',
                    fontWeight: '400',
                    color: Color.mianColor,
                  }}>
                  Add Screenshot
                </Text>
                <TouchableOpacity
                  onPress={openImagePicker}
                  style={{
                    backgroundColor: 'rgba(28, 28, 28, 0.05)',
                    height: 350,
                    width: '100%',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {selectedImage ? (
                    <Image
                      style={{width: '100%', height: '100%', borderRadius: 10}}
                      source={{uri: selectedImage && selectedImage}}
                    />
                  ) : (
                    <Image
                      source={require('../../../../../assest/images/ImageShowIcon.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <View
                style={{
                  // marginTop: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{width: '37%'}}
                  onPress={() => setIsModal(false)}>
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
                  <Button
                    onPress={() => setIsModal(false)}
                    text="Upload & Submit"
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      {isModal2 && (
        <View
          // onPress={() => setIsModal2(false)}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 3,
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '90%',
                borderRadius: 10,
                backgroundColor: 'white',
                padding: 10,
                zIndex: 4,
              }}>
              <TextInput
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(0,0,0,0.08)',
                  borderRadius: 10,
                  color: Color.mianColor,
                  fontFamily: 'SF-Pro-Text-Medium',
                  fontWeight: '500',
                  fontSize: 16,
                  textAlignVertical: 'top',
                }}
                numberOfLines={7}
                placeholder="Write Reason"
              />
              <Select
                label="Bank Details"
                selectItem={selectedItem}
                setSelectItem={setSelectedItem}
                data={[
                  {
                    name: 'true',
                    value: 'true',
                  },
                  {
                    name: 'false',
                    value: 'false',
                  },
                ]}
              />
              <View
                style={{
                  // marginTop: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{width: '37%'}}
                  onPress={() => setIsModal2(false)}
                  >
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
                  <Button onPress={() => setIsModal2(false)} text="Submit" />
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default WithDrawDetials;

const styles = StyleSheet.create({});
