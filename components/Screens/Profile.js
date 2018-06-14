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

    convertDate(date){
        let newDate = new Date(date);
        let month = "";

        switch(newDate.getMonth()){
            case 0:
                month = "January"
            break;
            case 1:
                month = "February"
            break;
            case 2:
                month = "March"
            break;
            case 3:
                month = "April"
            break;
            case 4:
                month = "May"
            break;
            case 5:
                month = "June"
            break;
            case 6:
                month = "July"
            break;
            case 7:
                month = "August"
            break;
            case 8:
                month = "September"
            break;
            case 9:
                month = "October"
            break;
            case 10:
                month = "November"
            break;
            case 11:
                month = "December"
            break;
        }

        return (
            <View>
                <Text style={{color:'#FFF',fontSize:12,fontWeight:'bold'}}>Member Since</Text>
                <Text style={{color:'#FFF',fontSize:10}}>{month} {newDate.getDay()}, {newDate.getFullYear()}</Text>
            </View>
        )
    }

    componentDidMount(){
        let cont = this;

        fetch("http://www.squidswap.com:4000/user/"+this.props.navigation.state.params.userId).then(result => {
            return result.json();
        }).then(data => {
            this.setState({
                user:data,
                hasLoaded:true
            });

            console.log(this.state.user)

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
                        <View style={styles.UserInformationTitles}>
                            <Text style={styles.UserInfoUsername}>
                                {this.state.user.username}
                            </Text>
                            <Text style={styles.UserInfoFullname}>
                                {this.state.user.firstname} {this.state.user.lastname}
                            </Text>
                        </View>
                        <View style={styles.UserInfoJoinDate}>
                            {this.convertDate(this.state.user.signup)}
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#E5E5E5"
    },
    UserInformationTitles:{
        padding:10,
        position:'absolute',
        top:0,
        left:0
    },
    UserInfoUsername:{
        color:"#FFF",
        fontSize:20,
        fontWeight:'bold'
    },
    UserInfoFullname:{
        color:"#FFF",
        fontSize:10
    },
    UserInfoJoinDate:{
        position:'absolute',
        right:20,
        top:15
    },
    ProfileToggler:{
        flexDirection:'row',
        marginTop:100,
        borderRadius:3,
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
