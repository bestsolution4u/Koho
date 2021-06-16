import React from "react";
import {ImageBackground, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';
import {AppStyles} from "../../../constants/appStyles";
import {styles} from './styles';
import Spacer from "../../../components/spacer";
import {scaleH, scaleW} from "../../../utils/scaling";
import TextValidatedInput from "../../../components/input/textValidatedInput";
import PasswordInput from "../../../components/input/passwordInput";
import ColorButton from "../../../components/buttons/colorButton";

const GetStartedScreen = props => {
    return (
        <View style={AppStyles.container}>
            <StatusBar
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <ImageBackground source={require('../../../assets/images/bg_auth.png')} style={AppStyles.backgroundImage} />
            <Spacer />
            <View style={AppStyles.center}>
                <ImageBackground source={require('../../../assets/images/logo.png')} style={styles.logo} />
                <Text style={{color: '#fff', fontSize: 24}}>You are ready to go!</Text>
                <Text style={{color: '#fff', fontSize: 14, marginTop: scaleH(40)}}>Thanks for taking your time to create</Text>
                <Text style={{color: '#fff', fontSize: 14, marginVertical: scaleH(6)}}>account with us. Now this is the fun part,</Text>
                <Text style={{color: '#fff', fontSize: 14, marginBottom: scaleH(130)}}>let’s explore the app.</Text>
                <ColorButton
                    width={scaleW(305)}
                    height={scaleW(44)}
                    color='#fff'
                    textColor='#8C52FF'
                    label='Get Started'
                    borderRadius={22}
                    onPress={() => {
                        props.navigation.navigate('Login');
                    }}
                />
            </View>
            <Spacer />
        </View>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GetStartedScreen);