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
import React, { useState } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Color} from '../../../../../Constant/Color';
import { launchImageLibrary } from 'react-native-image-picker';
import Button from '../../../../Components/Buttons';

const {width, height} = Dimensions.get('window');

const AddNewArticle = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState("");
  // const route = useRoute();
  // let {title, img, Description,inmin, status,AutherName,AutherImage} = route.params;
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
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
          Add New Article
        </Text>
        <Text></Text>
      </View>
      <ScrollView
        style={{paddingHorizontal: 20, marginTop: 20,marginBottom:30}}
        showsVerticalScrollIndicator={false}>
        <View>
        <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
              fontWeight: '400',
              color: 'black',
            }}>
            Add Image
          </Text>
            <TouchableOpacity
            onPress={openImagePicker}
              style={{
                backgroundColor: 'rgba(28, 28, 28, 0.05)',
                height: 220,
                width: '100%',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {
                selectedImage?<Image style={{width:"100%",height:"100%",borderRadius:10}}
                source={{uri:selectedImage&&selectedImage}}
              />:<Image
                source={require('../../../../../assest/images/ImageShowIcon.png')}
              />
              }
            </TouchableOpacity>
          </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
              fontWeight: '400',
              color: 'black',
            }}>
            Title
          </Text>
          <TextInput
            // value={title}
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
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
              fontWeight: '400',
              color: 'black',
            }}>
            Description
          </Text>
          <TextInput
            multiline
            numberOfLines={7}
            // value={Description}
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
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
              fontWeight: '400',
              color: 'black',
            }}>
            Status
          </Text>
          <TextInput
            // value={status}
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
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
              fontWeight: '400',
              color: 'black',
            }}>
            Reading Time
          </Text>
          <TextInput
            // value={inmin}
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
              <Button text="Upload" />
            </View>
          </View>
      </ScrollView>
    </View>
  );
};

export default AddNewArticle;

const styles = StyleSheet.create({});
