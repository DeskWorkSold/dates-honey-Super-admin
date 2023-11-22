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
const CreateAdditionalPackage = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    price: '',
    limit: '',
    title: '',
    description: '',
  });
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
            Addtional Package
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
              Title
            </Text>
            <TextInput
              value={data.title}
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
              placeholder="Title"
              onChangeText={e => setData({...data, title: e})}
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
              Description
            </Text>
            <TextInput
              multiline={true}
              numberOfLines={6}
              value={data.description}
              keyboardType="number-pad"
              style={{
                marginVertical: 5,
                width: '100%',
                backgroundColor: 'white',
                elevation: 2,
                shadowOpacity: 0.4,
                borderRadius: 8,
                fontSize: 18,
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Regular',
                fontWeight: '400',
                paddingHorizontal: 10,
                textAlignVertical: 'top',
              }}
              placeholder="Description"
              onChangeText={e => setData({...data, description: e})}
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
              value={data.price}
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
              onChangeText={e => setData({...data, price: e})}
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
              Duration
            </Text>
            <TextInput
              value={data.limit}
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
              placeholder="Duration"
              onChangeText={e => setData({...data, limit: e})}
            />
          </View>
          <Button text="Add Package" />
        </View>
      </ScrollView>
    </>
  );
};

export default CreateAdditionalPackage;

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
