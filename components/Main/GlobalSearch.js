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
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
        padding:10,
        flexDirection:'row',
        borderTopRightRadius:3,
        borderTopLeftRadius:3
    },
    SearchIcon:{
        borderRightWidth:1,
        borderColor:"#EBEBEB",
        paddingRight:13
    },
    SearchInput:{
        paddingLeft:5
    }
});