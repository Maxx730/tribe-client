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
      case "streams":
        return (
          <View style={styles.container}>
            <StreamsView/>
          </View>
        );
      break;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:"#f3f3f3",
    paddingBottom:100,
    flex:1
  },
});
