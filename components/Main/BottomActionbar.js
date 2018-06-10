import React from 'react';
import { PermissionsAndroid, StyleSheet, Text, View, TextInput, TouchableHighlight, Image, AsyncStorage} from 'react-native';

export default class BottomActionbar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <TouchableHighlight style={styles.AddCircle}>
                        <Image style={styles.ActionIcon} source={require('../../assets/icons/plus-512.png')}/>
                    </TouchableHighlight>
                    <View style={{flexDirection:'row'}}>
                        <TouchableHighlight style={[styles.ActionButton]} onPress={() => {
                            console.log("working")
                        }}>
                            <Text>
                                Button
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.ActionButton]} onPress={() => {
                            console.log("working")
                        }}>
                            <Text>
                                Button
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFF",
        flexDirection:'row',
        position:'absolute',
        bottom:0
    },
    ActionButton:{
        flex:1,
        padding:10
    },
    CenterButton:{

    },
    ActionIcon:{
        width:24,
        height:24
    },
    AddCircle:{
        backgroundColor:"#f8aa23",
        borderRadius:100,
        padding:20,
        top:0,
        right:15,
        position:'absolute'
    }
});

