import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../../../../Constant/Color';
import ArticleCard from '../../../Components/Article/Card';

const Article = () => {
  const [ArticleContent, setArticleContent] = useState([
    {
      id: 1,
      AutherName: 'St Star',
      status: 'news',
      inmin: "2",
      img: 'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      title: 'Ways to improve thinking 2',
      AutherImage:
        'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      Description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse, asperiores quaerat in architecto odit assumenda cum illum error nulla voluptate sit, veritatis eaque tempora beatae debitis at voluptatibus rerum!',
    },
    {
      id: 2,
      AutherName: 'St Star',
      status: 'training',
      inmin: "2",
      img: 'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      title: 'Ways to improve thinking 2',
      AutherImage:
        'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      Description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse, asperiores quaerat in architecto odit assumenda cum illum error nulla voluptate sit, veritatis eaque tempora beatae debitis at voluptatibus rerum!',
    },
    {
      id: 3,
      AutherName: 'St Star',
      status: 'news',
      inmin: "2",
      img: 'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      title: 'Ways to improve thinking 2',
      AutherImage:
        'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      Description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse, asperiores quaerat in architecto odit assumenda cum illum error nulla voluptate sit, veritatis eaque tempora beatae debitis at voluptatibus rerum!',
    },
    {
      id: 4,
      AutherName: 'St Star',
      status: 'training',
      inmin: "2",
      img: 'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      title: 'Ways to improve thinking 2',
      AutherImage:
        'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      Description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse, asperiores quaerat in architecto odit assumenda cum illum error nulla voluptate sit, veritatis eaque tempora beatae debitis at voluptatibus rerum!',
    },
    {
      id: 5,
      AutherName: 'St Star',
      status: 'training',
      inmin: "2",
      img: 'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      title: 'Ways to improve thinking 2',
      AutherImage:
        'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      Description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse, asperiores quaerat in architecto odit assumenda cum illum error nulla voluptate sit, veritatis eaque tempora beatae debitis at voluptatibus rerum!',
    },
    {
      id: 6,
      AutherName: 'St Star',
      status: 'training',
      inmin: "2",
      img: 'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      title: 'Ways to improve thinking 2',
      AutherImage:
        'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      Description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse, asperiores quaerat in architecto odit assumenda cum illum error nulla voluptate sit, veritatis eaque tempora beatae debitis at voluptatibus rerum!',
    },
  ]);
  const navigation = useNavigation();
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: Color.white}}>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../../assest/images/short_left.png')} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            fontFamily: 'SF-Pro-Text-Bold',
            color: Color.mianColor,
            marginLeft: 20,
          }}>
          Manage Article
        </Text>
        <View>
          <TouchableOpacity
          onPress={()=>navigation.navigate("ADD_NEW_ARTICLE")}
            style={{
              backgroundColor: Color.yellow,
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontWeight: '400',
                fontSize: 12,
                color: 'black',
              }}>
              Add New
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{marginTop: 20, marginBottom: 30}}
        showsVerticalScrollIndicator={false}>
        <View style={{width: '100%', paddingHorizontal: 20}}>
          {ArticleContent?.map(item => (
            <ArticleCard
              AutherImage={item.AutherImage}
              AutherName={item.AutherName}
              img={item.img}
              title={item.title}
              item={item}
              key={item.id}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Article;

const styles = StyleSheet.create({});
