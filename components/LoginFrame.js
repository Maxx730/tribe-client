import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image} from 'react-native';

export default class LoginFrame extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.LoginHead}>
            
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

        <View style={styles.LoginWith}>
          <Text>
            Or Log In With
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    backgroundColor:"#FCFCFC",
    borderRadius:2,
    borderWidth:.5,
    borderColor:"#EBEBEB"
  },
  LoginHead:{
    height:45,
    borderTopRightRadius:2,
    borderTopLeftRadius:2,
    borderColor:"#EBEBEB",
    borderBottomWidth:.5
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
    borderRadius:2,
    marginRight:5,
    borderStyle:'solid',
    borderWidth:.5,
    borderColor:"#cf8e1c"
  },
  SignUpButton:{
    padding:10,
    flex:1,
    backgroundColor:"#f8aa23",
    borderRadius:2,
    borderStyle:'solid',
    borderWidth:.5,
    borderColor:"#cf8e1c"
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
  LoginWith:{
    backgroundColor:"#FCFCFC",
    borderBottomRightRadius:2,
    borderBottomLeftRadius:2,
    padding:10,
    borderTopWidth:.5,
    borderTopColor:"#dcdcdc",
    paddingLeft:15
  }
});