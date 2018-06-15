import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';

export default class StreamToggler extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.BottomHalf}>
                    <TouchableHighlight style={[styles.StreamToggle,styles.LeftToggle]} onPress={this.props.toggle.bind(this,"events")}>
                        <Image style={styles.ImageIcon} source={require('../../assets/icons/calendar-icon.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.StreamToggle,styles.CenterToggle]} onPress={this.props.toggle.bind(this,"tribes")}>
                        <Image style={styles.ImageIcon} source={require('../../assets/icons/tribes-icon.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.StreamToggle,styles.CenterToggle,{borderLeftWidth:0}]} onPress={() => {this.props.navigator('Profile',{userId:this.props.user,isUser:false})}}>
                        <Image style={styles.ImageIcon} source={require('../../assets/icons/user-icon.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.StreamToggle,styles.RightToggle]} onPress={() => {this.props.navigator('Create',{})}}>
                        <Image style={styles.ImageIcon} source={require('../../assets/icons/plus-512.png')}/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{

    },
    TopHalf:{
        height:10,
        backgroundColor:"#FFF",
        borderTopRightRadius:2,
        borderTopLeftRadius:2,
        borderWidth:.5,
        borderColor:"#EBEBEB"
    },
    BottomHalf:{
        height:40,
        backgroundColor:"#FFF",
        borderRadius:3,
        flexDirection:'row',
        borderTopWidth:0,
        borderBottomRightRadius:3,
        borderBottomLeftRadius:3
    },
    StreamToggle:{
        flex:1,
        padding:7,
        backgroundColor:"#FFF",
        justifyContent: 'center',
        alignItems: 'center',
    },
    CenterToggle:{
        borderColor:"#EBEBEB",
        borderLeftWidth:.5,
        borderRightWidth:.5
    },
    RightToggle:{
        borderBottomRightRadius:3
    },
    LeftToggle:{
        borderBottomLeftRadius:3
    },
    ImageIcon:{
        width:24,
        height:24,
        opacity:.1
    }
});