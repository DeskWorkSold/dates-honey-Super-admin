import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ManageCard from '../../../../Components/Client/Card';
import {ScrollView} from 'react-native-gesture-handler';
import {STYLES} from '../../../../../Constant/styles';
import {Color} from '../../../../../Constant/Color';

const ManageClient = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Jhon Doe',
      gender: 'male',
      cheked: false,
    },
    {
      id: 2,
      name: 'Jhon Doe',
      gender: 'male',
      cheked: false,
    },
    {
      id: 3,
      name: 'Jhon Doe',
      gender: 'male',
      cheked: false,
    },
    {
      id: 4,
      name: 'Jhon Doe',
      gender: 'male',
      cheked: false,
    },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  const OnSelected = item => {
    let items = data[item.id];
    items = {...items, cheked: true};
    setSelectedItems([...selectedItems,items]);
  };
  const deSelected = item => {
   let items = selectedItems.filter((data)=>data.id != item.id)
   console.log(items)
   setSelectedItems(items)
  };
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{paddingHorizontal: 20, marginVertical: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 10,
            alignSelf: 'flex-end',
          }}>
          <Text style={{color: Color.white, fontSize: 18, fontWeight: '500'}}>
            Selected
          </Text>
        </TouchableOpacity>
      </View>
      {data.map(data => {
        return (
          <ManageCard
            data={data}
            OnSelected={() => OnSelected(data)}
            selectedItems={selectedItems}
            deSelected={()=>deSelected(data)}
          />
        );
      })}
    </View>
  );
};

export default ManageClient;

const styles = StyleSheet.create({});
