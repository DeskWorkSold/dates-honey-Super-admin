import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Color} from '../../../Constant/Color';
import Radio from '../Buttons/Radio';

const ManageCard = ({data,OnSelected,selectedItems,deSelected}) => {
  
  return (
    <View
      style={{
        width: '100%',
        marginVertical: 10,
        height: 130,
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.08,
        shadowRadius: 0.08,
        elevation: 4,
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View>
        <Image
          source={require('../../../assest/images/loginbackground.png')}
          style={{
            width: 110,
            height: 110,
            borderRadius: 60,
            borderColor: Color.yellow,
            borderWidth: 4,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            fontFamily: 'SF-Pro-Text-Medium',
            color: Color.mianColor,
          }}>
         {data.name}
        </Text>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.07)',
            paddingHorizontal: 14,
            paddingVertical: 2,
            borderRadius: 10,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={require('../../../assest/images/cup.png')} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'SF-Pro-Text-Regular',
              color: Color.mianColor,
            }}>
            {' '}
            Want to date
          </Text>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <View style={{alignSelf: 'flex-end', marginRight: 10}}>
          <Radio isOpen={selectedItems[data.id]} func={()=>selectedItems[data.id]?deSelected():OnSelected()} />
        </View>
        <View
          style={{
            backgroundColor: Color.yellow,
            paddingHorizontal: 14,
            paddingVertical: 2,
            borderRadius: 10,
            marginTop: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'SF-Pro-Text-Regular',
              color: Color.mianColor,
            }}>
            Details
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ManageCard;

const styles = StyleSheet.create({});
