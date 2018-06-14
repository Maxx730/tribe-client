import React from 'react';
import { PermissionsAndroid, StyleSheet, Text, View, TextInput, TouchableHighlight, Image, AsyncStorage} from 'react-native';

import GlobalSearch from '../Main/GlobalSearch'
import BottomActionbar from '../Main/BottomActionbar';

export default class Tribe extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            user:{},
            tribe:{},
            events:{},
            hasLoaded:false
        }
    }

    componentDidMount(){
        this.setState({
            tribe:this.props.navigation.state.params.tribe,
            hasLoaded:true
        })
    }

    static navigationOptions = ({navigation}) => ({
        title: "Tribe",
        headerStyle:{
            backgroundColor:"#FFF",
            elevation: 0,
            padding:0,
            shadowColor:'transparent',
            shadowRadius: 0,
            borderWidth:0,
            shadowOffset: {
                height: 0,
            }
        },
        headerTintColor: "#000"
    })

    render(){
        if(this.state.hasLoaded){
            return(
                <View style={styles.container}>
                    <View style={styles.TribeTop}>
                        <GlobalSearch bottomBorder="false"/>
                        <View style={styles.GeneralInfo}>
                            <Image style={styles.BannerImage} source={require('../../assets/defaults/beachfire.jpg')}/>
                            <Text>{this.state.tribe.title}</Text>
                        </View>
                    </View>
                    <BottomActionbar/>
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
        backgroundColor:"#141414",
        flex:1,
        padding:5
    },
    TribeTop:{

    },
    GeneralInfo:{
        backgroundColor:"#FFF",
        overflow:'hidden',
        height:100
    },
    BannerImage:{
        width:400,
        position:'absolute',
        top:0,
        left:0
    }
})