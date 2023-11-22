import {
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    Pressable,
    Dimensions,
  } from 'react-native';
  import React, {useCallback, useState} from 'react';
  import {STYLES} from '../../../../../Constant/styles';
  import {
    ScrollView,
    TextInput,
    TouchableOpacity,
  } from 'react-native-gesture-handler';
  import {Color} from '../../../../../Constant/Color';
  import Icon from 'react-native-vector-icons/Ionicons';
  import EventItem from '../../../../Components/Event/EventItem';
  import Tag from '../../../../Components/Event/Tag';
  import RangeSliderRN from 'rn-range-slider';
  import Button from '../../../../Components/Buttons';
  const {width} = Dimensions.get('window');
  const THUMB_RADIUS = 15;
  const EditNotifications = () => {
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(100);
    const [visible, setVisible] = useState(false);
    const [isTicket, setIsTicket] = useState(true);
    const renderThumb = () => <View style={styles.thumb} />;
    const renderRail = useCallback(() => <View style={styles.Rail2} />, []);
    const renderRailSelected = useCallback(
      () => <View style={styles.Rail} />,
      [],
    );
  
    const handleValueChange = (newLow, newHigh) => {
      setLow(newLow);
      setHigh(newHigh);
      console.log(low, newHigh);
    };
    return (
      <>
        <ScrollView
          style={[STYLES.container, {width: '100%', height: '100%'}]}
          showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 25}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '600',
                fontFamily: 'SF-Pro-Text-Bold',
                color: Color.mianColor,
                textAlign: 'center',
              }}>
              Edit Notification
            </Text>
          </View>
          <View style={{paddingHorizontal: 20, marginVertical: 20}}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: Color.mianColor,
                  fontFamily: 'SF-Pro-Text-Medium',
                  fontWeight: '600',
                }}>
                Add Image
              </Text>
              <View
                style={{
                  backgroundColor: 'rgba(28, 28, 28, 0.05)',
                  height: 220,
                  width: '100%',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../../../assest/images/ImageShowIcon.png')}
                />
              </View>
            </View>
            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  color: Color.mianColor,
                  fontFamily: 'SF-Pro-Text-Medium',
                  fontWeight: '600',
                }}>
                Title
              </Text>
              <TextInput
                placeholder="Write Here"
                placeholderTextColor={'rgba(28, 28, 28, 0.30)'}
                style={styles.Input}
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  color: Color.mianColor,
                  fontFamily: 'SF-Pro-Text-Medium',
                  fontWeight: '600',
                }}>
                Description
              </Text>
              <TextInput
                placeholderTextColor={'rgba(28, 28, 28, 0.30)'}
                numberOfLines={8}
                multiline={true}
                placeholder="Write Here"
                style={styles.InputMultiLine}
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  color: Color.mianColor,
                  fontFamily: 'SF-Pro-Text-Medium',
                  fontWeight: '600',
                }}>
                Select for events
              </Text>
              <TouchableOpacity
                style={[
                  styles.Input,
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                ]}>
                <Text
                  style={{
                    color: 'rgba(28, 28, 28, 0.30)',
                    fontSize: 18,
                    fontFamily: 'SF-Pro-Text-Regular',
                    fontWeight: '400',
                  }}>
                  Select
                </Text>
                <TouchableOpacity onPress={() => setVisible(!visible)}>
                  {visible ? (
                    <Icon name="chevron-up" size={25} color={Color.mianColor} />
                  ) : (
                    <Icon name="chevron-down" size={25} color={Color.mianColor} />
                  )}
                </TouchableOpacity>
              </TouchableOpacity>
              {visible && (
                <View
                  style={{
                    width: '100%',
                    // height: 300,
                    marginTop: 10,
                    borderRadius: 10,
                    backgroundColor: Color.white,
                    elevation: 3,
                    padding: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                      <Icon name="close" size={25} color={Color.mianColor} />
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: Color.mianColor,
                        fontSize: 22,
                        fontFamily: 'SF-Pro-Text-Semibold',
                        fontWeight: '600',
                      }}>
                      Current Events
                    </Text>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                      <Icon
                        name="checkmark-sharp"
                        size={25}
                        color={Color.mianColor}
                      />
                    </TouchableOpacity>
                  </View>
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
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        fontFamily: 'SF-Pro-Text-Semibold',
                        fontSize: 18,
                        fontWeight: '600',
                        color: Color.mianColor,
                      }}>
                      People who bought ticket
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity
                          onPress={() => setIsTicket(true)}
                          style={{
                            borderRadius: 10,
                            width: 20,
                            height: 20,
                            borderWidth: 2,
                            borderColor: Color.yellow,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          {isTicket && (
                            <View
                              style={{
                                borderRadius: 10,
                                width: 10,
                                height: 10,
                                backgroundColor: Color.yellow,
                              }}></View>
                          )}
                        </TouchableOpacity>
                        <Text
                          style={{
                            marginLeft: 5,
                            fontSize: 15,
                            fontFamily: 'SF-Pro-Text-Regular',
                            fontWeight: '400',
                            color: Color.mianColor,
                          }}>
                          Send Message
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginLeft: 10,
                        }}>
                        <TouchableOpacity
                          onPress={() => setIsTicket(false)}
                          style={{
                            borderRadius: 10,
                            width: 20,
                            height: 20,
                            borderWidth: 2,
                            borderColor: Color.yellow,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          {!isTicket && (
                            <View
                              style={{
                                borderRadius: 10,
                                width: 10,
                                height: 10,
                                backgroundColor: Color.yellow,
                              }}></View>
                          )}
                        </TouchableOpacity>
                        <Text
                          style={{
                            marginLeft: 5,
                            fontSize: 15,
                            fontFamily: 'SF-Pro-Text-Regular',
                            fontWeight: '400',
                            color: Color.mianColor,
                          }}>
                          Don't Send message
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  color: Color.mianColor,
                  fontFamily: 'SF-Pro-Text-Medium',
                  fontWeight: '600',
                }}>
                Select Panels
              </Text>
              <View style={{position: 'relative'}}>
                <TextInput
                  placeholderTextColor={'rgba(28, 28, 28, 0.30)'}
                  placeholder={'Search'}
                  style={[styles.Input, {paddingLeft: 40}]}
                />
                <Icon
                  style={{position: 'absolute', top: 17, left: 10}}
                  name="search"
                  size={25}
                  color={Color.mianColor}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Tag isHash={false} isSelected text="Dating Users" />
              <Tag isHash={false} isSelected={false} text="All" />
            </View>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Tag isHash={false} isSelected text="Concierges" />
            </View>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Tag isHash={false} isSelected text="Influencers" />
            </View>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Tag isHash={false} isSelected={false} text="Profile Optimizers" />
            </View>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Tag isHash={false} isSelected={false} text="Vendors" />
            </View>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Tag isHash={false} isSelected={false} text="Event Staff" />
            </View>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Tag isHash={false} isSelected={false} text="Front Door POS" />
            </View>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Tag isHash={false} isSelected={false} text="POS for Booths" />
            </View>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Tag
                isHash={false}
                isSelected={false}
                text="Social Media Manager"
              />
            </View>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Tag isHash={false} isSelected={false} text="Content Producer" />
            </View>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Tag isHash={false} isSelected={false} text="Legal Team" />
            </View>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Tag isHash={false} isSelected={false} text="Event Coordinators" />
            </View>
            <View style={{marginVertical: 10}}>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{fontSize:18,fontFamily:"SF-Pro-Text-Medium",fontWeight:"500",color:Color.mianColor}}>Age range</Text>
                <Text style={{fontSize:18,fontFamily:"SF-Pro-Text-Semibold",fontWeight:"600",color:Color.mianColor}}>{low}-{high}</Text>
              </View>
              <RangeSliderRN
                style={{marginVertical: 20}}
                min={0}
                max={100}
                step={1}
                floatingLabel={false}
                disableRange
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                allowLabelOverflow={true}
                onValueChanged={handleValueChange}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity style={{width: 140}}>
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
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setVisible(false)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setVisible(!visible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal> */}
      </>
    );
  };
  
  export default EditNotifications;
  
  const styles = StyleSheet.create({
    Input: {
      width: '100%',
      height: 60,
      backgroundColor: 'rgba(28, 28, 28, 0.05)',
      paddingHorizontal: 10,
      borderRadius: 10,
      fontSize: 18,
      color: Color.mianColor,
      fontFamily: 'SF-Pro-Text-Regular',
      fontWeight: '400',
    },
    InputMultiLine: {
      width: '100%',
      backgroundColor: 'rgba(28, 28, 28, 0.05)',
      paddingHorizontal: 10,
      borderRadius: 10,
      fontSize: 18,
      textAlignVertical: 'top',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    thumb: {
      width: THUMB_RADIUS * 1.5,
      height: THUMB_RADIUS * 1.5,
      borderRadius: THUMB_RADIUS,
      borderWidth: 4,
      borderColor: Color.yellow,
      backgroundColor: Color.white,
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: -1},
      shadowOpacity: 0.16,
      shadowRadius: 6,
    },
    Rail2: {
      flex: 1,
      height: 5,
      borderRadius: 2,
      backgroundColor: 'rgba(0,0,0,0.3)',
      opacity: 0.3,
      width:"100%"
    },
    Rail: {
      height: 5,
      backgroundColor: Color.yellow,
      borderRadius: 2,
    },
  });
  