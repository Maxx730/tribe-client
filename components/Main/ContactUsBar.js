import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image} from 'react-native';

export default class ContactUsBar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <TouchableHighlight style={[styles.ContactButton,styles.LeftButton]} onPress={() => {console.log("Working")}}>
                        <Image style={styles.ButtonIcon} source={require('../../assets/icons/at-sign-512.png')}/>
                    </TouchableHighlight>
                </View>
                <View style={{flex:1}}>
                    <TouchableHighlight style={[styles.ContactButton,styles.CenterButton]} onPress={() => {console.log("Working")}}>
                        <Image style={styles.ButtonIcon} source={require('../../assets/icons/globe-512.png')}/>
                    </TouchableHighlight>
                </View>
                <View style={{flex:1}}>
                    <TouchableHighlight style={[styles.ContactButton,styles.RightButton]} onPress={() => {console.log("Working")}}>
                        <Image style={styles.ButtonIcon} source={require('../../assets/icons/book-512.png')}/>
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
        borderWidth:1,
        borderColor:"#cf8e1c",
        borderRadius:3
    },
    ContactButton:{
        padding:10,
        alignItems: 'center',
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

    },
    ButtonIcon:{
        width:24,
        height:24,
        opacity:.1
    }
})