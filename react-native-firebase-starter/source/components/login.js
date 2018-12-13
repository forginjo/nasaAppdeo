import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import styles from '../RegisterLogin/styles';


class Login extends Component {
    // static navigationOptions = {
    //     title: 'Home',
    //   };
    handleShowRegisterController = () => {

    }
    render() {
        return (
            <View style={styles.loginScreenMain}>
            <View>
                <Text>LOGIN SCREEN</Text>
                </View>
            </View>
        )
    }
}

export default Login;