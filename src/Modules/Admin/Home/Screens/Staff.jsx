import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {STYLES} from '../../../../../Constant/styles';
import {Color} from '../../../../../Constant/Color';
import Icon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/Entypo';
import {useNavigation} from "@react-navigation/native"

const Staff = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={STYLES.container} showsVerticalScrollIndicator={false}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '700',
          fontFamily: 'SF-Pro-Text-Bold',
          color: Color.mianColor,
          alignSelf: 'center',
          marginTop: 25,
        }}>
        Manage Staff
      </Text>
      <View style={{width: '100%', padding: 20}}>
        <View style={{position: 'relative'}}>
          <TextInput
            style={{
              width: '100%',
              height: 60,
              backgroundColor: 'rgba(28, 28, 28, 0.05)',
              borderRadius: 10,
              fontSize: 18,
              fontFamily: 'SF-Pro-Text-Regular',
              fontWeight: '400',
              paddingLeft: 45,
              paddingRight: 10,
            }}
            placeholder="Search or add tags"
            placeholderTextColor={Color.mianColor}
          />
          <Icon
            name="search"
            size={30}
            color={Color.mianColor}
            style={{position: 'absolute', top: 15, left: 10}}
          />
          <Icon
            name="plus-circle"
            size={30}
            color={Color.mianColor}
            style={{position: 'absolute', top: 15, right: 10}}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Color.yellow,
              paddingHorizontal: 20,
              borderRadius: 10,
              paddingVertical: 2,
              marginRight: 10,
            }}>
            <Text
              style={{
                fontFamily: 'SF-Pro-Text-Regular',
                color: Color.mianColor,
                fontSize: 18,
              }}>
              # Lawyer{' '}
            </Text>
            <TouchableOpacity>
            <EIcon
              name="cross"
              size={22}
              style={{fontWeight: '400'}}
              color={Color.mianColor}
            />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Color.yellow,
              paddingHorizontal: 20,
              borderRadius: 10,
              paddingVertical: 2,
              marginRight: 10,
            }}>
            <Text
              style={{
                fontFamily: 'SF-Pro-Text-Regular',
                color: Color.mianColor,
                fontSize: 18,
              }}>
              # Vendor{' '}
            </Text>
            <TouchableOpacity>
            <EIcon
              name="cross"
              size={22}
              style={{fontWeight: '400'}}
              color={Color.mianColor}
            />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{marginBottom: 100}}>
        <View
          style={{
            width: '100%',
            height: 170,
            backgroundColor: 'rgba(28, 28, 28, 0.04)',
            marginVertical: 10,
            paddingHorizontal: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../../../../assest/images/loginbackground.png')}
            style={{
              width: 135,
              height: 135,
              borderRadius: 65,
              borderColor: Color.yellow,
              borderWidth: 6,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 28,
                fontWeight: '800',
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Heavy',
              }}>
              Stoe Woe
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: 5,
                fontWeight: '400',
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Regular',
              }}>
              Lawyer
            </Text>
          </View>
          <TouchableOpacity
          onPress={()=>navigation.navigate("GIVE_ACCESS")}
            style={{
              backgroundColor: Color.mianColor,
              borderRadius: 10,
              paddingVertical: 8,
              paddingHorizontal: 10,
              marginTop: 45,
            }}>
            <Text style={{color: Color.white, fontSize: 16}}>Give Access</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 170,
            backgroundColor: 'rgba(28, 28, 28, 0.04)',
            marginVertical: 10,
            paddingHorizontal: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../../../../assest/images/loginbackground.png')}
            style={{
              width: 135,
              height: 135,
              borderRadius: 65,
              borderColor: Color.yellow,
              borderWidth: 6,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 28,
                fontWeight: '800',
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Heavy',
              }}>
              Stoe Woe
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: 5,
                fontWeight: '400',
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Regular',
              }}>
              Lawyer
            </Text>
          </View>
          <TouchableOpacity
          onPress={()=>navigation.navigate("GIVE_ACCESS")}
            style={{
              backgroundColor: Color.mianColor,
              borderRadius: 10,
              paddingVertical: 8,
              paddingHorizontal: 10,
              marginTop: 45,
            }}>
            <Text style={{color: Color.white, fontSize: 16}}>Give Access</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 170,
            backgroundColor: 'rgba(28, 28, 28, 0.04)',
            marginVertical: 10,
            paddingHorizontal: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../../../../assest/images/loginbackground.png')}
            style={{
              width: 135,
              height: 135,
              borderRadius: 65,
              borderColor: Color.yellow,
              borderWidth: 6,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 28,
                fontWeight: '800',
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Heavy',
              }}>
              Stoe Woe
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: 5,
                fontWeight: '400',
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Regular',
              }}>
              Lawyer
            </Text>
          </View>
          <TouchableOpacity
          onPress={()=>navigation.navigate("GIVE_ACCESS")}
            style={{
              backgroundColor: Color.mianColor,
              borderRadius: 10,
              paddingVertical: 8,
              paddingHorizontal: 10,
              marginTop: 45,
            }}>
            <Text style={{color: Color.white, fontSize: 16}}>Give Access</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 170,
            backgroundColor: 'rgba(28, 28, 28, 0.04)',
            marginVertical: 10,
            paddingHorizontal: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../../../../assest/images/loginbackground.png')}
            style={{
              width: 135,
              height: 135,
              borderRadius: 65,
              borderColor: Color.yellow,
              borderWidth: 6,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 28,
                fontWeight: '800',
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Heavy',
              }}>
              Stoe Woe
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: 5,
                fontWeight: '400',
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Regular',
              }}>
              Lawyer
            </Text>
          </View>
          <TouchableOpacity
          onPress={()=>navigation.navigate("GIVE_ACCESS")}
            style={{
              backgroundColor: Color.mianColor,
              borderRadius: 10,
              paddingVertical: 8,
              paddingHorizontal: 10,
              marginTop: 45,
            }}>
            <Text style={{color: Color.white, fontSize: 16}}>Give Access</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 170,
            backgroundColor: 'rgba(28, 28, 28, 0.04)',
            marginVertical: 10,
            paddingHorizontal: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../../../../assest/images/loginbackground.png')}
            style={{
              width: 135,
              height: 135,
              borderRadius: 65,
              borderColor: Color.yellow,
              borderWidth: 6,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 28,
                fontWeight: '800',
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Heavy',
              }}>
              Stoe Woe
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: 5,
                fontWeight: '400',
                color: Color.mianColor,
                fontFamily: 'SF-Pro-Text-Regular',
              }}>
              Lawyer
            </Text>
          </View>
          <TouchableOpacity
          onPress={()=>navigation.navigate("GIVE_ACCESS")}
            style={{
              backgroundColor: Color.mianColor,
              borderRadius: 10,
              paddingVertical: 8,
              paddingHorizontal: 10,
              marginTop: 45,
            }}>
            <Text style={{color: Color.white, fontSize: 16}}>Give Access</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Staff;

const styles = StyleSheet.create({});
