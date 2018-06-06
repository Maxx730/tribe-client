import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image, TouchableHighlight} from 'react-native';

//IMPORT ALL OF OUR REACT COMPONENTS
import GlobalSearch from '../Main/GlobalSearch'
import StreamToggler from '../Main/StreamToggler'

export default class Streams extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title: "Streams",
        headerStyle:{
            backgroundColor:"#f8aa23",
            elevation: 0,
            padding:0
        },
        headerTintColor: "#FFF",
        headerRight:<TouchableHighlight style={{padding:7,marginRight:3}} onPress={() => {navigation.navigate('Settings')}}><Image style={{width:24,height:24}} source={require('../../assets/icons/settings-512.png')}/></TouchableHighlight>,
        headerLeft:<View></View>
    })

    constructor(props){
        super(props)

        this.state = {
            userId:null
        }
    }

    //FETCH ALL THE DATA ABOUT THIS USER FROM THE BACKEND.
    componentDidMount(){
        //GRAB THE USER ID FROM THE NAVIGATION OBJECT, THIS IS ONLY GOING TO BE LIKE 
        //DURING DEVELOPMENT AS EVENTUALLY WE WANT TO CHECK AND SEE IF THE USER ID
        //IS IN ASYNC STORAGE.
        this.setState({
            userId:this.props.navigation.state.params.userId
        })
    }

    //RENDER THE STREAMVIEW.
    render(){
        const { navigate } = this.props.navigation;

        return(
            <View style={styles.container}>
                <GlobalSearch/>
                <StreamToggler user={this.state.userId} navigator={navigate}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFF",
        padding:7
    }  
})