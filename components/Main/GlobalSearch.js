import React from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';

export default class GlobalSearch extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.SearchIcon]}>
                    <Image style={{width:16,height:16,opacity:.1}} source={require('../../assets/icons/search-icon.png')}/>
                </View>
                <View style={styles.SearchInput}>
                    <TextInput underlineColorAndroid='transparent' placeholder='Search'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FCFCFC",
        borderRadius:2,
        borderWidth:.5,
        borderColor:"#EBEBEB",
        padding:7,
        marginBottom:7,
        flexDirection:'row'
    },
    SearchIcon:{
        flex:1,
        borderRightWidth:.5,
        borderColor:"#EBEBEB",
    },
    SearchInput:{
        flex:11,
        paddingLeft:5
    }
});