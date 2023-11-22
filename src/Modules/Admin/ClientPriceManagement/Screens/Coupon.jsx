import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {STYLES} from '../../../../../Constant/styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Color} from '../../../../../Constant/Color';
import Tag from '../../../../Components/Event/Tag';
import Button from '../../../../Components/Buttons';
import DatePickerModal from '../../../../Components/DatePicker';
import EventItem from '../../../../Components/Event/EventItem';
import Icon from 'react-native-vector-icons/Ionicons';
const {width} = Dimensions.get('window');
const Coupon = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(2);
  const [data, setData] = useState({
    code: '',
    startDate: '',
    endDate: '',
    for: '',
    discountedRate: '',
  });
  const [startDateModal, setStartDateModal] = useState(false);
  const [endDateModal, setEndDateModal] = useState(false);
  const [modal, setModal] = useState(true);

  const [SelectorData, setSeletorData] = useState([
    {
      event: [
        {
          id: 1,
          name: 'Grand Party at salvik',
          price: '$155',
          image: require('../../../../../assest/images/image2.png'),
        },
        {
          id: 2,
          name: 'Grand Party at salvik',
          price: '$155',
          image: require('../../../../../assest/images/image2.png'),
        },
        {
          id: 3,
          name: 'Grand Party at salvik',
          price: '$155',
          image: require('../../../../../assest/images/image2.png'),
        },
        {
          id: 4,
          name: 'Grand Party at salvik',
          price: '$155',
          image: require('../../../../../assest/images/image2.png'),
        },
      ],
      food: [
        {
          id: 1,
          name: 'Anh Nguyen',
          price: '$18',
          image: require('../../../../../assest/images/food.png'),
        },
        {
          id: 2,
          name: 'Fried Chicken',
          price: '$9',
          image: require('../../../../../assest/images/food.png'),
        },
        {
          id: 3,
          name: 'French Fries',
          price: '$6',
          image: require('../../../../../assest/images/food.png'),
        },
        {
          id: 4,
          name: 'Nuggets',
          price: '$12',
          image: require('../../../../../assest/images/food.png'),
        },
      ],
    },
  ]);
  console.log(SelectorData[0][data?.for]);
  return (
    <>
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
            <Image
              source={require('../../../../../assest/images/short_left.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '600',
              fontFamily: 'SF-Pro-Text-Bold',
              color: Color.mianColor,
              marginLeft: -10,
            }}>
            Coupon
          </Text>
          <Text></Text>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 20}}>
          <View style={{marginVertical: 5}}>
            <Text
              style={{
                fontSize: 18,
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Medium',
                fontWeight: '500',
              }}>
              Coupon Code
            </Text>
            <TextInput
              value={data.code}
              style={{
                marginVertical: 5,
                width: '100%',
                height: 50,
                backgroundColor: 'white',
                elevation: 2,
                shadowOpacity: 0.4,
                borderRadius: 8,
                fontSize: 18,
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Regular',
                fontWeight: '400',
                paddingHorizontal: 10,
                textAlignVertical: 'center',
              }}
              placeholder="New Membership"
              onChangeText={e => setData({...data, code: e})}
              editable={false}
            />
          </View>
          <View style={{marginVertical: 5}}>
            <Text
              style={{
                fontSize: 18,
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Medium',
                fontWeight: '500',
              }}>
              Discount Amount
            </Text>
            <TextInput
              value={data.discountedRate}
              keyboardType="number-pad"
              style={{
                marginVertical: 5,
                width: '100%',
                height: 50,
                backgroundColor: 'white',
                elevation: 2,
                shadowOpacity: 0.4,
                borderRadius: 8,
                fontSize: 18,
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Regular',
                fontWeight: '400',
                paddingHorizontal: 10,
                textAlignVertical: 'center',
              }}
              placeholder="Price"
              onChangeText={e => setData({...data, discountedRate: e})}
            />
          </View>
          <View style={{marginVertical: 5}}>
            <Text
              style={{
                fontSize: 18,
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Medium',
                fontWeight: '500',
              }}>
              Starting Date
            </Text>
            <TouchableOpacity onPress={() => setStartDateModal(true)}>
              <TextInput
                value={data.startDate}
                keyboardType="number-pad"
                style={{
                  marginVertical: 5,
                  width: '100%',
                  height: 50,
                  backgroundColor: 'white',
                  elevation: 2,
                  shadowOpacity: 0.4,
                  borderRadius: 8,
                  fontSize: 18,
                  color: Color.mianColor,
                  fontFamily: 'SF-Pro-Text-Regular',
                  fontWeight: '400',
                  paddingHorizontal: 10,
                  textAlignVertical: 'center',
                }}
                placeholder="Discounted Price"
                onChangeText={e => setData({...data, startDate: e})}
                editable={false}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 5}}>
            <Text
              style={{
                fontSize: 18,
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Medium',
                fontWeight: '500',
              }}>
              End Date
            </Text>
            <TouchableOpacity onPress={() => setEndDateModal(true)}>
              <TextInput
                value={data.endDate}
                keyboardType="number-pad"
                style={{
                  marginVertical: 5,
                  width: '100%',
                  height: 50,
                  backgroundColor: 'white',
                  elevation: 2,
                  shadowOpacity: 0.4,
                  borderRadius: 8,
                  fontSize: 18,
                  color: Color.mianColor,
                  fontFamily: 'SF-Pro-Text-Regular',
                  fontWeight: '400',
                  paddingHorizontal: 10,
                  textAlignVertical: 'center',
                }}
                placeholder="Discounted Price"
                onChangeText={e => setData({...data, endDate: e})}
                editable={false}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 10}}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'SF-Pro-Text-Regular',
                fontWeight: '400',
                color: Color.mianColor,
              }}>
              Select for{' '}
              {data?.for == 'food'
                ? 'food'
                : data?.for == 'event'
                ? 'events'
                : ''}
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
                      marginLeft:-15
                    }}>
                    {data?.for == 'food'
                      ? 'Food'
                      : data?.for == 'event'
                      ? 'Events'
                      : ''}
                  </Text>
                  <Text></Text>
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{height: 310}}>
                  {SelectorData[0][data.for]?.map(item => {
                    console.log(item, 'item');
                    return <EventItem width={width / 1.3} data={item} isSelected={item.id==selectedItem} SelectedArrow={true} setIsSelected={()=>setSelectedItem(item.id)} />;
                  })}
                </ScrollView>
              </View>
            )}
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
                  fontSize: 18,
                  fontFamily: 'SF-Pro-Text-Medium',
                  fontWeight: '500',
                  color: Color.mianColor,
                }}>
                Valid For
              </Text>
              <Tag text="All" isSelected={false} />
            </View>
            <View style={{flexDirection: 'row', marginVertical: 6}}>
              <Tag text="Basic User" isSelected={true} />
            </View>
            <View style={{flexDirection: 'row', marginVertical: 6}}>
              <Tag text="Gold User" isSelected={true} />
            </View>
            <View style={{flexDirection: 'row', marginVertical: 6}}>
              <Tag text="Diamond User" isSelected={false} />
            </View>
          </View>
          <Button text="Add Coupon" />
        </View>
      </ScrollView>
      <DatePickerModal
        isVisible={startDateModal}
        onCancel={() => setStartDateModal(false)}
        mode="date"
        onConfirm={e => {
          setData({
            ...data,
            startDate: JSON.stringify(e)?.split('T')[0].split('"')[1],
          });
          console.log(e);
        }}
      />
      <DatePickerModal
        isVisible={endDateModal}
        onCancel={() => setEndDateModal(false)}
        mode="date"
        onConfirm={e => {
          setData({
            ...data,
            endDate: JSON.stringify(e)?.split('T')[0].split('"')[1],
          });
          console.log(JSON.stringify(e)?.split('T')[0].split('"')[1], 'dd');
        }}
      />
      {modal && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 10,
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
                height: 170,
                backgroundColor: Color.white,
                borderRadius: 10,
                padding: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'SF-Pro-Text-Medium',
                  fontWeight: '500',
                  opacity: 0.8,
                }}>
                Please Select Which Category of Coupon You Need?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setModal(false);
                    setData({...data, for: 'food'});
                  }}
                  style={{
                    backgroundColor: Color.mianColor,
                    width: '45%',
                    height: 45,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: Color.white,
                      fontSize: 16,
                      fontFamily: 'SF-Pro-Text-Medium',
                    }}>
                    For Foods
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModal(false);
                    setData({...data, for: 'event'});
                  }}
                  style={{
                    backgroundColor: Color.yellow,
                    width: '45%',
                    height: 45,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: Color.mianColor,
                      fontSize: 16,
                      fontFamily: 'SF-Pro-Text-Medium',
                    }}>
                    For Events
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Coupon;

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
});
