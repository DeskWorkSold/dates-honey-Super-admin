import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../../../Constant/styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Color} from '../../../../../Constant/Color';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Tag from '../../../../Components/Event/Tag';
import Button from '../../../../Components/Buttons';

const CreateMemberShip = ({name, id}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState({
    limits: '',
    rate: '',
    discountedRate: '',
  });
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
          {route?.params?.name} Membership
        </Text>
        <Text></Text>
      </View>
      <View style={{paddingHorizontal: 20,marginTop:20}}>
        <View style={{marginVertical: 5}}>
          <Text
            style={{
              fontSize: 18,
              color: Color.mianColor,
              fontFamily: 'SF-Pro-Text-Medium',
              fontWeight: '500',
            }}>
            Duration
          </Text>
          <TextInput
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
            onChangeText={e => setData({...data, limits: e})}
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
            Price
          </Text>
          <TextInput
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
            onChangeText={e => setData({...data, rate: e})}
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
            Discounted Price
          </Text>
          <TextInput
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
            onChangeText={e => setData({...data, discountedRate: e})}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text
            style={{
              fontSize: 18,
              color: Color.mianColor,
              fontFamily: 'SF-Pro-Text-Medium',
              fontWeight: '500',
            }}>
            Tags
          </Text>
          <View style={{position: 'relative'}}>
            <TextInput
              style={{
                width: '100%',
                height: 60,
                backgroundColor: 'rgba(28, 28, 28, 0.05)',
                borderRadius: 10,
                fontSize: 18,
                fontFamily: 'SF-Pro-Text-Regular',
                fontWeight: '400',
                paddingLeft: 45,
                paddingRight: 10,
              }}
              placeholder="Search or add tags"
              placeholderTextColor={Color.mianColor}
            />
            <Icon
              name="search"
              size={30}
              color={Color.mianColor}
              style={{position: 'absolute', top: 15, left: 10}}
            />
            <Icon
              name="plus-circle"
              size={30}
              color={Color.mianColor}
              style={{position: 'absolute', top: 15, right: 10}}
            />
          </View>
          <View style={{flexDirection: 'row', marginVertical: 6}}>
            <Tag text="Limited Time Offer" isSelected={true} />
          </View>
          <View style={{flexDirection: 'row', marginVertical: 6}}>
            <Tag text="On Sale" isSelected={true} />
          </View>
          <View style={{flexDirection: 'row', marginVertical: 6}}>
            <Tag text="New User Offer" isSelected={false} />
          </View>
          <View style={{flexDirection: 'row', marginVertical: 6}}>
            <Tag text="Christmas Offer" isSelected={false} />
          </View>
          <View style={{flexDirection: 'row', marginVertical: 6}}>
            <Tag text="Halloween Offer" isSelected={false} />
          </View>
        </View>
        <Button text="Add Mebmership" />
      </View>
    </ScrollView>
  );
};

export default CreateMemberShip;

const styles = StyleSheet.create({});
