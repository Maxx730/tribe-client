import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image} from 'react-native';

export default class SignUpFrame extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.SignUpHead}>
                    <TouchableHighlight style={styles.BackButton} onPress={() => {}}>
                        <Image style={styles.ButtonIcon} source={require('../assets/icons/back-icon.png')}/>
                    </TouchableHighlight>
                    <View style={styles.TitleText}>
                        <Text>Signup</Text>
                    </View>
                </View>
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
                </View>
                <View style={styles.BottomButtons}>
                    <TouchableHighlight style={styles.BottomButton} onPress={() => {}}>
                            <Text>Sign Me Up!</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        backgroundColor:"#FCFCFC",
        borderRadius:2,
        borderWidth:.5,
        borderColor:"#EBEBEB"
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
          padding:7,
          borderTopColor:"#EBEBEB",
          borderTopWidth:.5,
          borderBottomColor:"#EBEBEB",
          borderBottomWidth:.5,
      }
});