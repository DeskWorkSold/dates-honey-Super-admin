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
import Button from '../../../../Components/Buttons';

const {width, height} = Dimensions.get('window');

const ArticleDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  let {title, img, Description,inmin, status,AutherName,AutherImage} = route.params;
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
          Article
        </Text>
        <Text></Text>
      </View>
      <ScrollView
        style={{paddingHorizontal: 20, marginTop: 20,marginBottom:30}}
        showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={{width: '100%', height: 200, borderRadius: 10}}
            source={{uri: img}}
          />
        </View>
        {/* <View style={{width:"100%",height:1,backgroundColor:"#D0D5DD",marginTop:10}} />
        <View style={{marginVertical:10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 40, height: 40, borderRadius: 50}}
              source={{uri:AutherImage}}
            />
            <Text
              style={{
                color: 'black',
                opacity: 0.9,
                fontFamily: 'Poppins-Medium',
                fontWeight: '500',
                marginLeft: 5,
                fontSize: 18,
              }}>
              {AutherName}
            </Text>
          </View>
        </View>
        <View style={{width:"100%",height:1,backgroundColor:"#D0D5DD",marginTop:10}} /> */}
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
            value={Description}
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
            placeholder="Description"
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
            Status
          </Text>
          <TextInput
            value={status}
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
            placeholder="Status"
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
            Reading Time
          </Text>
          <TextInput
            value={inmin}
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
            placeholder="Reading Time"
            keyboardType='number-pad'
          />
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
      </ScrollView>
    </View>
  );
};

export default ArticleDetail;

const styles = StyleSheet.create({});
