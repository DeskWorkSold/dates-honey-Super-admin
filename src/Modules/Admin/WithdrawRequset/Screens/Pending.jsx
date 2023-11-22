import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WithdrawRequsetCard from '../../../../Components/WithdrawRequest'

const PendingWithDraw = () => {
  return (
    <View style={{width: '100%', height: '100%',marginVertical:20}}>
      <WithdrawRequsetCard/>
      </View>
  )
}

export default PendingWithDraw

const styles = StyleSheet.create({})