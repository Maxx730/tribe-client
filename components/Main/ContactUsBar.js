import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image} from 'react-native';

export default class ContactUsBar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <TouchableHighlight style={[styles.ContactButton,styles.LeftButton]} onPress={() => {console.log("Working")}}>
                        <Text>Email</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex:1}}>
                    <TouchableHighlight style={[styles.ContactButton,styles.CenterButton]} onPress={() => {console.log("Working")}}>
                        <Text>Email</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex:1}}>
                    <TouchableHighlight style={[styles.ContactButton,styles.RightButton]} onPress={() => {console.log("Working")}}>
                        <Text>Email</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:"#FCFCFC",
        borderWidth:.5,
        borderColor:"#EBEBEB",
        borderRadius:3
    },
    ContactButton:{
        padding:10
    },
    CenterButton:{
        borderRightWidth:.5,
        borderRightColor:"#EBEBEB",
        borderLeftWidth:.5,
        borderLeftColor:"#EBEBEB",
    },
    RightButton:{

    },
    LeftButton:{

    }
})