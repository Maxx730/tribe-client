import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';

export default class AddEvent extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.AddEventTitle}>
                    <Text>Add Event</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        backgroundColor:"#FCFCFC",
        borderRadius:2,
        borderWidth:.5,
        borderColor:"#EBEBEB"
    },
    AddEventTitle:{

    }
})