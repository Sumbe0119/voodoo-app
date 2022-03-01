import {
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    FlatList,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import * as React from "react";
import VoodooNavigation from "../../lib/VoodooNavigation";
import AppStyle from "../../lib/AppStyle";
import Swiper from 'react-native-swiper'
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from "expo-linear-gradient";
import NewVideo from "./NewVideo";
import VoodooVideos from "./VoodooVideos";

const screenWidth = Math.round(Dimensions.get('window').width);


const data = [
    {
        id: 1,
        image: require('../../../assets/images/image_1.jpg'),
        title: 'Ажлын өрөө',
    },
    {
        id: 2,
        image: require('../../../assets/images/image_2.jpg'),
        title: 'Хулгайч',

    },
    {
        id: 3,
        image: require('../../../assets/images/image_3.jpg'),
        title: 'Эмэгтэй',

    },
    {
        id: 4,
        image: require('../../../assets/images/image_4.png'),
        title: 'Хуучны барилга',
        views: '8801'
    },
    {
        id: 5,
        image: require('../../../assets/images/image_5.jpg'),
        title: 'Хар дарсан',
    },
];

// @ts-ignore
const renderItem = (item: any, index: number, separators: any, navigation) => (
    <TouchableOpacity onPress={() => navigation.navigate('singleDetail')} key={index} style={{marginRight: 10}}>
        <Image style={{
            borderRadius: 5,
            width: (screenWidth - 50) / 3,
            height: 150,
        }} source={item.image}/>
        <View>
            <Text style={styles.boxTitle}>
                {item.title}
            </Text>
        </View>
    </TouchableOpacity>
);


const Home = ({navigation}) => {


    return (

        <VoodooNavigation search={true} navigation={navigation} resultCode={200}
                          loading={false} headTitle={''} reloadAction={() => {
        }}>
            <View style={styles.contain}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flexDirection: 'column'}}>

                        <Swiper style={styles.wrapper} showsButtons={false}
                                autoplay={true}
                                loop={true}
                                autoplayTimeout={2000}
                                autoplayDirection={true}
                                activeDotStyle={{backgroundColor: '#B069F3', width: 20}}
                                dotStyle={{backgroundColor: '#9DA0C7', width: 10}}>
                            <View style={styles.slide1}>

                                <Image
                                    style={{
                                        height: 300,
                                        width: screenWidth,
                                        flexWrap: 'nowrap',

                                    }}
                                    source={require('../../../assets/images/cover1.jpg')}/>
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    style={{
                                        height: 300,
                                        width: screenWidth,
                                        flexWrap: 'nowrap'
                                    }}
                                    source={require('../../../assets/images/cover2.jpg')}/>
                            </View>
                            <View style={styles.slide3}>
                                <Image
                                    style={{
                                        height: 300,
                                        width: screenWidth,
                                        flexWrap: 'nowrap'
                                    }}
                                    source={require('../../../assets/images/cover3.jpg')}/>
                            </View>
                        </Swiper>
                    </View>
                  <View style={{paddingBottom: 60}}>
                      <VoodooVideos navigation={navigation}/>
                      <NewVideo navigation={navigation}/>
                  </View>
                </ScrollView>
            </View>
        </VoodooNavigation>
    )
}


const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#191A21'
    },
    headDescContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
        marginHorizontal: 20
    },
    headText: {
        color: '#9DA0C7',
        fontSize: 16,
        fontFamily: AppStyle.DEFAULT.font.regular,
    },
    headSubText: {
        color: '#9DA0C7',
        fontSize: 14,
        fontFamily: AppStyle.DEFAULT.font.regular,
    },
    text: {
        fontSize: 8
    },
    boxTitle: {
        color: '#fff',
        marginTop: 10,
        fontSize: 12,
        fontFamily: AppStyle.DEFAULT.font.regular
    },
    wrapper: {
        height: 220
    },
    slide1: {
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    linearGradient: {
        height: 150,
        width: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
})

export default Home