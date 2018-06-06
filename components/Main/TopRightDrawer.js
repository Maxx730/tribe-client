import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';

export default class TopRightDrawer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            dropDownShow:false
        }
    }

    ToggleDropDown(){
        this.setState({
            dropDownShow:!this.state.dropDownShow
        })
    }

    RenderDropDown(){
        if(this.state.dropDownShow){
            return(
                <View style={styles.TopRightDropdown}>
                    <ScrollView>
                    <TouchableHighlight style={styles.DropDownTouchItem} onPress={() => {console.log("working")}}>
                            <Text>Settings</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.DropDownTouchItem} onPress={this.props.logout.bind(this)}>
                            <Text>Log Out</Text>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
            )
        }
    }

    render(){
        return(
            <View>
                <TouchableHighlight style={styles.container} onPress={this.ToggleDropDown.bind(this)}>
                    <Image style={{width:16,height:16,opacity:.1}} source={require('../../assets/icons/settings-512.png')}/>
                </TouchableHighlight>
                {
                    this.RenderDropDown()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FCFCFC",
        borderRadius:2,
        borderWidth:.5,
        borderColor:"#EBEBEB",
        padding:7,
        marginBottom:7,
        flex:1,
        position:'relative'
    },
    TopRightDropdown:{
        position:'absolute',
        top:10,
        right:10,
        backgroundColor:"#FCFCFC",
        borderRadius:2,
        borderWidth:.5,
        borderColor:"#EBEBEB",
        width:200,
        zIndex:9999
    },
    DropDownTouchItem:{
        padding:7,
        borderBottomWidth:.5,
        borderBottomColor:"#EBEBEB",
    }
})