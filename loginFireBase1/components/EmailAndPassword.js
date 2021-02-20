const { RefreshControlComponent } = require("react-native");

import React, { Component } from 'react';
import firebase from 'firebase';
import {View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, Button} from 'react-native';

class EmailAndPassWord extends Component{
    state={
    email:'',
    password:'',
    error:'',
    loading:false
    }

    onButtonPressRegister = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onLoginSuccess)
        .catch(err => {
            this.setState({
                error: err.message
            })
        })
    }

    onButtonPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onLoginSuccess)
        .catch(err => {
            this.setState({
                error: err.message
            })
        })
    }

    onLoginSuccess = () =>{
        this.setState({
            error:'',
            loading:false
        })
    }

    render() {
    return (

        //Text input email and password and button
        <View style={styles.container}>

            <TextInput
             placeholder="User name " 
             style={styles.input} 
             />

            <TextInput
             placeholder="Email " 
             style={styles.input} 
             value={this.state.email}
             onChangeText={email=>this.setState({email})}
             />

            <TextInput placeholder="Password " 
            style={styles.input} 
            secureTextEntry
            value={this.state.password}
            onChangeText={password=>this.setState({password})}/>

            <TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress}>
                <Text style={styles.butonText}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPressRegister}>
                <Text style={styles.butonText}> Sign Up </Text>
            </TouchableOpacity>




            <Text style={styles.errorText}> {this.state.error} </Text>
        </View>
        );
    }
};









const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20

    },
    input:{
        height:40,
        backgroundColor: '#FAEBD7',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15
    },
    errorText:{
        fontSize:15,
        color:'red',
        alignSelf:'center',
        marginTop:10
    },
    butonText:{
        textAlign: 'center',
        color: '#F0FFFF',
        fontWeight: 'bold',
        fontSize:20
    },
    buttonContainer:{
        backgroundColor: '#483D8B',
        padding: 15,
        borderRadius:8
    },
    buttonContainerRegister:{
        backgroundColor: '#9932CC',
        padding: 15,
        borderRadius:8
    },
    butonTextRegister:{
        textAlign: 'center',
        color: '#F0FFFF',
        fontWeight: 'bold',
        fontSize:10
    },
});


export default EmailAndPassWord;