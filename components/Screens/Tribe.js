import React from 'react';
import { PermissionsAndroid, StyleSheet, Text, View, TextInput, TouchableHighlight, Image, AsyncStorage, ScrollView} from 'react-native';

import GlobalSearch from '../Main/GlobalSearch'
import BottomActionbar from '../Main/BottomActionbar';
import NavigationBar from '../Main/NavigationBar'

export default class Tribe extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            user:{},
            tribe:{},
            events:{},
            hasLoaded:false,
            focused:"events"
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
            display:'none',
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
                    <NavigationBar  type="createObject" navigator={this.props.navigation}/>
                    <View style={styles.TribeTop}>
                        <GlobalSearch bottomBorder="false"/>
                        <View style={styles.GeneralInfo}>
                            <Image style={styles.BannerImage} source={require('../../assets/defaults/beachfire.jpg')}/>
                            <Text style={{color:'#FFF',position:'absolute',top:7,left:7}}>
                                {this.state.tribe.title}
                            </Text>
                        </View>
                        <View style={styles.TribeToggles}>
                            <TouchableHighlight style={[styles.ToggleButton,styles.LeftToggle]}>
                                <Text>
                                    Events
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={[styles.ToggleButton,styles.RightToggle]}>
                                <Text>
                                    Details
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <ScrollView>

                            </ScrollView>
                        </View>
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
        backgroundColor:"#141414",
        flex:1,
        padding:5,
        marginTop:20
    },
    TribeTop:{
        marginTop:5
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
    },
    TribeToggles:{
        backgroundColor:'#FFF',
        flexDirection:'row',
        borderBottomLeftRadius:3,
        borderBottomRightRadius:3
    },
    ToggleButton:{
        flex:1,
        padding:10
    },
    RightToggle:{
        borderLeftWidth:.5,
        borderLeftColor:'#EBEBEB',
        borderBottomRightRadius:3
    },
    LeftToggle:{
        borderBottomLeftRadius:3
    }
})