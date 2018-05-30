import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import SingleEvent from './SingleEvent'

export default class EventStream extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            streamType:"all",
            hasLoaded:false,
            tribeId:null,
            events:[]
        }
    }

    componentDidMount(){
        fetch("http://squidswap.com:4000/events/"+this.props.tribeid).then(result => {
            return result.json();
        }).then(data => {
            this.setState({
                events:data,
                hasLoaded:true
            })
        });
    }

    render(){
        if(this.state.hasLoaded && this.state.events.length > 0){
            return(
                <View style={styles.container}>
                    <View>
                        <ScrollView>
                            {
                                this.state.events.map(event => {
                                    return <SingleEvent event={event}/>
                                })
                            }
                        </ScrollView>
                    </View>
                </View>
            );
        }else if(this.state.events.length === 0){
            return(
                <View style={styles.NothingToShow}>
                    <Text>No Current Events</Text>
                </View>
            )
        }else{
            return(
                <View style={styles.container}>
                    <View>
                        <Text>Loading...</Text>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:7
    },
    NothingToShow:{
        padding:10,
        borderRadius:2,
        backgroundColor:"#D9D9D9",
        marginTop:7,
        borderColor:"#C9C9C9",
        borderWidth:.5
    }
});