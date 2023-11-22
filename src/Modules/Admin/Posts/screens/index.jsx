import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Color} from '../../../../../Constant/Color';

const {width, height} = Dimensions.get('window');

const PostDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  let {title, img, desc, status} = route.params;
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: Color.white}}>
      <View
        style={{
          marginTop: 10,
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
            fontSize: 20,
            fontWeight: '700',
            fontFamily: 'SF-Pro-Text-Bold',
            color: Color.mianColor,
            marginLeft: -20,
          }}>
          Check Post
        </Text>
        <Text></Text>
      </View>
      <ScrollView
        style={{paddingHorizontal: 20, marginTop: 20}}
        showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={{width: '100%', height: 200, borderRadius: 10}}
            source={{uri: img}}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-Regular',
              fontWeight: '400',
              color: 'black',
            }}>
            Title
          </Text>
          <TextInput
            value={title}
            style={{
              width: '100%',
              height: 50,
              borderWidth: 1,
              color: 'black',
              borderRadius: 10,
              marginTop: 5,
              paddingHorizontal: 10,
              fontSize: 16,
              borderColor: '#D0D5DD',
            }}
            placeholder="Title"
            editable={false}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-Regular',
              fontWeight: '400',
              color: 'black',
            }}>
            Description
          </Text>
          <TextInput
            multiline
            numberOfLines={7}
            value={desc}
            style={{
              width: '100%',
              borderWidth: 1,
              color: 'black',
              borderRadius: 10,
              marginTop: 5,
              paddingHorizontal: 10,
              fontSize: 16,
              borderColor: '#D0D5DD',
              textAlignVertical: 'top',
            }}
            placeholder="Title"
            editable={false}
          />
        </View>
        {
          status==0&&(
            <View style={{marginTop: height / 10,justifyContent:"space-between",flexDirection:"row"}}>
          <TouchableOpacity
            style={{
              width: '45%',
              height: 50,
              borderRadius: 10,
              borderColor: '#E94057',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#E94057',
                fontFamily: 'Poppins-Medium',
                fontSize: 15,
                fontWeight: '500',
              }}>
              Reject
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '45%',
              height: 50,
              borderRadius: 10,
              backgroundColor:Color.yellow,
              // borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: "black",
                fontFamily: 'Poppins-Medium',
                fontSize: 15,
                fontWeight: '500',
              }}>
              Approved
            </Text>
          </TouchableOpacity>
        </View>
          )
        }
      </ScrollView>
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({});
