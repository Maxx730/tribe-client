import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';

import EventStream from './EventStream'

export default class TribeDetails extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            focusedDetailView:'descrip',
            tribe:{}
        }
    }

    componentDidMount(){
        this.setState({
            tribe:this.props.tribe
        })
    }

    ToggleDetailView(view){
        this.setState({
            focusedDetailView:view
        });
    }

    render(){
        return(
            <View>
                <View style={[styles.container,{marginBottom:7}]}>
                        <TouchableHighlight style={[styles.TribeButton,{padding:20}]} onPress={() => {
                            console.log("working")
                        }}> 
                            <Text>Back to Tribes</Text>
                        </TouchableHighlight>
                </View>
                <View style={styles.container}>
                    <View style={styles.TribeBanner}>
                        <Image style={{width:100,height:100}} source={require('../../assets/defaults/default-placeholder.png')}/>
                        <View style={styles.TitleContainer}>
                            <Text>{this.state.tribe.title}</Text>
                        </View>
                    </View>
                    <View style={styles.TabHolder}>
                        <TouchableHighlight style={[styles.TribeButton]} onPress={this.ToggleDetailView.bind(this,'descrip')}>
                            <Image style={styles.TribeButtonImage} source={require('../../assets/icons/descrip-icon.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.TribeButton,styles.CenterButton]} onPress={this.ToggleDetailView.bind(this,'members')}>
                            <Image style={styles.TribeButtonImage} source={require('../../assets/icons/tribes-icon.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.TribeButton]} onPress={this.ToggleDetailView.bind(this,'events')}>
                            <Image style={styles.TribeButtonImage} source={require('../../assets/icons/calendar-icon.png')}/>
                        </TouchableHighlight>
                    </View>
                    {this.state.focusedDetailView === 'descrip' && <View style={styles.TribeDescription}><Text style={{fontSize:8}}>{this.state.tribe.description}</Text></View>}
                </View>

                {this.state.focusedDetailView === 'events' && <EventStream tribeid={this.props.tribe._id} type="single"/>}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FCFCFC",
        borderRadius:2,
        borderWidth:.5,
        borderColor:"#EBEBEB",
    },
    TribeBanner:{
        height:100,
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#f1f1f1"
    },
    TribeDescription:{
        padding:10
    },
    TitleContainer:{
        backgroundColor:"#FFFFFF",
        position:'absolute',
        top:0,
        padding:7
    },
    TribeButtonImage:{
        width:24,
        height:24,
        opacity:.1
    },
    TribeButton:{
        flex:1,
        padding:7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TabHolder:{
        flexDirection:'row',
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
    },
    CenterButton:{
        borderLeftWidth:.5,
        borderLeftColor:"#EBEBEB",
        borderRightWidth:.5,
        borderRightColor:"#EBEBEB",
    }
});
