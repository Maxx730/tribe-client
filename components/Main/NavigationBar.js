import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';

export default class NavigationBar extends React.Component{

    RenderEdit(){
        return(
            <TouchableHighlight style={[styles.ButtonRight,styles.NavButton]} onPress={() => {}}>
                <Text>
                    Edit
                </Text>
            </TouchableHighlight>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight style={[styles.ButtonLeft,styles.NavButton]} onPress={() => {this.props.navigator.navigate('Streams')}}>
                    <Text>
                        Back
                    </Text>
                </TouchableHighlight>
                { this.props.isUser && RenderEdit() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFF",
        borderRadius:3,
        flexDirection:'row'
    },
    NavButton:{
        padding:10,
        flex:1
    },
    ButtonRight:{

    },
    ButtonLeft:{

    }
})