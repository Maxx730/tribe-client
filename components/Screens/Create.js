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
                creator:"",
                members:[]
            },
            creationError:"",
            success:false
        }
    }

    componentDidMount(){
        this.setState({
            newTribe:{
                title:this.state.newTribe.title,
                description:this.state.newTribe.description,
                creator:this.props.navigation.state.params.user,
                members:[this.props.navigation.state.params.user]
            }
        })
    }

    RequestCreation(){
        let cont = this;

        if(this.state.newTribe.title != ""){
            fetch('http://squidswap.com:4000/tribe/create',{
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.newTribe)
            }).then(result => {
                return result.json()
            }).then(data => {
                if(data.PASSED){
                    this.setState({
                        success:true,
                        creationError:""
                    })

                    setTimeout(function(){
                        cont.props.navigation.navigate('Streams',{
                            reload:"tribes"
                        })
                    },750)
                }else{
    
                }
            })
        }else{
            this.setState({
                creationError:"Title field cannot be blank."
            })
        }
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

    RenderError(){
        return(
            <View style={styles.ErrorMessage}>
                <Text>
                    {
                        this.state.creationError
                    }
                </Text>
            </View>
        )
    }

    RenderSuccess(){
        return(
            <View style={styles.SuccessMessage}>
                <Text>
                    Tribe successfully created!
                </Text>
            </View>
        )
    }

    RenderTribeFields(){
        return(
            <View style={{flex:1}}>
                {
                    this.state.creationError != "" && this.RenderError()
                }
                {
                    this.state.success && this.RenderSuccess()
                }
                <View style={styles.TribeFields}>
                    <View style={styles.FieldTitle}>
                        <Text>
                            New Tribe
                        </Text>
                    </View>
                    <View style={styles.FieldsField}>
                        <TextInput underlineColorAndroid='transparent' placeholder="Title" style={[styles.TribeFieldInput,{marginTop:0}]} onChangeText={
                            (value) => {
                                this.setState({
                                    newTribe:{
                                        title:value,
                                        description:this.state.newTribe.description,
                                        creator:this.state.newTribe.creator,
                                        members:this.state.newTribe.members
                                    }
                                })
                            }   
                        }/>
                        <TextInput underlineColorAndroid='transparent' multiline = {true} rows={5} style={[styles.TribeFieldInput]} onChangeText={
                            (value) => {
                                this.setState({
                                    newTribe:{
                                        title:this.state.newTribe.title,
                                        description:value,
                                        creator:this.state.newTribe.creator,
                                        members:this.state.newTribe.members
                                    }
                                })
                            }
                        }/>
                    </View>
                    <TouchableHighlight style={styles.TribeBannerImage}>
                        <Image resizeMode={'cover'} style={{width:'100%',height:100}} source={require('../../assets/defaults/beachfire.jpg')}/>
                    </TouchableHighlight>
                    <Text style={{padding:10}}>
                        Select a cover photo for the new tribe.
                    </Text>
                </View>

                <View style={styles.TribeFields}>
                    <View style={styles.FieldTitle}>
                        <Text>
                            Find Members
                        </Text>
                    </View>
                    <View style={styles.FieldsField}>
                        <View style={styles.IconFieldInput}>
                            <Image style={{width:24,height:24,marginLeft:5,opacity:.1}} source={require('../../assets/icons/zoom-in-512.png')}/>
                            <TextInput autoCapitalize = 'none' underlineColorAndroid='transparent' placeholder="Username" style={[styles.TribeFieldInput,{marginTop:0,flex:1}]} onChangeText={(value) => {
                                this.setState({
                                    searchTerm:value
                                });

                                this.UpdateSearch();
                            }}/>
                        </View>

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
                <View style={styles.TribeFields}>
                    <TouchableHighlight style={styles.CreateButton} onPress={
                        () => {
                            this.RequestCreation()
                        }
                    }>
                        <Text>
                            Create
                        </Text>
                    </TouchableHighlight>
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
        borderRadius:3,
        padding:10,
        marginTop:5,
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
    },
    CreateButton:{
        padding:10,

    },
    IconFieldInput:{
        flexDirection:'row',
        backgroundColor:"#EBEBEB",
        borderRadius:3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ErrorMessage:{
        backgroundColor:"red",
        borderRadius:3,
        padding:10,
        marginTop:5
    },
    SuccessMessage:{
        backgroundColor:"green",
        borderRadius:3,
        padding:10,
        marginTop:5
    },
    TribeBannerImage:{
        marginTop:5
    }
});