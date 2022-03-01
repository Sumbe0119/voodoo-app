import * as React from "react";
import {View, Text, StyleSheet, TextInput, Image} from "react-native";
import VoodooNavigation from "../lib/VoodooNavigation";
import * as Animatable from 'react-native-animatable';
import DismissKeyboard from "../lib/DismissKeyboard";


const Search = ({navigation}) => {
    return (
        <VoodooNavigation navigation={navigation} resultCode={200} search={false} back={true}
                          loading={false} headTitle={'Хайлт хийх'} reloadAction={() => {
        }}>
            <DismissKeyboard>
                <View style={styles.contain}>
                    <TextInput style={styles.search} placeholderTextColor={'#9DA0C7'} returnKeyType={'done'} placeholder={'Хайх зүйлээ бич'} >
                    </TextInput>
                    <Animatable.View animation={'fadeInUp'} duration={500}
                                     style={{top: 100, alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            style={{
                                width: 200,
                                height: 200,
                                resizeMode: 'contain',
                            }}
                            source={require('../../assets/images/noResult.png')}/>
                    </Animatable.View>
                </View>
            </DismissKeyboard>

        </VoodooNavigation>
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#191A21',
        paddingHorizontal: 20
    },
    search: {
        height: 50, backgroundColor: '#1F1F2B', marginTop: 20, paddingHorizontal: 20, borderRadius: 10, color: '#fff'
    }
})

export default Search;