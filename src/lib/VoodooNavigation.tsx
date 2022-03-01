import React from 'react';
import {
    ScrollView,
    Platform,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Dimensions,
} from "react-native";
import Constants from 'expo-constants';
import ErrorView from "./ErrorView";
import AppStyle from "./AppStyle";
import Loader from "./Loader";

interface NavigationProps {
    loading: boolean,
    resultCode: number,
    navigation: any,
    children: any,
    reloadAction?: Function,
    back?: boolean,
    headTitle: string,
    search?: boolean,
}

const screenWidth = Math.round(Dimensions.get('window').width);

const VoodooNavigation = ({
                              loading,
                              resultCode,
                              navigation,
                              children,
                              reloadAction,
                              back,
                              headTitle,
                              search,
                          }: NavigationProps) => {
    return (
        <View style={{...styles.container}}>
            <View style={{...styles.headerContainer}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                }}>
                    {
                        back == true ? (
                            <TouchableOpacity style={{padding: 10}} onPress={() => navigation.goBack()}>
                                <Image
                                    style={{
                                        width: 20,
                                        height: 20,
                                        resizeMode: 'contain',
                                        transform: [{rotate: "180deg"}],
                                        tintColor: '#fff',
                                        marginTop: -10
                                    }}
                                    source={require('../../assets/images/icon/long-arrow.png')}
                                />
                            </TouchableOpacity>
                        ) : (
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{color: '#9DA0C7', fontSize: 18, fontFamily: AppStyle.DEFAULT.font.medium}}>
                                    Hi, Sumbe
                                </Text>
                            </View>
                        )
                    }
                    <Text>
                        {headTitle ? <Text style={styles.headTitle}>{headTitle}</Text> : null}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        {
                            search ? (
                                <TouchableOpacity onPress={()=> navigation.navigate('search')}>
                                    <Image
                                        style={{
                                            width: 24,
                                            height: 24,
                                            resizeMode: 'contain',
                                            tintColor: '#9DA0C7',
                                            marginRight: 20
                                        }}
                                        source={require('../../assets/images/icon/search.png')}
                                    />
                                </TouchableOpacity>
                            ) : null
                        }

                        <TouchableOpacity>
                            <Image
                                style={{
                                    width: 24,
                                    height: 24,
                                    resizeMode: 'contain',
                                    tintColor: '#9DA0C7'
                                }}
                                source={require('../../assets/images/icon/notifcation.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {resultCode == 200 ? (loading ? <Loader/> : children) : (
                <ErrorView code={resultCode} reload={reloadAction}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headTitle: {
        color: '#FFF',
        fontSize: 14
    },
    headerContainer: {
        paddingTop: 60,
        paddingHorizontal: 20,
        height: 90,
        paddingBottom: 20,
        backgroundColor: '#1F1F2B',
        justifyContent: 'center',
    },
    iconBj: {
        height: 40,
        width: 40,
        backgroundColor: '#C5A57D',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    notifcation: {
        height: 14,
        width: 14,
        position: 'absolute',
        backgroundColor: '#FB0926',
        borderRadius: 8,
        top: 4,
        right: 5,
        borderWidth: 3,
        borderColor: '#C5A57D'
    },

});

export default VoodooNavigation;
