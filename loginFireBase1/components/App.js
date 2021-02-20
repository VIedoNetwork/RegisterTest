const { RefreshControlComponent } = require("react-native");

import React, { Component, useDebugValue } from 'react';
import firebase from 'firebase';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import LoginForm from  './LoginForm';
import Articles from './Article';
import BG from '../images/bg.png';
import Loading from './Loading';


class App extends Component{

    state={
        loggedIn: null
    }

    componentDidMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyDdTk2mfHY37DyK35fvH6lbH2q87lO1R7Q",
            authDomain: "lgin-5579f.firebaseapp.com",
            databaseURL: "https://lgin-5579f.firebaseio.com",
            projectId: "lgin-5579f",
            storageBucket: "lgin-5579f.appspot.com",
            messagingSenderId: "203216462502",
            appId: "1:203216462502:web:6e87662d78cba221d04a67"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);

          firebase.auth().onAuthStateChanged(user => {
              if(user){
                this.setState({
                   loggedIn:true 
                })
              }else{
                this.setState({
                    loggedIn:false 
                 })
                    
              }
          })
    }



    renderContent = () =>{
        switch(this.state.loggedIn){

            
            case false:
                return  <ImageBackground style={styles.container} source={BG}>
                            <LoginForm/>
                        </ImageBackground>
            case true:
                return <Articles/>

                default:
                    return <Loading/>
        }
    }
    render(){
        return(
        <View style={styles.container}>
        {this.renderContent()}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        height:'100%',
        width:'100%'
    },
});

export default App;