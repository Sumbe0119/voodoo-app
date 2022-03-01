import * as React from "react";
import {View, Text, StyleSheet, Dimensions, Image, FlatList, SafeAreaView, TouchableOpacity} from "react-native";
import VoodooNavigation from "../lib/VoodooNavigation";
import RNPickerSelect from 'react-native-picker-select';
import {useState} from "react";
import AppStyle from "../lib/AppStyle";

interface selectData {
    loading: boolean,
    label: string
}


const initialSelectList: selectData = {
    loading: false,
    label: "",
}

const selectList = [
    {value: "1", label: "Бүгд"},
    {value: "2", label: "Зомбиэ"},
    {value: "3", label: "Гэмт хэрэг"},
    {value: "4", label: "Сүнс"},
]
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
    {
        id: 6,
        image: require('../../assets/images/image_3.jpg'),
        title: 'Хар дарсан',
    },
    {
        id: 7,
        image: require('../../assets/images/image_3.jpg'),
        title: 'Хар дарсан',
    },
    {
        id: 8,
        image: require('../../assets/images/image_2.jpg'),
        title: 'Хар дарсан',
    },
    {
        id: 9,
        image: require('../../assets/images/image_1.jpg'),
        title: 'Хар дарсан',
    },
];

const renderItem = (item: any, index: number, separators: any, navigation) => (
    <TouchableOpacity onPress={() => navigation.navigate('singleDetail')} key={index}
                      style={{marginRight: 10, marginTop: 10, width: (screenWidth - 50) / 3}}>
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

const VideoSeries = ({navigation}) => {
    const [select, setSelect] = useState(initialSelectList);
    return (
        <VoodooNavigation navigation={navigation} resultCode={200}
                          loading={false} headTitle={''} reloadAction={() => {
        }}>
            <View style={styles.contain}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 10
                }}>
                    <View style={{position: 'relative'}}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Сонгох',
                                value: null,
                            }}
                            value={select.label}
                            style={pickerSelectStyles}
                            items={selectList}
                            onValueChange={(label) => setSelect ({
                                ...select,
                                label
                            })}

                        />
                        <Image
                            style={{
                                width: 12,
                                height: 12,
                                tintColor: '#fff',
                                position: 'absolute',
                                right: 10,
                                top: 22,
                                transform: [{rotate: "90deg"}],
                            }}
                            source={require('../../assets/images/icon/rightArrow.png')}/>
                    </View>
                    <View style={{position: 'relative'}}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Сонгох',
                                value: null,
                            }}
                            value={select.label}
                            style={pickerSelectStyles}
                            items={selectList}
                            onValueChange={(label) => setSelect ({
                                ...select,
                                label
                            })}

                        />
                        <Image
                            style={{
                                width: 12,
                                height: 12,
                                tintColor: '#fff',
                                position: 'absolute',
                                right: 10,
                                top: 22,
                                transform: [{rotate: "90deg"}],
                            }}
                            source={require('../../assets/images/icon/rightArrow.png')}/>
                    </View>
                    <View style={{position: 'relative'}}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Сонгох',
                                value: null,
                            }}
                            value={select.label}
                            style={pickerSelectStyles}
                            items={selectList}
                            onValueChange={(label) => setSelect ({
                                ...select,
                                label
                            })}

                        />
                        <Image
                            style={{
                                width: 12,
                                height: 12,
                                tintColor: '#fff',
                                position: 'absolute',
                                right: 10,
                                top: 22,
                                transform: [{rotate: "90deg"}],
                            }}
                            source={require('../../assets/images/icon/rightArrow.png')}/>
                    </View>
                    <View style={{position: 'relative'}}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Сонгох',
                                value: null,
                            }}
                            value={select.label}
                            style={pickerSelectStyles}
                            items={selectList}
                            onValueChange={(label) => setSelect ({
                                ...select,
                                label
                            })}

                        />
                        <Image
                            style={{
                                width: 12,
                                height: 12,
                                tintColor: '#fff',
                                position: 'absolute',
                                right: 10,
                                top: 22,
                                transform: [{rotate: "90deg"}],
                            }}
                            source={require('../../assets/images/icon/rightArrow.png')}/>
                    </View>
                </View>
                <SafeAreaView>
                    <View style={{marginTop: 20, marginBottom: 80}}>
                        <FlatList
                            data={data}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            renderItem={({
                                             item,
                                             index,
                                             separators
                                         }) => renderItem(item, index, separators, navigation)}
                            horizontal={false}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                </SafeAreaView>
            </View>
        </VoodooNavigation>
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#191A21',
        paddingHorizontal: 20,
    },
    boxTitle: {
        color: '#fff',
        marginTop: 10,
        fontSize: 12,
        fontFamily: AppStyle.DEFAULT.font.thin
    },
})
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        marginTop: 10,
        height: 35,
        width: (screenWidth - 140) / 3,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#9DA0C7',
        fontSize: 10,
        paddingLeft: 10,
        paddingRight: 20,
        borderRadius: 5,
        color: '#9DA0C7',
    },
    inputAndroid: {
        marginTop: 10,
        height: 50,
        width: (screenWidth - 150) / 3,
        backgroundColor: '#1F1F2B',
        fontSize: 1,
        paddingHorizontal: 15,
        borderRadius: 5,
        color: '#fff',
    },
});


export default VideoSeries