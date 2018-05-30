import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Switch, TextInput, DatePickerIOS, ScrollView} from 'react-native';
import DatePicker  from 'react-native-datepicker'

export default class AddEvent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user:{},
            hasLoaded:false,
            tribes:[],
            startDate:null,
            endDate:null
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
                <ScrollView>
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
                            <View style={{flexDirection:'row',}}>
                            <DatePicker
                                style={{flex:1}}
                                date={this.state.startDate}
                                mode="date"
                                placeholder="Select Start Date"
                                format="YYYY-MM-DD"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    display:'none'
                                },
                                dateInput: {
                                    backgroundColor:"#FCFCFC",
                                    borderWidth:.5,
                                    borderColor:"#EBEBEB"
                                }
                                }}

                                onDateChange={(date) => {this.setState({startDate: date})}}
                            />
                            <DatePicker

                                style={{flex:1}}
                                date={this.state.endDate}
                                mode="date"
                                placeholder="Select End Date"
                                format="YYYY-MM-DD"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    display:'none'
                                },
                                dateInput: {
                                    backgroundColor:"#FCFCFC",
                                    borderWidth:.5,
                                    borderColor:"#EBEBEB"
                                }
                                }}
                                onDateChange={(date) => {this.setState({endDate: date})}}
                            />
                            </View>
                            <View>
                                <View style={styles.AddTribesTitle}>
                                    <Text>Select Tribes to Include</Text>
                                </View>
                                {this.state.tribes.map(tribe => {
                                    return (
                                        <TouchableHighlight style={styles.SingleTribeTicker} onPress={() => {console.log('working')}}>
                                            <View style={{flexDirection:'row'}}>
                                                <View style={{flex:12}}>
                                                    <Text style={{padding:7}}>{tribe.title}</Text>
                                                </View>
                                                <View style={{flex:1,borderLeftColor:"#EBEBEB",borderLeftWidth:.5,padding:7}}>
                                                    <Image style={{width:16,height:16,opacity:.1}} source={require('../../assets/icons/x-circle.png')}/>
                                                </View>
                                            </View>
                                        </TouchableHighlight>
                                    );
                                })}
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
        borderBottomColor:"#EBEBEB"
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
    },
    AddTribesTitle:{
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
        padding:10    
    }
})