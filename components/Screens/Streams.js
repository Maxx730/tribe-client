import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image, TouchableHighlight, StatusBar} from 'react-native';

//IMPORT ALL OF OUR REACT COMPONENTS
import GlobalSearch from '../Main/GlobalSearch'
import StreamToggler from '../Main/StreamToggler'
import BottomActionbar from '../Main/BottomActionbar'
import TribesStream from '../Main/TribesStream'

export default class Streams extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title: "Streams",
        headerStyle:{
            backgroundColor:"#FFF",
            elevation: 0,
            padding:0,
            shadowColor:'transparent',
            shadowRadius: 0,
            borderWidth:0,
            shadowOffset: {
                height: 0,
            },
            display:'none'
        },
        headerTintColor: "#000",
        headerRight:<TouchableHighlight style={{padding:7,marginRight:3}} onPress={() => {navigation.navigate('Settings')}}><Image style={{width:24,height:24}} source={require('../../assets/icons/settings-512.png')}/></TouchableHighlight>,
        headerLeft:<View></View>
    })

    constructor(props){
        super(props)

        this.state = {
            userId:null,
            focusedStream:"events",
            hasLoaded:false
        }
    }

    //TOGGLES THE STREAM AND THEN RERENDERS THE VIEW.
    Togglestream(stream){
        this.setState({
            focusedStream:stream
        })
    }

    //FETCH ALL THE DATA ABOUT THIS USER FROM THE BACKEND.
    componentDidMount(){
        //GRAB THE USER ID FROM THE NAVIGATION OBJECT, THIS IS ONLY GOING TO BE LIKE 
        //DURING DEVELOPMENT AS EVENTUALLY WE WANT TO CHECK AND SEE IF THE USER ID
        //IS IN ASYNC STORAGE.
        this.setState({
            userId:this.props.navigation.state.params.userId,
            hasLoaded:true
        })
    }

    //RENDER THE STREAMVIEW.
    render(){
        const { navigate } = this.props.navigation;

        if(this.state.hasLoaded){
            return(
                <View style={styles.container}>
                    <View style={{padding:5,paddingBottom:0}}>
                        <GlobalSearch/>
                        <StreamToggler toggle={this.Togglestream.bind(this)} user={this.state.userId} navigator={navigate}/>
                    </View>
                    <View style={styles.StreamView}>
                        { this.state.focusedStream == "tribes" && <TribesStream navigator={navigate} user={this.state.userId}/> }
                    </View>
                </View>
            )
        }else{
            return(
                <View>
                    <Text>
                        Loading...
                    </Text>
                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#141414",
        marginTop:20
    },
    StreamView:{
        flex:1,
        padding:5,
        backgroundColor:"#141414"
    }
})