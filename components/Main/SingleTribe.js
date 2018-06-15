import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image} from 'react-native';

export default class SingleTribe extends React.Component{
    render(){
            return(
                <View style={this.props.isFirst == true && {marginTop:-5}}>
                    <View style={styles.RoundTop}>

                    </View>
                    <View style={styles.container}>
                        <View style={styles.TribeTitle}>
                            <View style={{backgroundColor:'rgba(0, 0, 0, 0.3)',position:'absolute',zIndex:999,left:0,top:0,width:400,padding:5}}>
                                <Text style={{color:"#FFF",fontSize:18}}>{this.props.tribe.title}</Text>
                            </View>
                            <Image resizeMode={'cover'} style={styles.BannerImage} source={require('../../assets/defaults/beachfire.jpg')}/>
                        </View>
                        <View style={styles.TribeDescription}>
                            <Text style={{fontSize:14}}>{this.props.tribe.description}</Text>
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
                            <TouchableHighlight style={[styles.TribeButton,styles.ButtonRight]} onPress={() => { this.props.navigator('Tribe',{tribe:this.props.tribe}) }}>
                                <Image style={styles.TribeButtonImage} source={require('../../assets/icons/arrow-right-icon.png')}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FCFCFC",
        borderBottomWidth:.5,
        borderColor:"#EBEBEB",
        borderRadius:3
    },
    TribeTitle:{
        height:100,
        overflow:'hidden',
        position:'relative'
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
        padding:7
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
    },
    BannerImage:{
        width:400,
        height:100,
        position:'absolute',
        top:0,
        left:0,
        borderTopRightRadius:3,
        borderTopLeftRadius:3
    },
    RoundTop:{
        borderTopRightRadius:3,
        borderTopLeftRadius:3,
        backgroundColor:"#FFF",
        height:10,
        marginTop:5,
    }
});
