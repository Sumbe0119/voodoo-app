import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    SectionList,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Dimensions
} from "react-native";
import VoodooNavigation from "../lib/VoodooNavigation";
import AppStyle from "../lib/AppStyle";
import * as Animatable from 'react-native-animatable';


const screenWidth = Math.round(Dimensions.get('window').width);

const data = [
    {
        id: 1,
        image: require('../../assets/images/image_1.jpg'),
        title: 'Сургуулийн сүнс',
    },
    {
        id: 2,
        image: require('../../assets/images/image_2.jpg'),
        title: 'Ойд болсон аймшигт явдал',

    },
    {
        id: 3,
        image: require('../../assets/images/image_3.jpg'),
        title: 'Чатгачин эмгэний сүнс',

    },
    {
        id: 4,
        image: require('../../assets/images/image_4.png'),
        title: 'Хуучны барилга',
        views: '8801'
    },
    {
        id: 5,
        image: require('../../assets/images/image_5.jpg'),
        title: 'Хар дарсан',
    },
];


// @ts-ignore
const renderItem = (item: any, index: number, separators: any, navigation) => (
    <TouchableOpacity onPress={() => navigation.navigate('singleDetail')} key={index} style={{marginRight: 10, marginTop: 10, width: (screenWidth - 50) / 3}}>
        <Image style={{
            borderRadius: 5,
            width: (screenWidth - 50) / 3,
            height: 150,
        }} source={item.image}/>
        <View>
            <Text numberOfLines={2} style={styles.boxTitle}>
                {item.title}
            </Text>
        </View>
    </TouchableOpacity>
);


const AllVideo = ({navigation}) => {

    return (
        // @ts-ignore
        <VoodooNavigation navigation={navigation} resultCode={200} back={true}
                          loading={false} headTitle={'Бүх үзвэх'} reloadAction={() => {
        }}>

                <SafeAreaView style={styles.contain}>
                    <Animatable.View animation={'fadeInRight'} duration={500} style={{marginHorizontal: 20, marginTop: 20}}>
                        <FlatList
                            data={data}
                            numColumns={3}
                            showsVerticalScrollIndicator={true}
                            renderItem={({
                                             item,
                                             index,
                                             separators
                                         }) => renderItem(item, index, separators, navigation)}
                            horizontal={false}
                            keyExtractor={item => item.id.toString()}
                        />
                    </Animatable.View>
                </SafeAreaView>
        </VoodooNavigation>
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#191A21',
        paddingHorizontal: 20
    },
    boxTitle: {
        color: '#fff',
        marginTop: 10,
        fontSize: 12,
        fontFamily: AppStyle.DEFAULT.font.regular
    },
})

export default AllVideo;