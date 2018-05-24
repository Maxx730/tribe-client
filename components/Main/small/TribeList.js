import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';

export default class TribeList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user:{},
            tribes:[],
            hasLoaded:false
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
            })
        });
    }
    
    render(){
        console.log(this.state);
        if(this.state.hasLoaded){
            return(
                <View style={styles.container}>
                    <View style={styles.ListTitle}>
                        <Text>
                        Tribes
                        </Text>
                    </View>
                    <ScrollView>
                        {this.state.tribes.map(tribe => {
                            return (
                                <View style={styles.SingleTribe}>
                                    <View style={styles.TribeTitle}>
                                        <Text>{tribe.title}</Text>
                                        <Text>[Created By]</Text>
                                    </View>
                                    <Text style={styles.TribeDescription}>{tribe.description}</Text>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
            );
        }else{
            return(
                <View style={styles.container}>
                    <Text style={styles.ListTitle}>
                        Loading...
                    </Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container:{
      
    },
    ListTitle:{
        padding:10,
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
    },
    SingleTribe:{
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
        paddingBottom:10
    },
    TribeTitle:{
        padding:10,
    },
    TribeDescription:{
        paddingLeft:10
    }
});

