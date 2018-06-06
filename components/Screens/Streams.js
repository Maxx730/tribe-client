import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image, TouchableHighlight} from 'react-native';

//IMPORT ALL OF OUR REACT COMPONENTS
import GlobalSearch from '../Main/GlobalSearch'
import StreamToggler from '../Main/StreamToggler'

export default class Streams extends React.Component{
    static navigationOptions = {
        title: "Streams",
        headerStyle:{
            backgroundColor:"#f8aa23",
            elevation: 0,
            padding:0
        },
        headerTintColor: "#FFF",
        headerRight:<TouchableHighlight style={{padding:7,marginRight:3}} onPress={() => {console.log("going to settings")}}><Image style={{width:24,height:24}} source={require('../../assets/icons/settings-512.png')}/></TouchableHighlight>
    }

    render(){
        return(
            <View style={styles.container}>
                <GlobalSearch/>
                <StreamToggler/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFF",
        padding:7
    }  
})