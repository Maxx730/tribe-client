import React from 'react';
import { PermissionsAndroid, StyleSheet, Text, View, TextInput, TouchableHighlight, Image, AsyncStorage} from 'react-native';

export default class Tribe extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title: "Tribe",
        headerStyle:{
            backgroundColor:"#141414",
            elevation: 0,
            padding:0,
            shadowColor:'transparent',
            shadowRadius: 0,
            borderWidth:0,
            shadowOffset: {
                height: 0,
            }
        },
        headerTintColor: "#FFF"
    })

    render(){
        return(
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#141414",
        flex:1
    }
})