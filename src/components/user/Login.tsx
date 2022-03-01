import * as React from "react";
import {View, Text, StyleSheet, TextInput, Dimensions, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
import VoodooButton from "../../lib/VoodooButton";


const screenWidth = Math.round(Dimensions.get('window').width);

const Login = ({navigation}) => {
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);
    const [view, setView] = useState(true);


    return (
        <View style={styles.contain}>
            <View style={{marginTop: 50}}>
                <TouchableOpacity onPress={() => navigation.navigate('splashView')}>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: 'contain',
                            transform: [{rotate: "180deg"}],
                            tintColor: '#666',
                            marginBottom: 40
                        }}
                        source={require('../../../assets/images/icon/long-arrow.png')}/>
                </TouchableOpacity>
                    <Text style={styles.headText}>
                        Нэвтрэх
                    </Text>
                <View style={{flexDirection: 'row', marginBottom: 20}}>
                    <Text style={styles.headTitle}>Шинэ хэрэглэгч бол ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('register')}>
                        <Text style={{
                            ...styles.headTitle,
                            marginLeft: 10,
                            color: '#442F11',
                            fontWeight: 'bold'
                        }}>Бүртгүүлэх</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom: 10}}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Утасны дугаар"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Нууц үг"
                        />
                        <TouchableOpacity onPress={() => setView(!view)}>
                            {
                                !view ?
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                            resizeMode: 'contain',
                                            tintColor: '#666',
                                        }}
                                        source={require('../../../assets/images/icon/View.png')}/> :
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                            resizeMode: 'contain',
                                            tintColor: '#666',
                                        }}
                                        source={require('../../../assets/images/icon/unView.png')}/>
                            }
                        </TouchableOpacity>

                    </View>
                </View>
                <Text style={{textAlign: 'right', color: '#9e9e9e9e', marginBottom: 20}}>Нууц үгээ мартсан</Text>
                <View style={{flexDirection: 'row', marginBottom: 20}}>
                    <VoodooButton style={{flex: 1}} title={'Нэвтрэх'} type={'main'} onPress={()=>navigation.navigate('homeView')}/>
                    <View style={styles.faceId}>
                        <Image
                            style={{
                                width: 20,
                                height: 20,
                                resizeMode: 'contain',
                                tintColor: '#666',
                            }}
                            source={require('../../../assets/images/icon/unView.png')}/>
                    </View>
                </View>
                <VoodooButton onPress={() => navigation.navigate('register')} title={'Бүртгүүлэх'} type={'main'}
                              style={{backgroundColor: '#9e9e9e9e'}}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        marginHorizontal: 30
    },
    headText: {
        fontSize: 26,
        fontWeight: "600",
        marginBottom: 10
    },
    headTitle: {
        fontSize: 16
    },
    input: {
        flex: 1,
        height: 45,
        backgroundColor: '#e9e9e9',
        paddingLeft: 20,
        borderRadius: 5
    },
    inputContainer: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
        borderRadius: 10,
        marginVertical: 10,
        paddingRight: 20
    },
    faceId: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#9E805A',
        borderRadius: 10,
        marginLeft: 20
    }
})

export default Login;