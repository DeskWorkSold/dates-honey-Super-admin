import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WithdrawRequsetCard from '../../../../Components/WithdrawRequest';

const CompletedWithDraw = () => {
  return (
    <View style={{width: '100%', height: '100%',marginVertical:20}}>
      <WithdrawRequsetCard isCompleted={true}/>
      </View>
  );
};

export default CompletedWithDraw;

const styles = StyleSheet.create({});
