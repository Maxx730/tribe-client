import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, AsyncStorage} from 'react-native';

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
            userId:null
        }
    }

    componentDidMount(){
        this.setState({
            userId:this.props.navigation.state.params.userId
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.ProfileImage}>
                    <Image source={require('../../assets/defaults/default-user.png')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    ProfileImage:{

    }
});