import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Color} from '../../../Constant/Color';
import { useNavigation } from '@react-navigation/native';

const ArticleCard = ({AutherName,img,title,AutherImage,item}) => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 4,
        marginVertical: 10,
      }}>
      <Image
        style={{
          width: '100%',
          height: 200,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={{
          uri: img,
        }}
      />
      <View style={{paddingHorizontal: 10, marginVertical: 10}}>
        <Text
          numberOfLines={1}
          style={{
            color: 'black',
            opacity: 0.9,
            fontFamily: 'Poppins-Medium',
            fontWeight: '500',
            fontSize: 16,
          }}>
          {title}
        </Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:6}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 35, height: 35, borderRadius: 50}}
              source={{uri:AutherImage}}
            />
            <Text
              style={{
                color: 'black',
                opacity: 0.9,
                fontFamily: 'Poppins-Medium',
                fontWeight: '500',
                marginLeft: 5,
                fontSize: 15,
              }}>
              {AutherName}
            </Text>
          </View>
          <TouchableOpacity 
          onPress={()=>navigation.navigate("ARTICLE_DETAILS",{...item})}
            style={{
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 10,
              backgroundColor: Color.yellow,
            }}>
            <Text
              style={{
                color: 'black',
                opacity: 0.9,
                fontFamily: 'Poppins-Medium',
                fontWeight: '500',
                marginLeft: 5,
                fontSize: 14,
              }}>
              See Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({});
