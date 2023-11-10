import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './src/Modules/MainScreens/index.jsx';
import Home from './src/Modules/Admin/Home/index.jsx';
import Login from './src/Modules/Registration/Login.jsx';
import MainBottomNavigation from './Navigation/AdminBottomNavigatons/index.jsx';
import Staff from './src/Modules/Admin/Home/Screens/Staff.jsx';
import GiveAccess from './src/Modules/Admin/Home/Screens/GiveAccess.jsx';

const Stack = createStackNavigator();

const App = () => {
  return (
   <>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ffffff" />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ADMIN" screenOptions={{headerShown:false}}>
        <Stack.Screen name="FIRST_SCREEN" component={MainScreen} />
        <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen name="ADMIN" component={MainBottomNavigation} />
        <Stack.Screen name="GIVE_ACCESS" component={GiveAccess} />
      </Stack.Navigator>
    </NavigationContainer>
   </>
  );
};

export default App;

const styles = StyleSheet.create({});
