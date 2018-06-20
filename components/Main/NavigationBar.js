import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';

export default class NavigationBar extends React.Component{

    componentDidMount(){
    }

    RenderEdit(){
        return(
            <TouchableHighlight style={[styles.ButtonRight,styles.NavButton,{flex:1,borderLeftWidth:.5,borderLeftColor:"#EBEBEB"}]} onPress={this.props.edit}>
                <View style={{flexDirection:'row'}}>
                    <View style={{}}>
                        <Image style={{width:24,height:24,opacity:.1}} source={require('../../assets/icons/edit-512.png')}/>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    RenderTribeCreate(){
        return(
            <View style={{}}>
                <TouchableHighlight style={{borderLeftWidth:.5,borderLeftColor:"#EBEBEB",padding:10}}>
                    <Image style={{width:24,height:24,opacity:.1}} source={require('../../assets/icons/square-add.png')}/>
                </TouchableHighlight>
            </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight style={[styles.ButtonLeft,styles.NavButton,{flex:10}]} onPress={() => {this.props.navigator.navigate('Streams')}}>
                    <Image source={require('../../assets/icons/back-icon.png')} style={{width:24,height:24,opacity:.1}}/>
                </TouchableHighlight>
                { 
                    this.props.isUser == true && this.RenderEdit()
                }
                {
                    this.props.type == "createObject" && this.RenderTribeCreate()
                }
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFF",
        borderRadius:3,
        flexDirection:'row'
    },
    NavButton:{
        padding:10,
        flex:1
    },
    ButtonRight:{

    },
    ButtonLeft:{

    }
})