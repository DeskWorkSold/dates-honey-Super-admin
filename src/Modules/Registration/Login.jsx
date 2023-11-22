import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import React from 'react';
import Button from '../../Components/Buttons';
import {ScrollView} from 'react-native-gesture-handler';
import {Color} from '../../../Constant/Color';
import {useNavigation} from "@react-navigation/native"

const {width, height} = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation()
  return (
    <>
     <StatusBar barStyle = "dark-content" hidden = {true}/>
    <ImageBackground
      source={require('../../../assest/images/loginbackground.png')}
      resizeMode="cover"
      style={StyleSheet.absoluteFillObject}>
      <View style={styles.overlay} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: '100%', height: height, justifyContent: 'center'}}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../../../assest/images/AppLogo.png')}
          />
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                color: Color.white,
                width: '70%',
                fontSize: 18,
                fontWeight: '400',
                marginTop: 20,
              }}>
              Mind it Never let a fool kiss you. Or a kiss fool you
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: Color.white,
                fontSize: 20,
                fontWeight: '400',
                fontFamily: 'SF-Pro-Text-Regular',
                marginTop: 20,
              }}>
              Let`s get started
            </Text>
            <View style={{marginTop: 20, width: '100%', paddingHorizontal:20}}>
              <TextInput
                style={{
                  backgroundColor: Color.white,
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: Color.yellow,
                  width: '100%',
									height:60,
									paddingHorizontal:20,
									fontSize:18,
									color:Color.mianColor,
									fontFamily: 'SF-Pro-Text-Regular',
                }}
								placeholder='Enter Your Email'
              />
              <TextInput
							keyboardType='visible-password'
							secureTextEntry
                style={{
                  backgroundColor: Color.white,
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: Color.yellow,
                  width: '100%',
									height:60,
									paddingHorizontal:20,
									fontSize:18,
									color:Color.mianColor,
									fontFamily: 'SF-Pro-Text-Regular',
									marginTop:10
                }}
								placeholder='Enter Your Password'
              />
							<View style={{width:"100%",marginTop:10}}>
							<Button text="Continue With Email" onPress={()=>navigation.replace("ADMIN")}/>
							</View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  absoluteFillObject: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    // height:height,
    // width:width,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
