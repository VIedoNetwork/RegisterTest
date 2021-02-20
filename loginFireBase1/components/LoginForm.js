const { RefreshControlComponent } = require("react-native");

import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from './Logo';
import EmailAndPassWord from './EmailAndPassword';
import SigninForm from './SignInForm'
const LoginForm = () =>{
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>
            <View style={styles.emailAndPassword}>
                <EmailAndPassWord/>  
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',

    },

    logoContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    emailAndPassword: {
        flex:2,
    }
});

export default LoginForm;