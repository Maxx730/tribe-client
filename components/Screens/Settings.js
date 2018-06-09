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
                <View style={styles.SettingsList}>
                    <ScrollView>
                        <View style={styles.ListItem}>
                            <Text>
                                Show Tribes First
                            </Text>
                        </View>
                        <View style={styles.ListItem}>
                            <Text>
                                Logout
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FCFCFC",
        borderWidth:.5,
        borderColor:"#EBEBEB",
        borderTopWidth:0,
        padding:10,
        flex:1
    },
    SettingsTitle:{
        padding:10,
        flexDirection:'row',
        borderColor:"#EBEBEB",
        borderWidth:.5,
        borderRadius:3,
        backgroundColor:"#FFF"
    },
    SettingsList:{
        flexDirection:'row',
        borderColor:"#EBEBEB",
        borderWidth:.5,
        borderRadius:3,
        backgroundColor:"#FFF",
        marginTop:10
    },
    ListItem:{
        padding:10,
        borderBottomColor:"#EBEBEB",
        borderBottomWidth:.5
    },
    LastItem:{
        borderBottomWidth:0
    }
})