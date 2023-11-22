import {StyleSheet, Text, View, Image, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {STYLES} from '../../../../Constant/styles';
import {Color} from '../../../../Constant/Color';
import ManageClient from './Screens/ManageClient';
import ChatClient from './Screens/ChatClient';
import Radio from '../../../Components/Buttons/Radio';
import ManageCard from '../../../Components/Client/Card';
import Button from '../../../Components/Buttons';
import Select from '../../../Components/Select';

const Client = () => {
  const [tab, setTab] = useState(1);
  const [tab2, setTab2] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const openFilter = () => {
    setIsOpen(true);
  };
  return (
    <>
      <ScrollView
        style={[STYLES.container]}
        showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 100}}>
          <View
            style={{
              marginTop: 25,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity onPress={() => setModal(true)}>
              <Image source={require('../../../../assest/images/filter.png')} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                fontFamily: 'SF-Pro-Text-Bold',
                color: Color.mianColor,
                marginLeft: -20,
              }}>
              Clients
            </Text>
            <Text></Text>
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
                    Manage
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
                     Chat
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {tab == 1 ? <ManageClient /> : <ChatClient />}
        </View>
      </ScrollView>
      {/* <View
        style={{
          height: '80%',
          width: '100%',
          position: 'absolute',
          zIndex: 20,
          backgroundColor: 'white',
          bottom: 0,
        }}></View> */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}>
        <View style={{position: 'relative', height: '100%'}}>
          <View
            style={{
              marginTop: 25,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <Pressable onPress={() => setModal(!modal)}>
              <Image source={require('../../../../assest/images/clear.png')} />
            </Pressable>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                fontFamily: 'SF-Pro-Text-Bold',
                color: Color.mianColor,
                marginLeft: -20,
              }}>
              Filters
            </Text>
            <Text></Text>
          </View>
          <View style={{paddingHorizontal: 20, marginTop: 20}}>
            <View
              style={{
                width: '100%',
                height: 60,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'rgba(28, 28, 28, 0.20)',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Pressable
              onPress={()=>setTab2(1)}
                style={{
                  height: '100%',
                  paddingHorizontal: 0,
                 borderRadius:10,
                  width: '33.3%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: tab2 == 1 ? 1 : 0,
                }}>
                <Text
                  style={{
                    color: tab2 != 1 ? "rgba(0,0,0,0.7)" : '#2A3182',
                    fontSize: 18,
                    fontWeight: '500',
                    fontFamily:"Poppins-SemiBold"
                  }}>
                 {tab==1?"Male":"Last Hour"} 
                </Text>
              </Pressable>
              <Pressable
              onPress={()=>setTab2(2)}
                style={{
                  height: '100%',
                  paddingHorizontal: 0,
                  borderRadius: 10,
                  width: '33.3%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: tab2 == 2 ? 1 : 0,
                }}>
                <Text
                  style={{
                    color: tab2 != 2 ? "rgba(0,0,0,0.7)" : '#2A3182',
                    fontSize: 18,
                    fontWeight: '500',
                    fontFamily:"Poppins-SemiBold"
                  }}>
                  {tab==1?"Female":"Today"} 
                </Text>
              </Pressable>
              <Pressable
              onPress={()=>setTab2(3)}
                style={{
                  height: '100%',
                  paddingHorizontal: 0,
                  borderRadius: 10,
                  width: '33.3%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: tab2 == 3 ? 1 : 0,
                }}>
                <Text
                  style={{
                    color: tab2 != 3 ? "rgba(0,0,0,0.7)" : '#2A3182',
                    fontSize: 18,
                    fontWeight: '500',
                    fontFamily:"Poppins-SemiBold"
                  }}>
                  {tab==1?"Others":"All"} 
                </Text>
              </Pressable>
            </View>
            <View style={{marginTop:30,zIndex:13}}>
            <Select label="State" />
            </View>
            <View style={{marginTop:10,zIndex:12}}>
            <Select label="City" />
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 10,
              width: '100%',
              paddingHorizontal: 20,
            }}>
            <View style={{width: '100%'}}>
              <Button text="Apply" />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Client;

const styles = StyleSheet.create({});
