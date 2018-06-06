import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, AsyncStorage, ScrollView} from 'react-native';

export default class Settings extends React.Component{
    static navigationOptions ={
        title: "Streams",
        headerStyle:{
            backgroundColor:"#f8aa23",
            elevation: 0,
            padding:0
        },
        headerTintColor: "#FFF",
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.SettingsTitle}>
                    Settings
                </Text>
                <View>
                    <ScrollView>
                        <Text>
                            Logout
                        </Text>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    SettingsTitle:{
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:"red",
        backgroundColor:"blue"
    }
})