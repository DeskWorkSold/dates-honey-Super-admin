import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../Constant/styles';
import {Color} from '../../../Constant/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../Components/Buttons';

const MainScreen = () => {
  const [Id, setId] = useState(1);
  const [MainItems, setMianItem] = useState([
    {
      id: 1,
      text: 'Photographer',
      isSelected: true,
    },
    {
      id: 2,
      text: 'Makeup artist',
      isSelected: false,
    },
    {
      id: 3,
      text: 'Mediator',
      isSelected: false,
    },
    {
      id: 4,
      text: 'Yelp Restaurant',
      isSelected: false,
    },
    {
      id: 5,
      text: 'Lawyer',
      isSelected: false,
    },
  ]);
  return (
    <>
      <ScrollView style={STYLES.container} showsVerticalScrollIndicator={false}>
        <Image
          style={{alignSelf: 'center', marginTop: 50}}
          source={require('../../../assest/images/AppLogo.png')}
        />
        <Text
          style={{
            fontSize: 23, 
            fontWeight: '700',
            fontFamily: 'Poppins-Bold',
            color: Color.mianColor,
            alignSelf: 'center',
            marginTop: 30,
          }}>
          Log in As
        </Text>
        <View style={{marginHorizontal: 20, marginVertical: 30}}>
          {MainItems.map(({text, id, isSelected}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setId(id);
                }}
                key={id}
                style={{
                  width: '100%',
                  height: 60,
                  borderRadius: 10,
                  borderColor: Color.yellow,
                  borderWidth: id == Id ? 2 : 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: id != Id ? 2 : 0,
                  shadowColor: 'rgba(0, 0, 0, 0.9)',
                  shadowOffset: {width: 0, height: 2.42353},
                  shadowRadius: 10.09804,
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    color: Color.mianColor,
                    fontSize: 18,
                    fontFamily: 'SF-Pro-Text-Regular',
                    fontWeight: '400',
                  }}>
                  Log in as {text}
                </Text>
              </TouchableOpacity>
            );
          })}
          <Button text="Continue"/>
        </View>
      </ScrollView>
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
