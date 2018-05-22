import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//IMPORT CREATED COMPONENTS HERE.
import LoginFrame from './components/LoginFrame'
import SignUpFrame from './components/SignUpFrame'

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      focusedView:"signup"
    }
  }

  ToggleView(view){
    this.setState({
      focusedView:view
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
    }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:"#f3f3f3",
    paddingBottom:100,
    flex:1
  },
});
