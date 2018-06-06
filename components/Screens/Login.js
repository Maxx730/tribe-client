import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, AsyncStorage} from 'react-native';

//IMPORT ANY CUSTOM COMPONENTS THAT WE HAVE CREATED.
import ContactUsBar from '../Main/ContactUsBar'
import LoadingAnimation from '../Main/LoadingAnimation'

export default class LoginFrame extends React.Component {
    static navigationOptions = {
        title: "Tribe Login",
        headerStyle: {
            elevation: 0,
            backgroundColor:"#f8aa23"
        },
        headerTintColor: "#FFF",
    }

    constructor(props){
        super(props)

        this.state = {
            username:null,
            password:null,
            errorValue:null,
            isLoading:false
        }
    }

    //MAKE SURE BOTH THE USERNAME AND PASSWORD FIELDS HAVE VALUES,
    //THEN SEND FETCH REQUEST TO THE SERVER TO CHECK/RETURN THE
    //USER ID
    RequestLogin(){
        if(this.state.username != null && this.state.password != null){
            this.setState({
                isLoading:true,
                errorValue:null
            })

            //SEND THE FETCH REQUEST HERE, IF IT COMES BACK WITH A SUCCESS WE ARE GOING TO 
            //THEN MOVE ONTO THE NEXT SCREEN.
            fetch("http://squidswap.com:4000/user/login").then(result => {
                return result.json()
            }).then(data => {

            })

        }else{
            this.setState({
                errorValue:"Either the username or password field is blank."
            })
        }
    }

    //IF THERE HAS BEEN AN ERROR SUCH AS SOME FIELDS NOT BEING FILLED OUT WE WANT TO 
    //DISPLAY THE ERROR MESSAGE.
    RenderError(){
        if(this.state.errorValue != null){
            return(
                <View style={styles.LoginError}>

                    <Text style={{color:"#795A56",fontSize:11}}>
                        {this.state.errorValue}
                    </Text>
                </View>
            )
        }
    }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.LogoLayout}>
            <Text>Welcome</Text>
        </View>
        <View style={styles.LoginForm}>
            <View style={{paddingTop:7,paddingBottom:7}}>
                <View style={styles.InputField}>
                    <View style={{flex:1,borderRightWidth:.5,borderRightColor:"#dcdcdc",padding:10,paddingRight:15}}>
                        <Image style={styles.InputIcon} source={require('../../assets/icons/user-icon.png')}/>
                    </View>
                    <View style={{flex:12,padding:10,paddingLeft:15}}>
                        <TextInput underlineColorAndroid='transparent' onChangeText={(text) => {this.setState({username:text})}} placeholder="Username">
                            
                        </TextInput>
                    </View>
                </View>
                <View style={styles.InputField}>
                    <View style={{flex:1,borderRightWidth:.5,borderRightColor:"#dcdcdc",padding:10,paddingRight:15}}>
                        <Image style={styles.InputIcon} source={require('../../assets/icons/lock-512.png')}/>
                    </View>
                    <View style={{flex:12,padding:10,paddingLeft:15}}>
                        <TextInput underlineColorAndroid='transparent' secureTextEntry  onChangeText={(text) => {this.setState({password:text})}} placeholder="Password">

                        </TextInput>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row',marginTop:10}}>
                <TouchableHighlight style={styles.LoginButton}>
                    <Text style={{textAlign:'center',color:"#FFF",fontWeight:'bold'}} onPress={this.RequestLogin.bind(this)}>Sign In</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.BelowLayout}>
                <Text style={[styles.TextBelow,{textAlign:'right',flex:.7}]}>Sign Up</Text>
                <Text style={styles.TextBelow}>Forgot Password</Text>
            </View>

            { this.state.isLoading && <LoadingAnimation/> }

            <View>
            {
                this.RenderError()
            }
            </View>
        </View>
        <View style={{padding:10}}>
            <ContactUsBar/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:"#FCFCFC",
    flex:1,
    justifyContent: 'center'
  },
  LoginHead:{
    borderBottomWidth:.5
  },
  LoginTitle:{
    paddingLeft:20,
    paddingTop:15,
    fontSize:20
  },
  LoginForm:{
    padding:15,
    paddingTop:0,
    flex:1
  },
  LoginButton:{
    padding:10,
    flex:1,
    backgroundColor:"#f8aa23",
    borderRadius:3,
    borderStyle:'solid',
    borderWidth:1,
    borderColor:"#cf8e1c"
  },
  SignUpButton:{
    padding:10,
    flex:1,
    backgroundColor:"#f8aa23",
    borderRadius:2,
    borderStyle:'solid',
    borderWidth:1,
    borderColor:"#cf8e1c"
  },
  InputField:{
    backgroundColor:"#f3f3f3",
    borderRadius:3,
    borderColor:"#dcdcdc",
    borderWidth:1,
    borderStyle:"solid",
    marginTop:7,
    flexDirection:'row'
  },
  LoginWith:{
    backgroundColor:"#FCFCFC",
    borderBottomRightRadius:2,
    borderBottomLeftRadius:2,
    padding:10,
    borderTopWidth:.5,
    borderTopColor:"#dcdcdc",
    paddingLeft:15
  },
  HeaderIcon:{
      width:16,
      height:16
  },
  LoginError:{
      backgroundColor:"#F8B8B1",
      borderRadius:3,
      padding:10,
      marginTop:10,
      borderWidth:.5,
      borderColor:"#DFA59F"
  },
  InputIcon:{
      width:0,
      height:0,
      opacity:.1
  },
  LogoLayout:{
      padding:15,
      justifyContent: 'center',
  },
  TextBelow:{
      textDecorationLine:"underline",
      fontSize:12,
      padding:7,
      flex:1,
      textAlign: 'left'
  },
  BelowLayout:{
      flexDirection:'row',
      justifyContent: 'center',
      marginTop:10
  }
});
