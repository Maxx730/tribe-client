import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//IMPORT OUR SCREENS HERE.
import Login from './components/Screens/Login'
import Signup from './components/Screens/Signup'
import Streams from './components/Screens/Streams'
import Profile from './components/Screens/Profile'
import Settings from './components/Screens/Settings'
import Tribe from './components/Screens/Tribe'

//Main application class.  This will handle pointing the user
//to the correct place based on whether or not they are already
//logged in or not.
const AppNav = createStackNavigator({
  Login: { screen:Login },
  Signup: { screen:Signup },
  Streams: { screen:Streams },
  Profile: { screen:Profile },
  Settings: { screen:Settings },
  Tribe:{ screen:Tribe }
});

export default AppNav;