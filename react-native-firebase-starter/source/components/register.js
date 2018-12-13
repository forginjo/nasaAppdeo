import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from '../RegisterLogin/styles';
import firebase from 'react-native-firebase';
import Firebase from './source/components/firebase;'




class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        };
    }
    // static navigationOptions = {
    //     title: 'Home',
    //   };
    handleRegisterUser = () => {
        const { email,
            password,
            firstName,
            lastName } = this.state;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                const fbRootRefFS = firebase.firestore();
                const userID = user.uid;
                const userRef = fbRootRefFS.collection('users').doc(userID);
                userRef.set(
                    {
                        email,
                        firstName,
                        lastName,
                    }
                );

            }).catch((error)=>{
                console.log('error');
            })
    }
    handleSetFirstNameLocalState = (firstName) => {
        this.setState({
            firstName,
        });
    }
    handleSetLastNameLocalState = (lastName) => {
        this.setState({
            lastName,
        });
    }
    handleSetEmailLocalState = (email) => {
        this.setState({
            email,
        });
    }
    handleSetPasswordlLocalState = (password) => {
        this.setState({
            password,
        });
    }
    render() {
        return (
            <View style={styles.registerScreenMain}>
                <Text style={styles.registerUpText}>Register please...</Text>
                <View style={styles.nameContainer}>
                    <TextInput
                        style={styles.registerTextContainer}
                        onChangeText={this.handleSetFirstNameLocalState}
                        placeholder="First Name" />
                    <TextInput
                        style={styles.registerTextContainer}
                        onChangeText={this.handleSetLastNameLocalState}
                        placeholder="Last Name" />
                </View>
                <View style={styles.registerTextContainerBigView}>
                    <TextInput
                        style={styles.registerTextContainerBig}
                        onChangeText={this.handleSetEmailLocalState}
                        placeholder="E-mail adress" />
                </View>
                <View style={styles.registerTextContainerBigView}>
                    <TextInput
                        style={styles.registerTextContainerBig}
                    
                        secureTextEntry
                        onChangeText={this.handleSetPasswordLocalState}
                        placeholder="Password" />
                </View>
                <View style={styles.registerConfirm}>
                    <TouchableOpacity style={styles.buttonContainer}
                        onPress={this.handleRegisterUser}
                    >
                        <Text style={styles.registerButtonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Register;