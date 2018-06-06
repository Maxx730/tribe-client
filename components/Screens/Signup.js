import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image,Button} from 'react-native';

export default class SignUp extends React.Component{
    static navigationOptions = {
        title: "Signup For Tribe",
        headerStyle:{
            backgroundColor:"#f8aa23",
            elevation: 0
        },
        headerTintColor: "#FFF",
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <View style={{padding:7}}>
                        <TextInput underlineColorAndroid='transparent' style={styles.InputField} placeholder="Username">
                            
                        </TextInput>
                        <TextInput underlineColorAndroid='transparent' style={styles.InputField} placeholder="Password">

                        </TextInput>
                        <TextInput underlineColorAndroid='transparent' style={styles.InputField} placeholder="Repeat Password">

                        </TextInput>
                        <TextInput underlineColorAndroid='transparent' style={styles.InputField} placeholder="E-Mail">

                        </TextInput>
                    </View>
                </View>
                <View style={styles.UserAgreement}>
                    <Text>
                        User Agreement
                    </Text>
                    <Text style={{marginTop:10,fontSize:10}}>
                    Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the http://www.mywebsite.com (change this) website and the My Mobile App (change this) mobile application (the "Service") operated by My Company (change this) ("us", "we", or "our").
                    Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
                    By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                    </Text>
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
        flex:1
    },
    SignUpHead:{
        borderTopRightRadius:2,
        borderTopLeftRadius:2,
        borderColor:"#EBEBEB",
        borderBottomWidth:.5,
        flexDirection:'row'
    },
    TitleText:{
        padding:7,
        flex:13
    },
    BackButton:{
        padding:7,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor:"#EBEBEB",
        borderRightWidth:.5,
        borderTopLeftRadius:2
    },
    ButtonIcon:{
        width:16,
        height:16,
        opacity:.1
    },
    InputField:{
        backgroundColor:"#f3f3f3",
        padding:10,
        paddingLeft:50,
        borderRadius:2,
        borderColor:"#dcdcdc",
        borderWidth:.5,
        borderStyle:"solid",
        marginTop:7
      },
      BottomButtons:{
        borderTopColor:"#EBEBEB",
        borderTopWidth:.5,
      },
      BottomButton:{
          padding:7,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"#f8aa23",
          borderBottomRightRadius:2,
          borderBottomLeftRadius:2
      },
      UserAgreement:{
          padding:10,
          borderTopColor:"#EBEBEB",
          borderTopWidth:.5,
          borderBottomColor:"#EBEBEB",
          borderBottomWidth:.5,
      }
});