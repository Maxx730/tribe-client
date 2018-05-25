import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Switch, TextInput, DatePickerIOS} from 'react-native';

export default class AddEvent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user:{},
            hasLoaded:false,
            tribes:[]
        }
    }

    componentDidMount(){
        fetch("http://squidswap.com:4000/user/tribes/"+this.props.user._id).then(result => {
            return result.json();
        }).then(data => {
            this.setState({
                user:this.props.user,
                tribes:data,
                hasLoaded:true
            });
        });
    }

    render(){
        if(this.state.hasLoaded){
            return(
                <View>
                    <View style={[styles.container,{marginTop:30,alignSelf: 'flex-start',}]}>
                        <TouchableHighlight style={styles.ButtonLeft} onPress={this.props.back.bind(this,'streams')}>
                            <Image style={styles.ButtonImage} source={require('../../assets/icons/close-icon.png')}/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.AddEventTitle}>
                            <Text>Add Event</Text>
                        </View>
                        <View style={{padding:10}}>
                            <TextInput underlineColorAndroid='transparent' style={styles.InputField} placeholder="Event Title">
                            
                            </TextInput>
                            <TextInput underlineColorAndroid='transparent' style={[styles.InputField,{height:100}]} multiline={true}>
                            
                            </TextInput>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <DatePickerIOS style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }],flex:1}} mode="date" date={new Date()}/>
                            <DatePickerIOS style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }],flex:1}} mode="time" date={new Date()}/>
                        </View>
                        <View>
                            <Text>Select Tribes to Include</Text>
                            {this.state.tribes.map(tribe => {
                                return (
                                    <View key={tribe._id} style={styles.SingleTribeTicker}>
                                        <Switch ref={tribe._id} style={styles.TribeSwitch} value = {true}/>
                                        <Text>{tribe.title}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </View>
            );
        }else{
            return(
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:7,
        backgroundColor:"#FCFCFC",
        borderRadius:2,
        borderWidth:.5,
        borderColor:"#EBEBEB"
    },
    AddEventTitle:{
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
        padding:10
    },
    SingleTribeTicker:{
        position:"relative",
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
        padding:10
    },
    TribeSwitch:{
        position:"absolute",
        right:5,
        top:3
    },
    InputField:{
        backgroundColor:"#f3f3f3",
        padding:10,
        borderRadius:2,
        borderColor:"#dcdcdc",
        borderWidth:.5,
        borderStyle:"solid",
        marginTop:7
      },
      ButtonImage:{
        width:32,
        height:32,
        opacity:.1
    }
})