import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image} from 'react-native';

export default class SingleTribe extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.TribeTitle}>
                    <Text>[Tribe Title]</Text>
                </View>
                <View style={styles.TribeDescription}>
                    <Text>[Tribe Description]</Text>
                </View>
                <View style={styles.TribeButtons}>
                <TouchableHighlight style={styles.TribeButton} onPress={() => {console.log('working')}}>
                        <Image style={styles.TribeButtonImage} source={require('../../assets/icons/tribes-icon.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.TribeButton} onPress={() => {console.log('working')}}>
                        <Text>Button 2</Text>
                    </TouchableHighlight>
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
        borderColor:"#EBEBEB"
    },
    TribeTitle:{
        padding:7,
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB"
    },
    TribeButtons:{
        flexDirection:'row',
        borderTopWidth:.5,
        borderTopColor:"#EBEBEB"
    },
    TribeButton:{
        flex:1,
        padding:7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TribeButtonImage:{
        width:24,
        height:24,
        opacity:.1
    },
    TribeDescription:{
        padding:7
    }
});