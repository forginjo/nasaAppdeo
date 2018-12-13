import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import brandLogo from '../../assets/brandLogo.png';

class RegisterLogin extends Component {
    // static navigationOptions = {
    //     title: 'Home',
    //   };
    handleShowRegisterController = () => {

    }
    render() {
        return (
            <View style = {styles.mainContainerView}>
            <StatusBar
            barStyle='light-content'
            />
           
                <Text style = {styles.titleText}>Nasa App</Text>
               
            
                <Text style = {styles.subTitleText}>Idemooo...</Text>
               
                
                    <Image
                    source={brandLogo}
                     style= {styles.Image}/>
               

                <View style = {styles.buttonView}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}
                style = {styles.signInButton}>
                <Text style={styles.signInText}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Register')}
                 style = {styles.registerButton}>
                <Text style = {styles.registerText}>Register</Text>
                </TouchableOpacity>
                

                </View>
            </View>
        );
    }
}

export default RegisterLogin;