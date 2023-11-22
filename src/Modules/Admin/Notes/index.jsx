import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Color} from '../../../../Constant/Color';
import {useNavigation} from '@react-navigation/native';
import NotesCard from '../../../Components/Notes';

const Notes = () => {
  const navigation = useNavigation();
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
          <Image source={require('../../../../assest/images/short_left.png')} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            fontFamily: 'SF-Pro-Text-Bold',
            color: Color.mianColor,
            marginLeft: -20,
          }}>
          Manage Notes
        </Text>
        <Text></Text>
      </View>
      <ScrollView style={{marginTop:20}} showsVerticalScrollIndicator={false}>
        <View style={{width:"100%",paddingHorizontal:20}}>
          <NotesCard/>
          <NotesCard/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
