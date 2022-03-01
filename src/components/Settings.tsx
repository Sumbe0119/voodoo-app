import * as React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import VoodooNavigation from "../lib/VoodooNavigation";
import * as Animatable from 'react-native-animatable';


const Settings = ({navigation}) => {
    return (
        <VoodooNavigation navigation={navigation} resultCode={200}
                          loading={false} headTitle={''} reloadAction={() => {
        }}>
            <View style={styles.contain}>
                <Animatable.View animation={'fadeInRightBig'} duration={1000}  style={styles.middle}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain',
                                tintColor: '#9DA0C7',
                                marginRight: 20
                            }}
                            source={require('../../assets/images/icon/check.png')}/>
                        <Text style={styles.text}>
                            Миний мэдээлэл
                        </Text>
                    </View>
                    <Image
                        style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain',
                            tintColor: '#9DA0C7',
                        }}
                        source={require('../../assets/images/icon/rightArrow.png')}/>
                </Animatable.View>
                <Animatable.View animation={'fadeInRightBig'} duration={1100} style={styles.middle}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain',
                                tintColor: '#9DA0C7',
                                marginRight: 20
                            }}
                            source={require('../../assets/images/icon/check.png')}/>
                        <Text style={styles.text}>
                            Миний мэдээлэл
                        </Text>
                    </View>
                    <Image
                        style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain',
                            tintColor: '#9DA0C7',
                        }}
                        source={require('../../assets/images/icon/rightArrow.png')}/>
                </Animatable.View>
                <Animatable.View animation={'fadeInRightBig'} duration={1200} style={styles.middle}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain',
                                tintColor: '#9DA0C7',
                                marginRight: 20
                            }}
                            source={require('../../assets/images/icon/check.png')}/>
                        <Text style={styles.text}>
                            Миний мэдээлэл
                        </Text>
                    </View>
                    <Image
                        style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain',
                            tintColor: '#9DA0C7',
                        }}
                        source={require('../../assets/images/icon/rightArrow.png')}/>
                </Animatable.View>
                <Animatable.View animation={'fadeInRightBig'} duration={1300}  style={styles.middle}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain',
                                tintColor: '#9DA0C7',
                                marginRight: 20
                            }}
                            source={require('../../assets/images/icon/check.png')}/>
                        <Text style={styles.text}>
                            Миний мэдээлэл
                        </Text>
                    </View>
                    <Image
                        style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain',
                            tintColor: '#9DA0C7',
                        }}
                        source={require('../../assets/images/icon/rightArrow.png')}/>
                </Animatable.View>
                <Animatable.View animation={'fadeInRightBig'} duration={1400} style={styles.middle}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain',
                                tintColor: '#9DA0C7',
                                marginRight: 20
                            }}
                            source={require('../../assets/images/icon/check.png')}/>
                        <Text style={styles.text}>
                            Миний мэдээлэл
                        </Text>
                    </View>
                    <Image
                        style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain',
                            tintColor: '#9DA0C7',
                        }}
                        source={require('../../assets/images/icon/rightArrow.png')}/>
                </Animatable.View>
                <Animatable.View animation={'fadeInRightBig'} duration={1500}  style={styles.middle}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain',
                                tintColor: '#9DA0C7',
                                marginRight: 20
                            }}
                            source={require('../../assets/images/icon/check.png')}/>
                        <Text style={styles.text}>
                            Миний мэдээлэл
                        </Text>
                    </View>
                    <Image
                        style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain',
                            tintColor: '#9DA0C7',
                        }}
                        source={require('../../assets/images/icon/rightArrow.png')}/>
                </Animatable.View>
            </View>

        </VoodooNavigation>
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#191A21',
        paddingTop: 20
    },
    middle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginVertical: 10,
        backgroundColor: '#1F1F2B',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 15
    },
    text:{
        color: '#9DA0C7'
    }
})

export default Settings;