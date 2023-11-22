import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatCard from '../../../../Components/Client/ChatCard';

const ChatClient = () => {
  return (
    <View style={{width: '100%', height: '100%',marginVertical:20}}>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
    </View>
  );
};

export default ChatClient;

const styles = StyleSheet.create({});
