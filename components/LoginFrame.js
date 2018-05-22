import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image} from 'react-native';

export default class LoginFrame extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.LoginHead}>
            
        </Text>
        <View>
            <Text style={styles.LoginTitle}>
                Login or Sign Up
            </Text>
        </View>
        <View style={styles.LoginForm}>
            <View style={{paddingTop:7,paddingBottom:7}}>
                <TextInput underlineColorAndroid='transparent' style={styles.InputField} placeholder="Username">
                    
                </TextInput>
                <TextInput underlineColorAndroid='transparent' style={styles.InputField} placeholder="Password">

                </TextInput>
            </View>

            <View style={{flexDirection:'row'}}>
                <TouchableHighlight style={styles.LoginButton} onPress={() => {console.log("working")}}>
                    <Text style={{textAlign:'center',color:"#FFF"}}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.SignUpButton} onPress={() => {console.log("working")}}>
                    <Text style={{textAlign:'center',color:"#FFF"}}>Sign Up</Text>
                </TouchableHighlight>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    borderRadius:3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation:1,
    backgroundColor:"#FFF"
  },
  LoginHead:{

  },
  LoginTitle:{
    paddingLeft:20,
    paddingTop:15,
    fontSize:20
  },
  LoginForm:{
    padding:15,
    paddingTop:0
  },
  LoginButton:{
    padding:10,
    flex:1,
    backgroundColor:"#f8aa23",
    borderRadius:3,
    marginRight:5,
    borderStyle:'solid',
    borderWidth:1,
    borderColor:"#cf8e1c"
  },
  SignUpButton:{
    padding:10,
    flex:1,
    backgroundColor:"#f8aa23",
    borderRadius:3,
    borderStyle:'solid',
    borderWidth:1,
    borderColor:"#cf8e1c"
  },
  InputField:{
    backgroundColor:"#f3f3f3",
    padding:10,
    paddingLeft:50,
    borderRadius:3,
    borderColor:"#dcdcdc",
    borderWidth:1,
    borderStyle:"solid",
    marginTop:7
  }
});