import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color } from '../../../Constant/Color'

const Radio = ({isOpen,func}) => {
  return (
    <TouchableOpacity
    onPress={func}
    style={{
      width: 20,
      height: 20,
      borderRadius: 10,
      borderColor: Color.mianColor,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
   {
    isOpen&& <View
    style={{
      width: 10,
      height: 10,
      borderRadius: 6,
      backgroundColor: Color.mianColor,
      borderWidth: 2,
    }}></View>
   }
  </TouchableOpacity>
  )
}

export default Radio

const styles = StyleSheet.create({})