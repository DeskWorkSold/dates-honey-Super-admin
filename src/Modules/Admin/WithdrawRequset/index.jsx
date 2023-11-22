import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Modal, Pressable} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {STYLES} from '../../../../Constant/styles';
import {Color} from '../../../../Constant/Color';
import PendingWithDraw from './Screens/Pending';
import CompletedWithDraw from './Screens/Completed';

const WithdrawRequest = () => {
  const [tab, setTab] = useState(1);
  const [tab2, setTab2] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ScrollView
        style={[STYLES.container]}
        showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 100}}>
          <View
            style={{
              marginTop: 25,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                fontFamily: 'SF-Pro-Text-Bold',
                color: Color.mianColor,
              }}>
              Withdraw Request
            </Text>
          </View>
          <View style={{paddingHorizontal: 20, marginTop: 20}}>
            <View
              style={{
                width: '100%',
                height: 60,
                backgroundColor: 'rgba(0,0,0,0.04)',
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <View style={{width: '50%'}}>
                <TouchableOpacity
                  onPress={() => setTab(1)}
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: tab == 1 ? Color.yellow : 'transparent',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: tab != 1 ? "rgba(0,0,0,0.6)" : Color.mianColor,
                      fontSize: 20,
                      fontFamily: 'SF-Pro-Text-Medium',
                      fontWeight: '500',
                    }}>
                    Pendings
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{width: '50%'}}>
                <TouchableOpacity
                  onPress={() => setTab(2)}
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: tab == 2 ? Color.yellow : 'transparent',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: tab != 2 ? "rgba(0,0,0,0.6)" : Color.mianColor,
                      fontSize: 20,
                      fontFamily: 'SF-Pro-Text-Medium',
                      fontWeight: '500',
                    }}>
                     Completed
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {tab == 1 ? <PendingWithDraw /> : <CompletedWithDraw />}
        </View>
      </ScrollView>
  );
};

export default WithdrawRequest;

const styles = StyleSheet.create({});
