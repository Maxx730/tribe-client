import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SingleEvent from './SingleEvent'

export default class EventStream extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <SingleEvent/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:7
    }
});