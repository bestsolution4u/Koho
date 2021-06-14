import React from "react";
import {ImageBackground, StatusBar, Text, View} from "react-native";
import {connect} from 'react-redux';
import {AppStyles} from "../../../constants/appStyles";
import {styles} from './styles';
import ColorButton from "../../../components/buttons/colorButton";
import {scaleH, scaleW} from "../../../utils/scaling";
import BorderButton from "../../../components/buttons/borderButton";

const WelcomeScreen = props => {
    return (
        <View style={AppStyles.container}>
            <StatusBar
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <ImageBackground source={require('../../../assets/images/bg_welcome.png')} style={styles.bgArt} />
            <ImageBackground source={require('../../../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.description}>Discover the best foods from over 1,000 recipes, ko-members. ko-mmunities, Events, and Guides</Text>
            <ColorButton
                color='#8C52FF'
                width={scaleW(307)}
                height={scaleW(56)}
                label='Login'
                labelSize={16}
                onPress={() => {
                    props.navigation.navigate('Login');
                }}
                style={{position: 'absolute', top: scaleH(637), left: scaleW(34)}}/>
            <BorderButton
                color='#8C52FF'
                width={scaleW(307)}
                height={scaleW(56)}
                label='Create an Account'
                labelSize={16}
                onPress={() => {
                    props.navigation.navigate('Signup');
                }}
                style={{position: 'absolute', top: scaleH(713), left: scaleW(34)}}/>
        </View>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);