import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import VoodooNavigation from "../lib/VoodooNavigation";


const Profile = ({navigation}) => {
    return (
        <VoodooNavigation navigation={navigation} resultCode={200}
                          loading={false} headTitle={''} reloadAction={() => {
        }}>
        <View style={styles.contain}>
            <Text>profile</Text>
            <Text>profile</Text>
            <Text>profile</Text>
            <Text>profile</Text>
        </View>
        </VoodooNavigation>
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#191A21'
    }
})

export default Profile;