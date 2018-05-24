import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StreamToggler from './StreamToggler'
import GlobalAddButton from './GlobalAddButton'
import EventStream from './EventStream'
import GlobalSearch from './GlobalSearch'
import TribesStream from './TribesStream'
import ProfileView from './ProfileView'
import TribeDetails from './TribeDetails'

export default class StreamsView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            focusedView:'tribes'
        }
    }

    componentDidMount(){
        this.setState(previousState =>{
            return{focusedView:'details'}
        });
    }

    ToggleView(view){
        this.setState(previousState =>{
            return{focusedView:view}
        });
    }

    render(){
        let StreamView = "";

        switch(this.state.focusedView){
            case "events":
                StreamView = <EventStream/>
            break;
            case "tribes":
                StreamView = <TribesStream user={this.props.user}/>
            break;
            case "profile":
                StreamView = <ProfileView user={this.props.user}/>
            break;
            case "details":
                StreamView = <TribeDetails user={this.props.user}/>
            break;
        }

        return(
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <GlobalSearch/>
                    <StreamToggler toggle={this.ToggleView.bind(this)}/>
                    <GlobalAddButton/>
                </View>
                <View style={{flex:2.6,alignSelf:'stretch'}}>
                    {StreamView}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop:30,
        flex:1,
        alignSelf:'stretch'
    }
});