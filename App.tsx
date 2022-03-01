import * as React from "react";
import {ActivityIndicator, View} from "react-native";
import AppNavigator from "./src/AppNavigator";
import {NavigationContainer,} from "@react-navigation/native";
import {useCallback, useEffect, useState} from "react";
import * as Font from 'expo-font';
import ErrorView from "./src/lib/ErrorView";


interface AppState {
    loading: boolean
    resultCode: number
}

const initialAppState: AppState = {
    loading: true,
    resultCode: 200,
}

const App = () => {
    const [state, updateState] = useState(initialAppState);
    useEffect(() => {
        initApp().then();
    }, []);


    const initApp = useCallback(async () => {
        updateState({...state, loading: true});
        await Promise.all([
            loadResources(),
            // await this.fetchUser(),
        ]);
        updateState({...state, loading: false})
    }, [state]);

    const loadResources = useCallback(async () => {
        await Promise.all([
            Font.loadAsync({
                'Linearicons': require('./assets/fonts/Linearicons.ttf'),
                'MaterialIcons': require('./assets/fonts/MaterialIcons.ttf'),
                'SF-Pro-Display-Thin': require('./assets/fonts/SF-Pro-Display-Thin.otf'),
                'SF-Pro-Display-Light': require('./assets/fonts/SF-Pro-Display-Light.otf'),
                'SF-Pro-Display-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
                'SF-Pro-Display-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
                'SF-Pro-Display-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),

            }),
        ]);
    }, []);
    if (state.resultCode != 200)
        return <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}><ErrorView
            reload={() => initApp()}/></View>;
    return (
        <View style={{flex: 1}}>
            {
                state.loading ? (
                    <View
                        style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}><ActivityIndicator/></View>
                ) : (
                    <NavigationContainer>
                        <AppNavigator/>
                    </NavigationContainer>
                )
            }

        </View>
    )
};

export default App