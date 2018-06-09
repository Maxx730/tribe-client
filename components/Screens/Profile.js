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
                            <Image style={{width:100,height:100}} source={require('../../assets/defaults/default-user.png')}/>
                        </View>
                        <View sytle={styles.UserInformationTitles}>
                            <Text>
                                {this.state.user.username}
                            </Text>
                            <Text>
                                {this.state.user.firstname} {this.state.user.lastname}
                            </Text>
                        </View>
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
        backgroundColor:"#FCFCFC",
        borderWidth:.5,
        borderColor:"#EBEBEB",
        borderTopWidth:0,
        padding:10,
        flex:1
    },
    ProfileImage:{
        borderRightColor:"#EBEBEB",
        borderRightWidth:.5
    },
    ProfileTop:{
        flexDirection:'row',
        borderColor:"#EBEBEB",
        borderWidth:.5,
        borderRadius:3,
        backgroundColor:"#FFF"
    },
    UserInformationTitles:{
        flex:1,
        padding:10
    },
    ProfileToggler:{
        flexDirection:'row',
        marginTop:10,
        borderRadius:3,
        borderColor:"#EBEBEB",
        borderWidth:.5,
        backgroundColor:"#FFF"
    },
    ProfileToggle:{
        flex:1,
        padding:10
    },
    CenterToggle:{
        borderRightWidth:.5,
        borderLeftWidth:.5,
        borderRightColor:"#EBEBEB",
        borderLeftColor:"#EBEBEB"
    },
    ToggleView:{
        borderRadius:3,
        borderColor:"#EBEBEB",
        borderWidth:.5,
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
