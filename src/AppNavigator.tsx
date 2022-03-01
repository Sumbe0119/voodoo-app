import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {Platform, Dimensions, Text, View, Image, StyleSheet} from "react-native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Home from "./components/home/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import VideoSeries from "./components/VideoSeries";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import SinglePage from "./components/SinglePage";
import AllVideo from "./components/AllVideo";
import SingleDetail from "./components/SingleDetail";
import Search from "./components/Search";
import AppStyle from "./lib/AppStyle";


const screenWidth = Math.round(Dimensions.get('window').width);

const HomeTab = createMaterialBottomTabNavigator();
const HomeTabView = () => {
    return (
        <HomeTab.Navigator
            style={{backgroundColor: '#5C3D2E'}}
            backBehavior={'none'}
            activeColor={'#B069F3'}
            inactiveColor={'#9DA0C7'}
            shifting={false}
            barStyle={{
                overflow: 'hidden',
                backgroundColor: '#1F1F2B',
                height: Platform.OS === 'ios' ? 80 : 60,
            }}
        >
            <HomeTab.Screen
                options={{
                    tabBarIcon: ({focused, color}) =>
                        focused ?
                            <Image style={{
                                width: 25,
                                height: 25,
                                tintColor: '#B069F3'
                            }} source={require('../assets/images/icon/home.png')}/>
                            :
                            <Image style={{
                                width: 25,
                                height: 25,
                                tintColor: '#9DA0C7'
                            }} source={require('../assets/images/icon/home.png')}/>
                    ,
                    title: 'Нүүр'
                }}
                name="Нүүр" component={Home}/>
            <HomeTab.Screen
                options={{
                    tabBarIcon: ({focused, color}) =>
                        focused ?
                            <Image style={{
                                width: 25,
                                height: 25,
                                tintColor: '#B069F3'
                            }} source={require('../assets/images/icon/player.png')}/>
                            :
                            <Image style={{
                                width: 25,
                                height: 25,
                                tintColor: '#9DA0C7'
                            }} source={require('../assets/images/icon/player.png')}/>
                    ,
                    title: 'Цуврал'
                }}
                name="video" component={VideoSeries}/>
            <HomeTab.Screen
                options={{
                    tabBarIcon: ({focused, color}) =>
                        focused ?
                            <Image style={{
                                width: 25,
                                height: 25,
                                tintColor: '#B069F3'
                            }} source={require('../assets/images/icon/my.png')}/>
                            :
                            <Image style={{
                                width: 25,
                                height: 25,
                                tintColor: '#9DA0C7'
                            }} source={require('../assets/images/icon/my.png')}/>
                    ,
                    title: 'Миний'
                }}
                name="profile" component={Profile}/>
            <HomeTab.Screen
                options={{
                    tabBarIcon: ({focused, color}) =>
                        focused ?
                            <Image style={{
                                width: 25,
                                height: 25,
                                tintColor: '#B069F3'
                            }} source={require('../assets/images/icon/settings.png')}/>
                            :
                            <Image style={{
                                width: 25,
                                height: 25,
                                tintColor: '#9DA0C7'
                            }} source={require('../assets/images/icon/settings.png')}/>
                    ,
                    title: 'Тохиргоо'
                }}
                name="settings" component={Settings}/>

        </HomeTab.Navigator>
    )
}

const MainStack = createStackNavigator();

const styles = StyleSheet.create({
    activeText: {
        color: '#ffffff',
        fontFamily: AppStyle.DEFAULT.font.light
    }
})

export default () => {
    return (
        // @ts-ignore
        <MainStack.Navigator screenOptions={{headerMode: 'none'}} initialRouteName={'homeView'}>
            <>
                <MainStack.Screen name="homeView" component={HomeTabView} initialParams={{threadID: 'main'}}/>
                <MainStack.Screen name="login" component={Login}/>
                <MainStack.Screen name="register" component={Register}/>
                <MainStack.Screen name="singlePage" component={SinglePage}/>
                <MainStack.Screen name="singleDetail" component={SingleDetail}/>
                <MainStack.Screen name="allVideo" component={AllVideo}/>
                <MainStack.Screen name="search" component={Search}/>
            </>
        </MainStack.Navigator>
    )
};
