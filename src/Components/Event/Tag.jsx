import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Color} from '../../../Constant/Color';
import EIcon from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Ionicons';

const Tag = ({isSelected, text,isHash=true}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: isSelected ? Color.yellow : 'transparent',
        paddingHorizontal: 15,
        borderRadius: 10,
        paddingVertical: isSelected ?5:4,
        marginRight: 10,
        borderWidth: isSelected ? 0 : 1,
      }}>
      <Text
        style={{
          fontFamily: 'SF-Pro-Text-Regular',  
          color: Color.mianColor,
          fontSize: 18,
        }}>
        {isHash&&"#"} {text}{' '}
      </Text>
      <TouchableOpacity>
        {
          !isSelected?
          <EIcon
            name="plus"
            size={19}
            style={{fontWeight: '400'}}
            color={Color.mianColor}
          />:
        <Icon
          name="close"
          size={22}
          style={{fontWeight: '400'}}
          color={Color.mianColor}
        />
        }
      </TouchableOpacity>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({});
