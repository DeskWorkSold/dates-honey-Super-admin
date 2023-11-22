import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePickerModal = ({isVisible, onConfirm, onCancel, mode}) => {
  return (
    <DateTimePickerModal
      isVisible={isVisible}
      mode={mode}
      // display='spinner'
      onConfirm={onConfirm}
      onCancel={onCancel}
      minimumDate={new Date()} // Set maximum date to the current date
    />
  );
};

export default DatePickerModal;

const styles = StyleSheet.create({});
