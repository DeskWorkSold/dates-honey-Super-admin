import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

const NotesCard = () => {
  const [textShown,setTextShown] = useState(false)
  return (
    <View
      style={{
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 10,
        marginVertical: 8,
        padding: 10,
        width: '100%',
      }}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 40, height: 40, borderRadius: 50}}
            source={require('../../../assest/images/Avatarimage1.png')}
          />
          <View style={{marginLeft: 5}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Medium',
                color: 'black',
                fontWeight: '500',
              }}>
              Jhon
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontWeight: '400',
                fontSize: 12,
                color: 'black',
                opacity: 0.7,
                marginTop: -4,
              }}>
              2023/11/23
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={()=>setTextShown(!textShown)}>
      <Text
        numberOfLines={ textShown? undefined:5}
        style={{
          fontSize: 14,
          fontFamily: 'Poppins-Regular',
          fontWeight: '400',
          color: 'black',
          marginTop: 10,
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        nulla ipsum blanditiis incidunt perspiciatis porro commodi libero optio
        sunt est at consequatur pariatur assumenda in quaerat, ab voluptate
        eligendi minima vero velit, vel animi voluptatem ex. Enim incidunt
        ducimus suscipit quos iure ea aliquam iste doloribus nobis consectetur
        esse maxime quod atque eligendi reiciendis deleniti voluptatum, iusto et
        animi modi tempore corporis eveniet. Repudiandae possimus ex eos
        mollitia, eaque sint vitae magnam, tempore at a ut totam officia quidem
        sapiente natus cupiditate obcaecati quia enim aliquid maxime similique
        aperiam odit! Laboriosam corrupti, nisi ducimus dignissimos natus vel
        nesciunt voluptatem iusto?
      </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotesCard;

const styles = StyleSheet.create({});
