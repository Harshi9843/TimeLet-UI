import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, Modal, KeyboardAvoidingView, Alert} from 'react-native';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default class LoginScreen extends Component{
    render(){
        return(
            <SafeAreaProvider>
            <View>
                <View>
                    <MyHeader title = "TimeLet" />
                </View>
                
                <TextInput
                style= {styles.input}
                placeholder = {"Username"}
                keyboardType = {'email-address'}
                />

                <TextInput
                style = {styles.input}
                placeholder = {"Password"}
                secureTextEntry = {true}
                />

                <TouchableOpacity style = {styles.loginButton}
                onPress = {()=>{
                    this.props.navigation.navigate('TimeTable')
                }}>
                    <Text style = {styles.loginText}>
                        Login
                    </Text>
                </TouchableOpacity>
            
            </View>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        borderColor: 'black',
        borderRadius: 30,
        width: 300,
        height: 40,
        marginTop: 100,
        marginLeft: 620,
        fontSize: 20
    },
    
    loginButton:{
        backgroundColor: 'orange',
        borderRadius: 30,
        width: 300,
        height: 50,
        marginTop: 50,
        marginLeft: 520,
        justifyContent: 'center'
    },

    loginText:{
        fontSize: 20,
        alignSelf: 'center'
    }, 
    
})