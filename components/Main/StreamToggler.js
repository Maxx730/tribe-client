import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';

export default class StreamToggler extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.TopHalf}>
                
                </View>
                <View style={styles.BottomHalf}>
                    <TouchableHighlight style={[styles.StreamToggle,styles.LeftToggle]} onPress={this.props.toggle.bind(this,'events')}>
                        <Image style={styles.ImageIcon} source={require('../../assets/icons/calendar-icon.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.StreamToggle,styles.CenterToggle]} onPress={this.props.toggle.bind(this,'tribes')}>
                        <Image style={styles.ImageIcon} source={require('../../assets/icons/tribes-icon.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.StreamToggle,styles.RightToggle]} onPress={this.props.toggle.bind(this,'profile')}>
                        <Image style={styles.ImageIcon} source={require('../../assets/icons/user-icon.png')}/>
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
        backgroundColor:"#FCFCFC",
        borderTopRightRadius:2,
        borderTopLeftRadius:2,
        borderWidth:.5,
        borderColor:"#EBEBEB"
    },
    BottomHalf:{
        height:40,
        backgroundColor:"#FCFCFC",
        borderBottomLeftRadius:2,
        borderBottomRightRadius:2,
        flexDirection:'row',
        borderWidth:.5,
        borderColor:"#EBEBEB",
        borderTopWidth:0
    },
    StreamToggle:{
        flex:1,
        padding:7,
        backgroundColor:"#FCFCFC",
        justifyContent: 'center',
        alignItems: 'center',
    },
    CenterToggle:{
        borderColor:"#EBEBEB",
        borderLeftWidth:.5,
        borderRightWidth:.5
    },
    RightToggle:{
        borderBottomRightRadius:2
    },
    LeftToggle:{
        borderBottomLeftRadius:2
    },
    ImageIcon:{
        width:24,
        height:24,
        opacity:.1
    }
});