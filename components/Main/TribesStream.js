import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';

import SingleTribe from './SingleTribe'

export default class TribesStream extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user:{},
            tribes:[]
        }
    }

    componentDidMount(){
        fetch("http://squidswap.com:4000/user/tribes/"+this.props.user._id).then(result => {
            return result.json();
        }).then(data => {
            this.setState({
                user:this.props.user,
                tribes:data
            })
        });
    }
    

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    {this.state.tribes.map(tribe => {
                        return <SingleTribe key={tribe._id} tribe={tribe}/>
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{

    }
});