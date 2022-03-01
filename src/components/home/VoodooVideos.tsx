import React from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Image, Dimensions} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import AppStyle from "../../lib/AppStyle";
import {useNavigation} from "@react-navigation/native";

const screenWidth = Math.round(Dimensions.get('window').width);


const data = [
    {
        id: 1,
        image: require('../../../assets/images/image_1.jpg'),
        title: 'Сүнстэй цэнгэлдэх хүрээлэн',
    },
    {
        id: 2,
        image: require('../../../assets/images/image_2.jpg'),
        title: 'Найз залуу зардаг төхөөрөмж',

    },
    {
        id: 3,
        image: require('../../../assets/images/image_3.jpg'),
        title: 'Сүнстэй хуримласан нь',

    },
    {
        id: 4,
        image: require('../../../assets/images/image_4.png'),
        title: 'Камеран толгойтой хүү',
        views: '8801'
    },
    {
        id: 5,
        image: require('../../../assets/images/image_5.jpg'),
        title: 'Суръяакант',
    },
];

// @ts-ignore
const renderItem = (item: any, index: number, separators: any, navigation) => (
    <TouchableOpacity onPress={() => navigation.navigate('singleDetail')} key={index} style={{width: (screenWidth - 5) / 3}}>
        <Image style={{
            borderRadius: 5,
            width: (screenWidth - 50) / 3,
            height: 150,
        }} source={item.image}/>
        <View>
            <Text  numberOfLines={2} style={styles.boxTitle} >
                {item.title}
            </Text>
        </View>
    </TouchableOpacity>
);


const VoodooVideos = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headDescContain}>
                <Text style={styles.headText}>Voodoo бичлэг</Text>
            </View>
            <View style={{marginLeft: 20}}>
                <FlatList
                    data={data}
                    ListFooterComponent={
                        <TouchableOpacity onPress={() => navigation.navigate('allVideo')}>
                            <LinearGradient start={{x: -0.6, y: 0}}
                                            end={{x: 1.2, y: 0}} colors={['#1F1F2B', '#1F1F2B', '#000']}
                                            style={styles.linearGradient}>
                                <Image
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: '#fff',
                                        marginLeft: 10,
                                    }}
                                    source={require('../../../assets/images/icon/rightArrow.png')}/>
                            </LinearGradient>
                        </TouchableOpacity>

                    }
                    showsHorizontalScrollIndicator={false}
                    renderItem={({
                                     item,
                                     index,
                                     separators
                                 }) => renderItem(item, index, separators, navigation)}
                    horizontal={true}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
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
        fontFamily: AppStyle.DEFAULT.font.light,
    },
    text: {
        fontSize: 8
    },
    boxTitle: {
        color: '#fff',
        marginTop: 10,
        fontSize: 12,
        fontFamily: AppStyle.DEFAULT.font.thin,
        paddingRight: 10
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

export default VoodooVideos;