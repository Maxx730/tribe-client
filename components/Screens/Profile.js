import React from 'react';
import { PermissionsAndroid, StyleSheet, Text, View, TextInput, TouchableHighlight, Image, AsyncStorage} from 'react-native';

//IMPORT CUSTOM COMPONENTS.
import LoadingAnimation from '../Main/LoadingAnimation'

export default class Profile extends React.Component{
    static navigationOptions ={
        title: "Profile",
        headerStyle:{
            backgroundColor:"#f8aa23",
            elevation: 0,
            padding:0
        },
        headerTintColor: "#FFF",
    }

    constructor(props){
        super(props)

        this.state = {
            user:{},
            hasLoaded:false
        }
    }

    async requestCameraPermission(){
        const { Permissions } = Expo;
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        if (status === 'granted') {

        } else {
          throw new Error('Location permission not granted');
        }
    }

    componentDidMount(){
        let cont = this;

        fetch("http://www.squidswap.com:4000/user/"+this.props.navigation.state.params.userId).then(result => {
            return result.json();
        }).then(data => {
            this.setState({
                user:data[0],
                hasLoaded:true
            });       

            cont.requestCameraPermission();     
        });
    }

    render(){
        if(this.state.hasLoaded){
            return(
                <View style={styles.container}>
                    <View style={styles.ProfileTop}>
                        <View style={[styles.ProfileImage]}>
                            <Image style={{width:400,height:200}} source={require('../../assets/defaults/generic-banner.jpg')}/>
                        </View>
                    </View>
                    <View style={{}}>

                    </View>
                    <View style={styles.ProfileToggler}>
                        <TouchableHighlight style={styles.ProfileToggle}>
                            <Image style={styles.ToggleIcon} source={require('../../assets/icons/descrip-icon.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.ProfileToggle,styles.CenterToggle]}>
                            <Image style={styles.ToggleIcon} source={require('../../assets/icons/tribes-icon.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.ProfileToggle}>
                            <Image style={styles.ToggleIcon} source={require('../../assets/icons/tribes-icon.png')}/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.ToggleView}>
                        <Text>
                            User Description
                        </Text>
                    </View>
            </View>
            )
        }else{
            return(
                <View>
                    <LoadingAnimation/>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#7b7b7b",
        padding:10,
        flex:1
    },
    ProfileImage:{

    },
    ProfileTop:{
        position:'absolute',
        top:0,
        right:0,
        left:0,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#E5E5E5"
    },
    UserInformationTitles:{
        flex:1,
        padding:10
    },
    ProfileToggler:{
        flexDirection:'row',
        marginTop:100,
        borderRadius:3,
        borderColor:"#8A8A8A",
        borderWidth:1,
        backgroundColor:"#FFF"
    },
    ProfileToggle:{
        flex:1,
        padding:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    CenterToggle:{
        borderRightWidth:.5,
        borderLeftWidth:.5,
        borderRightColor:"#EBEBEB",
        borderLeftColor:"#EBEBEB"
    },
    ToggleView:{
        borderRadius:3,
        borderColor:"#8A8A8A",
        borderWidth:1,
        marginTop:10,
        flex:1,
        padding:10,
        backgroundColor:"#FFF"
    },
    ToggleIcon:{
        width:24,
        height:24,
        opacity:.1
    }
});
