import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Dimensions,
  ActivityIndicator,
  ToastAndroid,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Color} from '../../../../Constant/Color';
import moment from 'moment';

const {width, height} = Dimensions.get('window');

const Posts = ({navigation, route}) => {
  // const {data} = route?.params;
  // const videoRef = useRef(null);

  // console.log(data);
  const [showPoppup, setShowPoppup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectItem, setSelectItem] = useState('');
  const [modalData, setModalData] = useState(null);
  const [numberOfWords, setNumberOfWords] = useState(70);
  const [VideoContent, setVideoContent] = useState([
    {
      id: 1,
      img: 'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      title: 'Ways to improve thinking 2',
      status: 0,
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse, asperiores quaerat in architecto odit assumenda cum illum error nulla voluptate sit, veritatis eaque tempora beatae debitis at voluptatibus rerum!',
    },
    {
      id: 2,
      img: 'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      title: 'Ways to improve thinking 2',
      status: 1,
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse, asperiores quaerat in architecto odit assumenda cum illum error nulla voluptate sit, veritatis eaque tempora beatae debitis at voluptatibus rerum!',
    },
    {
      id: 3,
      img: 'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      title: 'Ways to improve thinking 2',
      status: 1,
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse, asperiores quaerat in architecto odit assumenda cum illum error nulla voluptate sit, veritatis eaque tempora beatae debitis at voluptatibus rerum!',
    },
    {
      id: 4,
      img: 'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      title: 'Ways to improve thinking 2',
      status: 1,
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse, asperiores quaerat in architecto odit assumenda cum illum error nulla voluptate sit, veritatis eaque tempora beatae debitis at voluptatibus rerum!',
    },
    {
      id: 5,
      img: 'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      title: 'Ways to improve thinking 2',
      status: 1,
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse, asperiores quaerat in architecto odit assumenda cum illum error nulla voluptate sit, veritatis eaque tempora beatae debitis at voluptatibus rerum!',
    },
    {
      id: 6,
      img: 'https://firebasestorage.googleapis.com/v0/b/datesandhoney-50496.appspot.com/o/Events%2FFrame%201000002344%20(1).png?alt=media&token=bdb65729-bbf9-4a0f-948c-8a06f9084c9f',
      title: 'Ways to improve thinking 2',
      status: 0,
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse, asperiores quaerat in architecto odit assumenda cum illum error nulla voluptate sit, veritatis eaque tempora beatae debitis at voluptatibus rerum!',
    },
  ]);
  const [uploading, setUploading] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tab, setTab] = useState(1);

  // console.log(startDate, endDate);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = date => {
    if (!startDate) {
      setStartDate(date);
      // console.log('here');
    } else if (!endDate) {
      if (date < startDate) {
        // Swap start and end dates if needed
        setEndDate(startDate);
        setStartDate(date);
      } else {
        // console.log('here2');
        setEndDate(date);
      }
    } else {
      setStartDate(date);
      setEndDate(null);
    }

    hideDatePicker();
  };

  const onSelectItem = name => {
    setSelectItem(name);
    setIsOpen(false);
  };

  // const fetchContent = () => {
  //     setUploading(true)
  //     firestore()
  //         .collection('PostContent')
  //         .onSnapshot(querySnapshot => {
  //             const VContent = [];
  //             querySnapshot.forEach((documentSnapshot) => {
  //                 const data = documentSnapshot.data();
  //                 // console.log(data);
  //                 if (data?.Oweruid == CurrentUser && data?.Active == 1 && data?.Type == 'Video') {
  //                     console.log('Video===>', data);
  //                     VContent.push(data);
  //                 }
  //             })
  //             // console.log('==>', VContent);
  //             setVideoContent(VContent);
  //         })
  //     setUploading(false)
  // }

  // const OnSeeDetails = (item, index) => {
  //   let concate = {...item, index: index};

  //   console.log(concate);
  //   // return
  //   setModalData(concate);
  //   setShowPoppup(true);
  // };

  // const toggleNumberOfWords = (modalData) => {
  //     if (numberOfWords === 70) {
  //         setNumberOfWords(modalData?.Description?.split(' ').length); // Display all words
  //     } else {
  //         setNumberOfWords(70); // Display only 100 words
  //     }
  // };

  // const PlayVideo = (item, index) => {
  //   // console.log(item , index);
  //   // return
  //   // const tempData = []

  //   // data.filter((j, i) => {
  //   //     if (j.id == item?.id) {
  //   //         console.log(j);
  //   //         let update = {
  //   //             ...j,
  //   //             PlayVideo : false
  //   //         }
  //   //         // console.log(update);
  //   //         tempData.push(j)
  //   //     }
  //   //     else{
  //   //         tempData.push(j)
  //   //     }
  //   // })

  //   // return
  //   var data2 = data[index];
  //   if (item?.PlayVideo == true) {
  //     let update = {
  //       ...data2,
  //       PlayVideo: false,
  //     };

  //     data[index] = update;
  //     setVideoContent(data);
  //     // console.log(data);
  //   } else {
  //     // const data2 = data[index]
  //     let update = {
  //       ...data2,
  //       PlayVideo: true,
  //     };

  //     data[index] = update;
  //     // console.log(data);
  //     setVideoContent(data);
  //   }
  // };

  // const onRefSet = (ref) => {
  //     if (ref) {
  //         videoRef.current = ref;
  //     }
  // };

  // const handlePlayPause = () => {
  //     if (videoRef.current) {
  //         if (isPlaying) {
  //             videoRef.current.pause();
  //             setIsPlaying(false)
  //             console.log(isPlaying);

  //         } else {
  //             videoRef.current.play();
  //             setIsPlaying(true)
  //             console.log(isPlaying);

  //         }
  //         // setIsPlaying(!isPlaying);
  //     }
  // };

  // console.log(isPlaying);

  // const filterData = () => {
  //   // console.log('hello');
  //   if (startDate && endDate) {
  //     var f1date = new Date(startDate);
  //     var f2date = new Date(endDate);

  //     //             console.log(f1date, f2date);
  //     // return
  //     var filteredArray = data?.filter(function (element) {
  //       const date = element?.timeStamp?.toDate();
  //       console.log(date, f1date, f2date, startDate);
  //       return f1date <= date && f2date >= date;
  //     });
  //     // console.log(filteredArray);
  //     setVideoContent(filteredArray);
  //   } else {
  //     setVideoContent(data);
  //   }
  // };

  // const GoBackScreen = () => {
  //   setStartDate(null);
  //   setEndDate(null);
  //   setVideoContent(data);
  //   navigation.goBack();
  // };

  // useEffect(() => {
  //   // fetchContent();
  //   filterData();
  // }, [startDate, endDate]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.white,
      }}>
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
            marginLeft: -20,
          }}>
          Manage Posts
        </Text>
        <Text></Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginBottom: 100,
            paddingHorizontal: 10,
          }}>
          {uploading ? (
            <View
              style={{
                padding: 20,
                alignSelf: 'center',
              }}>
              <ActivityIndicator
                size="small"
                color={Color.mianColor}
                animating={uploading}
              />
            </View>
          ) : (
            <>
              <View style={{paddingHorizontal: 20, marginTop: 20}}>
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    backgroundColor: 'rgba(0,0,0,0.04)',
                    borderRadius: 10,
                    flexDirection: 'row',
                  }}>
                  <View style={{width: '50%'}}>
                    <TouchableOpacity
                      onPress={() => setTab(1)}
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor:
                          tab == 1 ? Color.yellow : 'transparent',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: tab != 1 ? 'rgba(0,0,0,0.6)' : Color.mianColor,
                          fontSize: 16,
                          fontFamily: 'SF-Pro-Text-Medium',
                          fontWeight: '500',
                        }}>
                        Pending
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{width: '50%'}}>
                    <TouchableOpacity
                      onPress={() => setTab(2)}
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor:
                          tab == 2 ? Color.yellow : 'transparent',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: tab != 2 ? 'rgba(0,0,0,0.6)' : Color.mianColor,
                          fontSize: 16,
                          fontFamily: 'SF-Pro-Text-Medium',
                          fontWeight: '500',
                        }}>
                        Accepted
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{marginVertical: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    paddingBottom: 10,
                  }}>
                  <View style={{position: 'relative'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: 'black',
                          fontFamily: 'Poppins',
                          fontWeight: '500',
                          fontSize: 16,
                        }}>
                        {selectItem ? selectItem : 'Select'}
                      </Text>
                      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                        <Image
                          style={{tintColor: 'black'}}
                          source={require('../../../../assest/images/dropIcon.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    {isOpen && (
                      <View
                        style={{
                          backgroundColor: 'white',
                          borderRadius: 10,
                          width: '100%',
                          position: 'absolute',
                          bottom: -60,
                          zIndex: 10,
                          padding: 10,
                        }}>
                        <TouchableOpacity
                          onPress={() => onSelectItem('Videos')}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontFamily: 'Poppins-Medium',
                              fontWeight: '500',
                              color: 'black',
                              opacity: 0.7,
                            }}>
                            Videos
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => onSelectItem('Images')}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontFamily: 'Poppins-Medium',
                              fontWeight: '500',
                              color: 'black',
                              opacity: 0.7,
                            }}>
                            Images
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        backgroundColor: Color.light,
                        padding: 5,
                        borderRadius: 5,
                        marginRight: 5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      {startDate && (
                        <Text
                          style={{
                            fontSize: 12,
                            color: Color.black,
                          }}>
                          {moment(startDate).format('MM/DD/yy')} to
                        </Text>
                      )}
                      {endDate && (
                        <Text
                          style={{
                            fontSize: 12,
                            color: Color.black,
                          }}>
                          {' '}
                          {moment(endDate).format('MM/DD/yy')}
                        </Text>
                      )}
                      {!startDate && !endDate && (
                        <Text
                          style={{
                            fontSize: 12,
                            color: Color.black,
                          }}>
                          All Posts
                        </Text>
                      )}
                    </View>
                    <TouchableOpacity
                      onPress={() => showDatePicker()}
                      style={{
                        // backgroundColor: Color.black,
                        padding: 5,
                        borderRadius: 5,
                      }}>
                      <Image
                        source={require('../../../../assest/images/calenderImag.png')}
                        resizeMode="contain"
                        style={{
                          // tintColor: Color.,
                          width: 30,
                          height: 30,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {VideoContent?.length > 0 ? (
                  <View>
                    {VideoContent.map((item, index) =>
                      (tab == 1 ? item.status == 0 : item.status == 1) ? (
                        <View
                          key={item.id}
                          // onPress={() => onEventDeatilsScreen({ item })}
                          // onPress={() => navigation.navigate('EventDetails', { detail: item })}
                          activeOpacity={0.7}
                          style={{
                            alignSelf: 'center',
                            backgroundColor: Color.gray,
                            elevation: 5,
                            borderColor: Color.light,
                            borderRadius: 10,
                            // borderWidth: 1,
                            // marginLeft: 20,
                            marginRight: 5,
                            marginBottom: 10,
                            width: '95%',
                            backgroundColor: Color.white,
                          }}>
                          <View>
                            <TouchableOpacity
                            // onPress={() => PlayVideo(item, index)}
                            >
                              <Image
                                source={{uri: item?.img}}
                                style={{
                                  width: '100%',
                                  // height: 200,
                                  height: height / 4,
                                  borderRadius: 10,
                                }}
                              />
                            </TouchableOpacity>
                            {/* <Image source={{ uri: item.Image }} resizeMode='cover'
                                          style={{
                                              width: '100%',
                                              height: 200,
                                              borderRadius: 10,
                                          }} /> */}
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              padding: 10,
                              // flex: 1
                            }}>
                            <View
                              style={{
                                // flex: 2
                                width: '100%',
                                // backgroundColor:Color.gray
                              }}>
                              <Text
                                style={{
                                  fontSize: 16,
                                  color: Color.black,
                                  marginRight: 10,
                                }}>
                                {item?.title}
                              </Text>
                            </View>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              paddingHorizontal: 10,
                              paddingBottom: 10,
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}>
                            {/* <Text style={{color: Color.gray, fontSize: 12}}> */}
                            {/* {item?.timeStamp?.toDate()?.toLocaleDateString()} */}
                            {/* </Text> */}
                            <Text
                              style={{
                                color: item.status == 0 ? '#E94057' : '#0FCC88',
                                fontSize: 14,
                                fontWeight:"600"
                              }}>
                              {item.status == 0 ? 'Pending' : 'Accepted'}
                            </Text>

                            <View
                              style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <TouchableOpacity
                                onPress={() =>
                                  navigation.navigate('POSTS_DETAILS', {
                                    ...item,
                                  })
                                }
                                style={{
                                  padding: 5,
                                  paddingHorizontal: 10,
                                  backgroundColor: Color.yellow,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderRadius: 5,
                                }}>
                                <Text style={{fontSize: 12, color: 'black'}}>
                                  See Details
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      ) : (
                        <></>
                      ),
                    )}
                  </View>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: Color.black,
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      No Videos
                    </Text>
                    <Text style={{color: Color.black, fontSize: 12}}>
                      Currently we do not have any videos.
                    </Text>
                  </View>
                )}
              </View>
            </>
          )}
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showPoppup}
        onRequestClose={() => {
          setShowPoppup(!showPoppup);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: Color.gray,
            opacity: 0.9,
          }}>
          <View
            style={{
              minHeight: height / 2,
              maxHeight: height / 1.3,
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              // padding: 25,
              // alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            {modalData ? (
              <View>
                <View
                  style={{
                    height: '90%',
                    // backgroundColor:Color.gray
                  }}>
                  <VideoPlayer
                    source={{uri: modalData?.VideoUrl}}
                    style={{
                      width: '100%',
                      height: 200,
                      height: height / 4,
                      borderRadius: 10,
                    }}
                    tapAnywhereToPause={true}
                    paused={true}
                  />
                  {/* <Image source={{ uri: modalData?.Image }} resizeMode='cover' style={{
                                        width: '100%',
                                        height: '60%',
                                        borderRadius: 20,
                                    }} /> */}
                  <View
                    style={{
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: Color.black,
                      }}>
                      {modalData.Title}
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: Color.black,
                      }}>
                      Description:
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: Color.black,
                      }}>
                      Max(100)
                    </Text>

                    {/* {numberOfWords === 70 && modalData?.Description.split(' ').length > 70 && (
                                            <TouchableOpacity onPress={() => toggleNumberOfWords(modalData)}>
                                                <Text style={{
                                                    color: Color.blue
                                                }}>See More...</Text>
                                            </TouchableOpacity>
                                        )}
                                        {numberOfWords !== 70 && (
                                            <TouchableOpacity onPress={() => toggleNumberOfWords(modalData)}>
                                                <Text style={{
                                                    color: Color.blue
                                                }}>See Less</Text>
                                            </TouchableOpacity>
                                        )} */}
                  </View>
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontSize: 12,
                      color: Color.gray,
                    }}>
                    {modalData?.Description.split(' ')
                      .slice(0, numberOfWords)
                      .join(' ')}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setShowPoppup(false), setModalData(null);
                  }}
                  style={{
                    // height:'10%',
                    padding: 5,
                    backgroundColor: Color.main,
                    borderRadius: 5,
                    justifyContent: 'flex-end',
                    alignSelf: 'flex-end',
                    marginHorizontal: 10,
                    marginTop: 5,
                  }}>
                  <Text style={{fontSize: 12, color: Color.black}}>
                    Close Details
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ActivityIndicator
                  size="small"
                  color={Color.main}
                  animating={true}
                />
              </View>
            )}
          </View>
        </View>
      </Modal>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
