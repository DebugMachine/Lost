import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    Switch
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> report </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
 })
   