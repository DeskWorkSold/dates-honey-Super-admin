import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Color } from '../../Constant/Color';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../src/Modules/Admin/Home';
import Staff from '../../src/Modules/Admin/Home/Screens/Staff';
import Client from '../../src/Modules/Admin/Client';
import Events from '../../src/Modules/Admin/Event';
import Profile from '../../src/Modules/Admin/Profile';
import AddedEvent from '../../src/Modules/Admin/Event/Screens/AddedEvent';
import ClientPriceManagement from '../../src/Modules/Admin/ClientPriceManagement';
import CrewManagePricing from '../../src/Modules/Admin/CrewPriceManagement';

const Tab = createBottomTabNavigator();

const MainBottomNavigation = () => {
  const navigation = useNavigation();
  const [AdminRoute, setAdminRoute] = useState('HOME');
  const AdminItems = [
    {
      activeImg: <Icon name="house" size={25} color={Color.mianColor}  />,
      unActiveImg: <Icon name="house" size={25} color="rgba(0,0,0,0.3)"/>,
      id: 1,
      text: 'Home',
      Route: 'HOME',
    },
    {
      activeImg: <Icon name="users" size={25} color={Color.mianColor}/>,
      unActiveImg: <Icon name="users" size={25} color="rgba(0,0,0,0.3)"/>,
      id: 2,
      text: 'Client',
      Route: 'CLIENT',
    },
    {
      activeImg: <Icon name="calendar-days" size={25} color={Color.mianColor}/>,
      unActiveImg: <Icon name="calendar-days" size={25} color="rgba(0,0,0,0.3)"/>,
      id: 4,
      text: 'Event',
      Route: 'EVENT',
    },
    {
      activeImg: <Icon name="user-large" size={25} color={Color.mianColor}/>,
      unActiveImg: <Icon name="user-large" size={25} color="rgba(0,0,0,0.3)"/>,
      id: 5,
      text: 'Profile',
      Route: 'PROFILE',
    },
  ];
  return (
   <>
    <View
      style={{
        backgroundColor: '#fff',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        height: 80,
        elevation: 5,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        width: '100%',
        justifyContent: 'space-around',
        paddingTop: 10,
        alignItems: 'center',
      }}>
      {AdminItems.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.item,
              {
                backgroundColor:
                  AdminRoute == item.Route ? '#FFFAE4' : 'transparent',
              },
            ]}
            onPress={() => {
              navigation.navigate(item.Route);
              setAdminRoute(item.Route);
              console.log(item.Route);
            }}>
            {/* <Image
              style={{
                tintColor: AdminRoute == item.Route ? 'white' : '#9C9C9C',
              }}
              key={item.id}
              source={
                AdminRoute == item.Route ? item.activeImg : item.unActiveImg
              }
            /> */}
            {AdminRoute == item.Route ? item?.activeImg : item?.unActiveImg}
            <Text
              style={{
                display: AdminRoute == item.Route ? 'flex' : 'none',
                fontSize: 16,
                marginLeft: 6,
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Regular',
                fontWeight:"500"
              }}>
              {item.text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
    <Tab.Navigator
        initialRouteName={"HOME"}
        screenOptions={{headerShown: false, tabBarStyle: {display: 'none'}}}>
        <Tab.Screen name='HOME' component={Home} />
        <Tab.Screen name='CLIENT' component={Client} />
        <Tab.Screen name='EVENT' component={Events} />
        <Tab.Screen name='PROFILE' component={Profile} />
        <Tab.Screen name='STAFF' component={Staff} />
        <Tab.Screen name='ADDED_EVENT' component={AddedEvent} />
        <Tab.Screen name='CLIENT_PRICE_MANAGEMENT' component={ClientPriceManagement} />
        <Tab.Screen name='CREW_PRICE_MANAGEMENT' component={CrewManagePricing} />
      </Tab.Navigator>
   </>
  );
};

export default MainBottomNavigation;

const styles = StyleSheet.create({
  item: {
    // height:"100%",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});
