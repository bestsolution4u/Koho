import React, {useState} from "react";
import {ImageBackground, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';
import {AppStyles} from "../../../constants/appStyles";
import {styles} from './styles';
import Spacer from "../../../components/spacer";
import {scaleH, scaleW} from "../../../utils/scaling";
import ColorButton from "../../../components/buttons/colorButton";
import TextValidatedInput from "../../../components/input/textValidatedInput";
import PasswordInput from "../../../components/input/passwordInput";

const SignupScreen = props => {
    const [isValidName, setNameValid] = useState(false);
    const [isValidEmail, setEmailValid] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

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
                <Text style={{color: '#fff', fontSize: 14, marginVertical: scaleH(15)}}>Create an account to continue!</Text>
                <TextValidatedInput
                    onValidate={(value) => setNameValid(value !== '')}
                    onChangeText={(value) => setName(value)}
                    isValid={isValidName}
                    hint='Name'
                    style={{marginBottom: scaleH(10)}}
                />
                <TextValidatedInput
                    onValidate={(value) => setEmailValid(value !== '')}
                    onChangeText={(value) => setEmail(value)}
                    isValid={isValidEmail}
                    hint='Email'
                    style={{marginBottom: scaleH(10)}}
                />
                <PasswordInput
                    hint='Password'
                    onChangeText={() => {}} />
                <View style={{height: scaleH(10)}}/>
                <ColorButton
                    width={scaleW(305)}
                    height={scaleW(44)}
                    color='#8C52FF'
                    label='Sign Up'
                    borderRadius={22}
                    onPress={() => {
                        props.navigation.navigate('GetStarted');
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
                        onPress={() => {}}
                    />
                    <ColorButton
                        width={scaleW(95)}
                        height={scaleW(44)}
                        color='#00C2CB'
                        label='Twitter'
                        borderRadius={22}
                        onPress={() => {}}
                        style={{marginHorizontal: scaleW(8)}}
                    />
                    <ColorButton
                        width={scaleW(95)}
                        height={scaleW(44)}
                        color='#FF66C4'
                        label='Apple Id'
                        borderRadius={22}
                        onPress={() => {}}
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