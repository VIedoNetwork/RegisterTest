const { RefreshControlComponent } = require("react-native");

import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Logo = () =>{
    return (
        <View>
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'}} style={{height:150, width:150}}/>
        </View>
    );
};


export default Logo;