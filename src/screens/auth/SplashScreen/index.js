import React from "react";
import {ImageBackground, StatusBar, Text, View} from "react-native";
import {connect} from 'react-redux';
import {AppStyles} from "../../../constants/appStyles";
import {styles} from './styles';

const SplashScreen = props => {

    setTimeout(() => {
        props.navigation.navigate('Welcome');
    }, 3000);

    return (
        <View style={[AppStyles.container, AppStyles.center]}>
            <StatusBar
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <ImageBackground source={require('../../../assets/images/bg_splash.jpg')} style={AppStyles.backgroundImage} />
            <ImageBackground source={require('../../../assets/images/bg_logo.png')} style={[styles.logoContainer, AppStyles.center]}>
                <ImageBackground source={require('../../../assets/images/logo.png')} style={styles.logo} />
            </ImageBackground>
        </View>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);