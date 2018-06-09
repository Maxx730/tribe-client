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
                    <TextInput style={{flex:1,width:200,paddingLeft:6}} underlineColorAndroid='transparent' placeholder='Search'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFF",
        borderRadius:2,
        borderWidth:.5,
        borderColor:"#EBEBEB",
        padding:10,
        flexDirection:'row',
    },
    SearchIcon:{
        borderRightWidth:.5,
        borderColor:"#EBEBEB",
        paddingRight:10
    },
    SearchInput:{
        paddingLeft:5
    }
});