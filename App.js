import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

//IMPORT CREATED COMPONENTS HERE.
import LoginFrame from './components/LoginFrame'
import SignUpFrame from './components/SignUpFrame'
import StreamsView from './components/Main/StreamsView'
import AddTribe from './components/Main/AddTribe'
import AddEvent from './components/Main/AddEvent'

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      focusedView:"addevent",
      hasLoaded:false
    }
  }

  ToggleView(view){
    this.setState({
      focusedView:view
    });
  }

  componentDidMount(){
    try{
      AsyncStorage.getItem('@TribeStore:username').then(value => {
        fetch('http://squidswap.com:4000/user/'+value).then(response =>{
          return response.json();
        }).then(data => {
          this.setState({

            user:data[0],
            hasLoaded:true
          });
        });
      });
    }catch(err){
        console.log('ERROR FETCHING USER FROM STORAGE');
    }
  }

  render() {
    if(this.state.hasLoaded){
      switch(this.state.focusedView){
        case "login":
          return (
            <View style={styles.container}>
              <LoginFrame toggle={this.ToggleView.bind(this)}/>
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
  
        case "addtribe":
        return (
          <View style={styles.container}>
            <AddTribe back={this.ToggleView.bind(this)}/>
          </View>
        );
        break;
  
        case "addevent":
        return (
          <View style={styles.container}>
            <AddEvent back={this.ToggleView.bind(this)} user={this.state.user}/>
          </View>
        );
        break;
  
        case "streams":
            return (
              <View style={styles.container}>
                <StreamsView main={this.ToggleView.bind(this)} user={this.state.user}/>
              </View>
            );
        break;
      }
    }else{
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
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
