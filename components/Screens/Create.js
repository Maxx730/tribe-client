import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, AsyncStorage, ScrollView} from 'react-native';

import NavigationBar from '../Main/NavigationBar'

export default class Create extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            user:{},
            createFocus:"tribe",
            searchTerm:"",
            results:[],
            newTribe:{
                title:"",
                description:"",
                members:[]
            }
        }
    }

    componentDidMount(){

    }

    UpdateSearch(){
        fetch("http://squidswap.com:4000/user/search",{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              search:this.state.searchTerm
            })
        }).then(result => {
            return result.json();
        }).then(data => {
            this.setState({
                results:data
            })
        });
    }

    RenderTribeFields(){
        return(
            <View>
                <View style={styles.TribeFields}>
                    <View style={styles.FieldTitle}>
                        <Text>
                            New Tribe
                        </Text>
                    </View>
                    <View style={styles.FieldsField}>
                        <TextInput underlineColorAndroid='transparent' placeholder="Title" style={[styles.TribeFieldInput,{marginTop:0}]}/>
                        <TextInput underlineColorAndroid='transparent' multiline = {true} style={[styles.TribeFieldInput]}/>
                    </View>
                </View>

                <View style={styles.TribeFields}>
                    <View style={styles.FieldTitle}>
                        <Text>
                            Find Members
                        </Text>
                    </View>
                    <View style={styles.FieldsField}>
                        <TextInput autoCapitalize = 'none' underlineColorAndroid='transparent' placeholder="Username" style={[styles.TribeFieldInput,{marginTop:0}]} onChangeText={(value) => {
                            this.setState({
                                searchTerm:value
                            });

                            this.UpdateSearch();
                        }}/>

                        <ScrollView style={styles.UserScroll}>
                            {
                                this.state.results.map(result => {
                                    return(
                                        <View style={styles.UserResult}>
                                            <Text>{ result.username }</Text>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }

    static navigationOptions = ({navigation}) => ({
        title: "Streams",
        headerStyle:{
            backgroundColor:"#FFF",
            elevation: 0,
            padding:0,
            shadowColor:'transparent',
            shadowRadius: 0,
            borderWidth:0,
            shadowOffset: {
                height: 0,
            },
            display:'none'
        },
        headerTintColor: "#000"
    })

    render(){
        return(
            <View style={styles.container}>
                <NavigationBar navigator={this.props.navigation}/>
                {
                    this.RenderTribeFields()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#141414",
        marginTop:20,
        padding:5
    },
    TribeFields:{
        backgroundColor:"#FFF",
        borderRadius:3,
        marginTop:5
    },
    TribeFieldInput:{
        backgroundColor:"#EBEBEB",
        padding:10,
        borderRadius:3,
        marginTop:5
    },
    FieldTitle:{
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
        padding:10
    },
    FieldsField:{
        padding:10
    },
    UserScroll:{
        borderWidth:.5,
        borderColor:"#EBEBEB",
        marginTop:5,
        borderRadius:3
    },
    UserResult:{
        padding:5
    }
});