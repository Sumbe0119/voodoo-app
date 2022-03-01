import * as React from "react";
import {View, Text, StyleSheet, Platform, Dimensions, Image, TouchableOpacity} from "react-native";
import VoodooNavigation from "../lib/VoodooNavigation";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {Video, AVPlaybackStatus} from 'expo-av';
import {useRef, useState} from "react";
import AppStyle from "../lib/AppStyle";


const screenWidth = Math.round(Dimensions.get('window').width);
const statusBarHeight = getStatusBarHeight();


const SinglePage = ({navigation}) => {
    const playerRef = useRef<Video>(null)
    const [click, setClick] = useState(false)


    const [status, setStatus] = React.useState({});


    const URL = 'https://www.youtube.com/watch?v=oEuhQToWexg'


    return (
        <VoodooNavigation navigation={navigation} resultCode={200} back={true}
                          loading={false} headTitle={''} reloadAction={() => {
        }}>
            <View style={styles.contain}>
                <Video
                    ref={playerRef}
                    style={styles.video}
                    source={{
                        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                <View style={styles.headContain}>
                    <Text style={styles.headTitle}>Намайг бага байхад...</Text>
                    <TouchableOpacity onPress={() => setClick(!click)}>
                        {
                            !click ? (
                                <Image
                                    style={{
                                        width: 22,
                                        height: 22,
                                        tintColor: '#9DA0C7',
                                    }}
                                    source={require('../../assets/images/icon/wishList.png')}/>
                            ) : (
                                <Image
                                    style={{
                                        width: 22,
                                        height: 22,
                                        tintColor: 'red',
                                    }}
                                    source={require('../../assets/images/icon/wishList.png')}/>
                            )
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.middle}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 20}}>
                            <Image
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: '#9DA0C7',
                                    marginRight: 10
                                }}
                                source={require('../../assets/images/icon/like.png')}/>
                            <Text style={styles.middleText}>1978</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: '#9DA0C7',
                                    marginRight: 10
                                }}
                                source={require('../../assets/images/icon/unLike.png')}/>
                            <Text style={styles.middleText}>14</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{
                                width: 22,
                                height: 22,
                                tintColor: '#9DA0C7',
                                marginRight: 5
                            }}
                            source={require('../../assets/images/icon/review.png')}/>
                        <Text style={styles.middleText}>Хураангүй</Text>
                    </View>
                </View>
            </View>
        </VoodooNavigation>
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#191A21'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    video: {
        alignSelf: 'center',
        width: screenWidth,
        height: 200,
    },
    headContain: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },
    headTitle: {
        fontSize: 16,
        color: '#9DA0C7',
        fontFamily: AppStyle.DEFAULT.font.medium,
    },
    middle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 15
    },
    middleText:{
        color: '#9DA0C7',
        fontSize: 14,
        fontFamily: AppStyle.DEFAULT.font.light
    }
})

export default SinglePage;