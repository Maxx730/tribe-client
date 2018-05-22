import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';

export default class SingleEvent extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.EventTitle}>
                    <View style={styles.TitleText}>
                        <Text>Event Title</Text>
                    </View>
                    <TouchableHighlight style={styles.EventOptions} onPress={() => {console.log("working")}}>
                        <Image style={[styles.ButtonImage,{width:16,height:16}]} source={require('../../assets/icons/dots-icon.png')}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.EventBody}>
                    <Text>[Event Date]</Text>
                </View>
                <View style={styles.EventBody}>
                    <Text>[Creator]</Text>
                </View>
                <View style={styles.EventBody}>
                    <Text>[Event Body]</Text>
                </View>
                <View style={styles.EventFooter}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableHighlight style={styles.EventButton} onPress={() => {console.log("working")}}>
                            <Image style={styles.ButtonImage} source={require('../../assets/icons/check-icon.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.EventButton,styles.CenterButtonImage]} onPress={() => {console.log("working")}}>
                            <Image style={styles.ButtonImage} source={require('../../assets/icons/comment-icon.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.EventButton} onPress={() => {console.log("working")}}>
                            <Image style={styles.ButtonImage} source={require('../../assets/icons/close-icon.png')}/>
                        </TouchableHighlight>
                    </View>
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
    EventTitle:{
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
        flexDirection:'row'
    },
    EventFooter:{
        borderTopWidth:.5,
        borderTopColor:"#EBEBEB"
    },
    EventBody:{
        padding:7
    },
    EventButton:{
        flex:1,
        padding:7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonImage:{
        width:24,
        height:24,
        opacity:.1
    },
    CenterButtonImage:{
        borderLeftWidth:.5,
        borderRightWidth:.5,
        borderRightColor:"#EBEBEB",
        borderLeftColor:"#EBEBEB"
    },
    EventOptions:{
        flex:1,
        borderLeftWidth:.5,
        borderLeftColor:"#EBEBEB",
        borderTopRightRadius:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TitleText:{
        flex:7,
        padding:7
    }
});