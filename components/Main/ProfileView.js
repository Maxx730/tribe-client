import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image} from 'react-native';

import TribeList from './small/TribeList'

export default class ProfileView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user:{},
            hasLoaded:false
        }
    }

    componentDidMount(){
        this.setState({
            user:this.props.user,
            focusedList:"tribes",
            hasLoaded:true
        });
    }

    ToggleList(list){
        this.setState({
            focusedList:list
        })
    }


    render(){
        if(this.state.hasLoaded){
            return(
                <View style={styles.container}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:3,borderBottomWidth:.5,borderBottomColor:"#EBEBEB"}}>
                            <Image style={styles.ProfileImage} source={require('../../assets/defaults/default-user.png')}/>
                        </View>
                        <View style={styles.ProfileHead}>
                            <Text>{this.state.user.username}</Text>
                            <View style={styles.FullNameLayout}>
                                <Text style={styles.FullName}>{this.state.user.firstname} {this.state.user.lastname}</Text>
                            </View>
                        </View>
                        <View style={{flex:1,borderBottomWidth:.5,borderBottomColor:"#EBEBEB"}}>
                            <TouchableHighlight style={styles.EditButton} onPress={() => {console.log("working")}}>
                                <Image style={{width:16,height:16,opacity:.1,justifyContent: 'center',alignItems: 'center',}} source={require('../../assets/icons/edit-icon.png')}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.ProfileCounters}>
                        <View style={{flexDirection:'row'}}>
                        <TouchableHighlight style={styles.ButtonLeft} onPress={() => {console.log("working")}}>
                            <Image style={styles.ButtonImage} source={require('../../assets/icons/tribes-icon.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.ButtonRight} onPress={() => {console.log("working")}}>
                            <Image style={styles.ButtonImage} source={require('../../assets/icons/calendar-icon.png')}/>
                        </TouchableHighlight>
                        </View>
                    </View>
                </View>
            );
        }else{
            return(
                <View>
                    <Text>
                        Loading...
                    </Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FCFCFC",
        borderRadius:2,
        borderWidth:.5,
        borderColor:"#EBEBEB",
        marginTop:7
    },
    ProfileHead:{
        padding:7,
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
        flex:4,
    },
    ProfileCounters:{
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB"
    },
    ProfileLists:{
        padding:7,
    },
    ButtonLeft:{
        padding:7,
        borderRightWidth:.5,
        borderRightColor:"#EBEBEB",
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonRight:{
        padding:7,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonImage:{
        width:24,
        height:24,
        opacity:.1
    },
    FullName:{
        fontSize:8,
    },
    FullNameLayout:{
        marginTop:4,
        marginLeft:2,
        alignSelf: 'flex-start',
    },
    ProfileImage:{
        width:100,
        height:100,
        borderTopLeftRadius:2
    },
    
    EditButton:{
        padding:7,
        borderTopRightRadius:2,
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
        borderLeftWidth:.5,
        borderLeftColor:"#EBEBEB",
        borderBottomLeftRadius:2
    }
});