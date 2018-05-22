import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StreamToggler from './StreamToggler'
import GlobalAddButton from './GlobalAddButton'
import EventStream from './EventStream'
import GlobalSearch from './GlobalSearch'
import TribesStream from './TribesStream'
import ProfileView from './ProfileView'

export default class StreamsView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            focusedView:'tribes'
        }
    }

    componentDidMount(){
        this.setState(previousState =>{
            return{focusedView:'tribes'}
        });
    }

    ToggleView(view){
        this.setState(previousState =>{
            return{focusedView:view}
        });

        console.log(this.state)
    }

    render(){
        let StreamView = "";

        switch(this.state.focusedView){
            case "events":
                StreamView = <EventStream/>
            break;
            case "tribes":
                StreamView = <TribesStream/>
            break;
            case "profile":
                StreamView = <ProfileView/>
            break;
        }

        return(
            <View style={styles.container}>
                <GlobalSearch/>
                <StreamToggler toggle={this.ToggleView.bind(this)}/>
                <GlobalAddButton/>
                {StreamView}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop:30
    }
});