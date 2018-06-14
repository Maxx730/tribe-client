import React from 'react';
import { PermissionsAndroid, StyleSheet, Text, View, TextInput, TouchableHighlight, Image, AsyncStorage} from 'react-native';

export default class BottomActionbar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            user:{},
            tribe:{},
            events:{}
        }
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableHighlight style={[styles.ActionButton,styles.LeftButton]} onPress={() => {
                            console.log("working")
                        }}>
                            <Text>
                                Create Event
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.ActionButton,styles.RightButton]} onPress={() => {
                            console.log("working")
                        }}>
                            <Text>
                                Invite
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFF",
        borderRadius:3,
        flexDirection:'row',
        position:'absolute',
        bottom:5,
        left:5,
        right:5
    },
    ActionButton:{
        flex:1,
        padding:10
    },
    LeftButton:{
        borderBottomLeftRadius:3,
        borderTopLeftRadius:3
    },
    RightButton:{
        borderBottomRightRadius:3,
        borderTopRightRadius:3
    },
    ActionIcon:{
        width:24,
        height:24
    }
});

