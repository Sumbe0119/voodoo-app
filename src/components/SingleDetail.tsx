import * as React from "react";
import {View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from "react";
import {BlurView} from 'expo-blur';
import {useNavigation} from "@react-navigation/native";
import AppStyle from "../lib/AppStyle";
import * as Animatable from 'react-native-animatable';


const screenWidth = Math.round(Dimensions.get('window').width);


const SingleDetail = ({navigation}) => {
    const [click, setClick] = useState(false)
    return (
        <View style={styles.contain}>
            <View style={{paddingHorizontal: 20}}>
                <Animatable.View animation={'fadeInUp'} duration={500} style={{position: 'absolute'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            key={'blurryImage'}
                            style={{
                                width: screenWidth,
                                height: 400
                            }}
                            source={require('../../assets/images/image_6.jpg')}/>
                        <BlurView tint={'dark'} intensity={100} style={StyleSheet.absoluteFillObject}>
                        </BlurView>
                        <View style={{height: 50}}/>
                    </View>
                    <LinearGradient colors={['#1C1C1C', '#1C1C23', '#191A21']} style={styles.linearGradient}>
                    </LinearGradient>
                </Animatable.View>
                <View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: '#9DA0C7',
                                    top: 45,
                                }}
                                source={require('../../assets/images/icon/close.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Animatable.View animation={'fadeInUp'} duration={500} style={{alignItems: 'center', marginTop: 50}}>
                        <TouchableOpacity onPress={() => navigation.navigate('singlePage')}>
                            <Image
                                style={{
                                    height: 250,
                                    width: (screenWidth) / 2,
                                    borderRadius: 5,
                                }}
                                source={require('../../assets/images/image_6.jpg')}/>
                        </TouchableOpacity>
                    </Animatable.View>
                    <View style={{flexDirection: 'row', marginTop: 45}}>
                        <View style={{...styles.iconContain, marginLeft: -1}}>
                            <Image
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: '#9DA0C7',
                                }}
                                source={require('../../assets/images/icon/download.png')}/>
                            <Text style={{...styles.iconText}}>Татаж авах</Text>
                        </View>
                        <View style={styles.iconContain}>
                            <Image
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: '#9DA0C7',
                                }}
                                source={require('../../assets/images/icon/wishList.png')}/>
                            <Text style={styles.iconText}>Хадгалах</Text>
                        </View>
                        <View style={styles.iconContain}>
                            <Image
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: '#9DA0C7',
                                }}
                                source={require('../../assets/images/icon/share.png')}/>
                            <Text style={styles.iconText}>Хуваалцах</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.videoName}>Намайг бага хайхад нэг удаа...</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Нэг ганц бие залуу маш хүнд өвчтэй бөгөөд өвчний шалтгаан нь түүнийг бага байхад болсон
                            аймшигт явдлаас үүдэлтэй юм. Энэ хар дарсан дурсамж нь буг жөтгэртэй холбоотой бөгөөд асуултын гол зангилааг өгүүлэх болно. </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#191A21',
    },
    blurContainer: {
        width: screenWidth,
        height: 250
    },
    linearGradient: {
        height: 100,
        width: screenWidth
    },
    iconContain: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    iconText: {
        color: '#9DA0C7',
        fontFamily: AppStyle.DEFAULT.font.light,
        fontSize: 12,
        marginTop: 10
    },
    videoName: {
        fontSize: 16,
        color: '#9DA0C7',
        fontFamily: AppStyle.DEFAULT.font.medium,
        marginTop: 20
    },
    title:{
        color: '#fff',
        fontFamily: AppStyle.DEFAULT.font.light,
        marginTop: 20,
        textAlign: 'justify'
    }
})

export default SingleDetail;