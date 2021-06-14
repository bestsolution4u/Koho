import React from "react";
import {ImageBackground, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';
import {AppStyles} from "../../../constants/appStyles";
import {styles} from './styles';
import Spacer from "../../../components/spacer";
import {scaleH, scaleW} from "../../../utils/scaling";
import ColorButton from "../../../components/buttons/colorButton";

const SignupScreen = props => {
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
                <Text style={{color: '#fff', fontSize: 24}}>Hello</Text>
                <Text style={{color: '#fff', fontSize: 14}}>Create an account to continue!</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={{color: '#8C52FF', fontSize: 13, marginVertical: scaleH(20)}}>Forgot Password</Text>
                </TouchableOpacity>
                <ColorButton
                    width={scaleW(305)}
                    height={scaleW(44)}
                    color='#8C52FF'
                    label='Sign Up'
                    borderRadius={22}
                    onPress={() => {

                    }}
                />
                <Text style={{color: '#fff', fontSize: 14, marginVertical: scaleH(22)}}>Or</Text>
                <View style={{flexDirection: 'row'}}>
                    <ColorButton
                        width={scaleW(95)}
                        height={scaleW(44)}
                        color='#8C52FF'
                        label='Facebook'
                        borderRadius={22}
                        onPress={() => {

                        }}
                    />
                    <ColorButton
                        width={scaleW(95)}
                        height={scaleW(44)}
                        color='#00C2CB'
                        label='Twitter'
                        borderRadius={22}
                        onPress={() => {

                        }}
                        style={{marginHorizontal: scaleW(8)}}
                    />
                    <ColorButton
                        width={scaleW(95)}
                        height={scaleW(44)}
                        color='#FF66C4'
                        label='Apple Id'
                        borderRadius={22}
                        onPress={() => {

                        }}
                    />
                </View>
                <View style={{flexDirection: 'row', marginVertical: scaleH(35)}}>
                    <Text style={{color: '#fff', fontSize: 14}}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => {
                        props.navigation.replace('Login');
                    }} style={{paddingHorizontal: scaleW(8)}}>
                        <Text style={{color: '#8C52FF', fontSize: 14, textDecorationLine: 'underline'}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);