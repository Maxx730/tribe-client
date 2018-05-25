import React from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';

export default class AddTribe extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }
    
    
    render(){
        return(
            <View>
                <View style={[styles.container,{marginTop:30,alignSelf: 'flex-start',}]}>
                    <TouchableHighlight style={styles.ButtonLeft} onPress={this.props.back.bind(this,'streams')}>
                        <Image style={styles.ButtonImage} source={require('../../assets/icons/close-icon.png')}/>
                    </TouchableHighlight>
                </View>
                <View style={[styles.container]}>
                    <View style={styles.MemberTitle}>
                        <Text>Create New Tribe</Text>
                    </View>
                    <View style={{padding:10}}>
                        <TextInput underlineColorAndroid='transparent' style={styles.InputField} placeholder="Tribe Name">
                            
                        </TextInput>
                    </View>
                    <View>
                        <Text style={styles.DescriptionText}>Description</Text>
                    </View>
                    <View style={{padding:10}}>
                        <TextInput underlineColorAndroid='transparent' multiline = {true} style={[styles.InputField,styles.DescriptionField]} placeholder="">

                        </TextInput>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.MemberTitle}>
                        <Text>Add Members</Text>
                    </View>
                    <View style={{padding:10}}>
                        <TextInput underlineColorAndroid='transparent' style={styles.InputField} placeholder="Find Users">
                            
                        </TextInput>
                    </View>
                    <View style={styles.BottomAddUser}>
                        <TouchableHighlight style={styles.ButtonLeft} onPress={() => {console.log("working")}}>
                            <Image style={styles.ButtonImage} source={require('../../assets/icons/square-add.png')}/>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        backgroundColor:"#FCFCFC",
        borderRadius:2,
        borderWidth:.5,
        borderColor:"#EBEBEB"
    },
    InputField:{
        backgroundColor:"#f3f3f3",
        padding:10,
        borderRadius:2,
        borderColor:"#dcdcdc",
        borderWidth:.5,
        borderStyle:"solid"
      },
      DescriptionField:{
          height:100,
          paddingTop:13
      },
      ButtonImage:{
        width:32,
        height:32,
        opacity:.1
    },
    MemberTitle:{
        padding:10,
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
    },
    DescriptionText:{
        fontSize:12,
        marginLeft:10,
    },
    BottomAddUser:{
        borderTopWidth:.5,
        borderTopColor:"#EBEBEB",
        justifyContent: 'center',
        alignItems: 'center',
    }
});