const { RefreshControlComponent } = require("react-native");

import React, { Component } from 'react';
import {View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
const LoginForm = () =>{
    return (
        <View style={styles.container}>
            <View style={styles.articleContainer}>

                <Text style={styles.heading}>
                    Welcome Bitch
                </Text>

                <Text style={styles.content}>
                    You are login from firebase
                </Text>

                <TouchableOpacity style={{padding:20}} onPress={()=> firebase.auth().signOut()}>
                    <Text style={{color:'#6495ED'}}>
                        Logout
                    </Text>
                </TouchableOpacity>


            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    articleContainer:{
        padding:10,
        borderBottomColor: 'rgba(255, 255, 255, .7)',
        borderBottomWidth:2
    },
    heading: {
        fontSize:22,
        color:'black',
        marginBottom:10
    },
    content:{
        marginTop:10,
        fontSize: 19,
    }
});

export default LoginForm;