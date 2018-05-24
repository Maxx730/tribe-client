import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//IMPORT CREATED COMPONENTS HERE.
import LoginFrame from './components/LoginFrame'
import SignUpFrame from './components/SignUpFrame'
import StreamsView from './components/Main/StreamsView'

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      focusedView:"streams",
      hasLoaded:false
    }
  }

  ToggleView(view){
    this.setState({
      focusedView:view,
      user:{}
    });
  }

  componentDidMount(){
    fetch('http://squidswap.com:4000/user/Molx730').then(response =>{
      return response.json();
    }).then(data => {
      this.setState({
        user:data[0],
        hasLoaded:true
      });
    });
  }


  render() {
    switch(this.state.focusedView){
      case "login":
        return (
          <View style={styles.container}>
            <LoginFrame/>
          </View>
        );
      break;
      case "signup":
        return (
          <View style={styles.container}>
            <SignUpFrame/>
          </View>
        );
      break;
      case "streams":
        if(this.state.hasLoaded){
          return (
            <View style={styles.container}>
              <StreamsView user={this.state.user}/>
            </View>
          );
        }else{
          return (
            <View style={styles.container}>
              <Text>Loading...</Text>
            </View>
          );
        }
      break;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:"#f3f3f3",
    flex:1
  },
});
