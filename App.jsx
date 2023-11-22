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
import ChatDetails from './src/Modules/Admin/Client/Screens/ChatDetails.jsx';
import EventDetails from './src/Modules/Admin/Event/Screens/EventDetails.jsx';
import Notifications from './src/Modules/Admin/Notification/index.jsx';
import CreateNotifictaion from './src/Modules/Admin/Notification/Screens/CreateNotifictaion.jsx';
import EditNotifications from './src/Modules/Admin/Notification/Screens/EditNotification.jsx';
import CreateMemberShip from './src/Modules/Admin/ClientPriceManagement/Screens/index.jsx';
import Coupon from './src/Modules/Admin/ClientPriceManagement/Screens/Coupon.jsx';
import CreateAdditionalPackage from './src/Modules/Admin/ClientPriceManagement/Screens/AddtionalPackages.jsx';
import Infulencer from './src/Modules/Admin/CrewPriceManagement/Screens/Infulencer.jsx';
import OnBoarding from './src/Modules/Admin/CrewPriceManagement/Screens/OnBoarding.jsx';
import WithdrawRequest from './src/Modules/Admin/WithdrawRequset/index.jsx';
import WithDrawDetials from './src/Modules/Admin/WithdrawRequset/Screens/WithDrawDetials.jsx';
import Posts from './src/Modules/Admin/Posts/index.jsx';
import PostDetails from './src/Modules/Admin/Posts/screens/index.jsx';
import Article from './src/Modules/Admin/Article/index.jsx';
import ArticleDetail from './src/Modules/Admin/Article/Screens/index.jsx';
import AddNewArticle from './src/Modules/Admin/Article/Screens/AddNew.jsx';
import Notes from './src/Modules/Admin/Notes/index.jsx';

const Stack = createStackNavigator();

const App = () => {
  return (
   <>
    <StatusBar barStyle = "dark-content" hidden = {false}   backgroundColor = "#ffffff" />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LOGIN" screenOptions={{headerShown:false}}>
        <Stack.Screen name="FIRST_SCREEN" component={MainScreen} />
        <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen name="ADMIN" component={MainBottomNavigation} />
        <Stack.Screen name="GIVE_ACCESS" component={GiveAccess} />
        <Stack.Screen name="CHAT_DETAILS" component={ChatDetails} />
        <Stack.Screen name="EVENT_DETAIL" component={EventDetails} />
        <Stack.Screen name='NEW_NOTIFICATION' component={CreateNotifictaion} /> 
        <Stack.Screen name='EDIT_NOTIFICATION' component={EditNotifications} /> 
        <Stack.Screen name='NOTIFICATION' component={Notifications} />
        <Stack.Screen name='COUPON' component={Coupon} />
        <Stack.Screen name='CREATE_MEMBERSHIP' component={CreateMemberShip} />
        <Stack.Screen name='ADDTIONAL_PACKAGE' component={CreateAdditionalPackage} />
        <Stack.Screen name='INFUENCER' component={Infulencer} />
        <Stack.Screen name='ON_BOARDING' component={OnBoarding} />
        <Stack.Screen name='WITHDRAW_REQUEST' component={WithdrawRequest} />
        <Stack.Screen name='WITHDRAW_DETAILS' component={WithDrawDetials} />
        <Stack.Screen name='POSTS' component={Posts} />
        <Stack.Screen name='POSTS_DETAILS' component={PostDetails} />
        <Stack.Screen name='ARTICLE' component={Article} />
        <Stack.Screen name='ARTICLE_DETAILS' component={ArticleDetail} />
        <Stack.Screen name='ADD_NEW_ARTICLE' component={AddNewArticle} />
        <Stack.Screen name='NOTES' component={Notes} />
      </Stack.Navigator>
    </NavigationContainer>
   </>
  );
};

export default App;

const styles = StyleSheet.create({});
