import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image} from 'react-native';

export default class SingleTribe extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.TribeTitle}>
                    <Text>{this.props.tribe.title}</Text>
                </View>
                <View style={{}}>
                    <Text style={styles.DescTitle}>Description</Text>
                </View>
                <View style={styles.TribeDescription}>
                    <Text style={{fontSize:8}}>{this.props.tribe.description}</Text>
                </View>
                <View style={styles.TribeButtons}>
                    <TouchableHighlight style={styles.TribeButton} onPress={() => {console.log('working')}}>
                        <View>
                            <Text style={styles.CountText}>
                                {this.props.tribe.members.length}
                            </Text>
                            <Image style={styles.TribeButtonImage} source={require('../../assets/icons/tribes-icon.png')}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.TribeButton,styles.ButtonRight]}>
                        <Image style={styles.TribeButtonImage} source={require('../../assets/icons/arrow-right-icon.png')}/>
                    </TouchableHighlight>
                </View>
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
        marginTop:7
    },
    TribeTitle:{
        padding:7,
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB"
    },
    TribeButtons:{
        flexDirection:'row',
        borderTopWidth:.5,
        borderTopColor:"#EBEBEB"
    },
    TribeButton:{
        flex:1,
        padding:7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TribeButtonImage:{
        width:24,
        height:24,
        opacity:.1
    },
    TribeDescription:{
        padding:7,
        minHeight:100,
        borderTopWidth:.5,
        borderTopColor:"#EBEBEB"
    },
    ButtonRight:{
        borderLeftWidth:.5,
        borderLeftColor:"#EBEBEB"
    },
    DescTitle:{
        fontSize:9,
        fontWeight:"bold",
        backgroundColor:"#F5F5F5",
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
        padding:5
    },
    CountText:{
        bottom:3,
        left:-16,
        position:"absolute"
    }
});
