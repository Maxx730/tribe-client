import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, AsyncStorage} from 'react-native';

export default class LoadingAnimation extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={{width:32,height:32}} source={require('../../assets/defaults/loading.gif')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding:10
    }
})