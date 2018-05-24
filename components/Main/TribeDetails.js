import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';

export default class TribeDetails extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){

    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.TribeBanner}>
                    <View style={styles.TitleContainer}>
                        <Text>[Tribe Title]</Text>
                    </View>

                    <Image style={{width:100,height:100}} source={require('../../assets/defaults/default-placeholder.png')}/>
                </View>
                <View style={styles.TabHolder}>
                    <TouchableHighlight style={[styles.TribeButton]} onPress={() => {console.log('working')}}>
                        <Image style={styles.TribeButtonImage} source={require('../../assets/icons/arrow-right-icon.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.TribeButton,styles.CenterButton]} onPress={() => {console.log('working')}}>
                        <Image style={styles.TribeButtonImage} source={require('../../assets/icons/tribes-icon.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.TribeButton]} onPress={() => {console.log('working')}}>
                        <Image style={styles.TribeButtonImage} source={require('../../assets/icons/calendar-icon.png')}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.TribeDescription}>
                    <Text style={{fontSize:8}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
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
    },
    TribeBanner:{
        height:100,
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#f1f1f1"
    },
    TribeDescription:{
        padding:10
    },
    TitleContainer:{
        backgroundColor:"#FFFFFF",
        position:'absolute',
        top:0,
        left:0,
        padding:7
    },
    TribeButtonImage:{
        width:24,
        height:24,
        opacity:.1
    },
    TribeButton:{
        flex:1,
        padding:7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TabHolder:{
        flexDirection:'row',
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
    },
    CenterButton:{
        borderLeftWidth:.5,
        borderLeftColor:"#EBEBEB",
        borderRightWidth:.5,
        borderRightColor:"#EBEBEB",
    }
});