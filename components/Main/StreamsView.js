import React from 'react';
import { StyleSheet, Text, View, AsyncStorage} from 'react-native';

import StreamToggler from './StreamToggler'
import GlobalAddButton from './GlobalAddButton'
import EventStream from './EventStream'
import GlobalSearch from './GlobalSearch'
import TribesStream from './TribesStream'
import ProfileView from './ProfileView'
import TribeDetails from './TribeDetails'
import TopRightDrawer from './TopRightDrawer'

export default class StreamsView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            focusedView:'tribes',
            focusedTribe:{},
            username: null
        }
    }

    ToggleView(view){
        this.setState(previousState =>{
            return{focusedView:view}
        });
    }

    OpenTribeDetails(tribe){
        this.setState({
            focusedView:'details',
            focusedTribe:tribe
        });
    }

    render(){
        let StreamView = "";
        let flexVal = 3;

        switch(this.state.focusedView){
            case "events":
                StreamView = <EventStream/>
            break;
            case "tribes":
                StreamView = <TribesStream toggle={this.OpenTribeDetails.bind(this)} user={this.props.user}/>
            break;
            case "profile":
                StreamView = <ProfileView user={this.props.user}/>
                flexVal = 5;
            break;
            case "details":
                flexVal = 4.6;
                StreamView = <TribeDetails toggle={this.ToggleView.bind(this)} tribe={this.state.focusedTribe} user={this.props.user}/>
            break;
        }

        return(
            <View style={styles.container}>
                <View style={{zIndex:99}}>
                    <View style={{flexDirection:'row'}}>
                        <GlobalSearch/>
                        <TopRightDrawer logout={this.props.logout.bind(this)}/>
                    </View>
                </View>
                <View>
                    <StreamToggler style={{zIndex:1}} toggle={this.ToggleView.bind(this)}/>
                    {this.state.focusedView === 'events' && <GlobalAddButton type='events' toggle={this.props.main.bind(this)}/>}
                    {this.state.focusedView === 'tribes' && <GlobalAddButton type='tribes' toggle={this.props.main.bind(this)}/>}
                </View>
                <View style={{flex:flexVal,alignSelf:'stretch'}}>
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