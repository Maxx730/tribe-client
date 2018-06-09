import React from 'react';
import { PermissionsAndroid, StyleSheet, Text, View, TextInput, TouchableHighlight, Image, AsyncStorage} from 'react-native';

export default class BottomActionbar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight style={[styles.ActionButton]} onPress={() => {
                    console.log("working")
                }}>
                    <Text>
                        Button
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.ActionButton,styles.CenterButton]} onPress={() => {
                    console.log("working")
                }}>
                    <Image source={require('../../assets/icons/plus-512.png')}/>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.ActionButton]} onPress={() => {
                    console.log("working")
                }}>
                    <Text>
                        Button
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFF",
        flexDirection:'row'
    },
    ActionButton:{
        flex:1
    },
    CenterButton:{
        borderRightWidth:.5,
        borderRightColor:"red",
        borderLeftWidth:.5,
        borderLeftColor:"red",
        backgroundColor:"red"
    }
});