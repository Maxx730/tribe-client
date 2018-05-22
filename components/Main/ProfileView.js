import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image} from 'react-native';

export default class ProfileView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user:{}
        }
    }

    componentDidMount(){
        this.setState({
            user:this.props.user,
            focusedList:"tribes"
        });
    }

    ToggleList(list){
        this.setState({
            focusedList:list
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.ProfileHead}>
                    <Text>{this.state.user.username}</Text>
                    <Text style={styles.FullName}>{this.state.user.firstname} {this.state.user.lastname}</Text>
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
                <View style={styles.ProfileCounters}>
                    <Text>Lists</Text>
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
        marginTop:7
    },
    ProfileHead:{
        padding:7,
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB"
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
        padding:5,
        backgroundColor:"red",
        alignSelf: 'flex-start',
        borderRadius:5
    }
});