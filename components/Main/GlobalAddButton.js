import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';

export default class GlobalAddButton extends React.Component{
    render(){
        switch(this.props.type){
            case "tribes":
                return(
                    <View style={styles.container}>
                        <TouchableHighlight style={styles.HighlightButton} onPress={this.props.toggle.bind(this,'addtribe')}>
                            <Image style={{width:24,height:24,opacity:.1}} source={require('../../assets/icons/square-add.png')}/>
                        </TouchableHighlight>
                    </View>
                );
            break;
            case "events":
                return(
                    <View style={styles.container}>
                        <TouchableHighlight style={styles.HighlightButton} onPress={this.props.toggle.bind(this,'addevent')}>
                            <Image style={{width:24,height:24,opacity:.1}} source={require('../../assets/icons/square-add.png')}/>
                        </TouchableHighlight>
                    </View>
                );
            break;
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
    HighlightButton:{
        padding:7,
        justifyContent: 'center',
        alignItems: 'center',
    }
})