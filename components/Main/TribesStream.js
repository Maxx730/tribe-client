import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image} from 'react-native';

import SingleTribe from './SingleTribe'

export default class TribesStream extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SingleTribe/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:7
    }
});