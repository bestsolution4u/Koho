import React from "react";
import {SafeAreaView, StatusBar, Text, View} from "react-native";
import {connect} from 'react-redux';
import {AppStyles} from "../../../constants/appStyles";
import {styles} from './styles';
import BackButton from "../../../components/buttons/backButton";

const ForgotPasswordScreen = props => {
    return (
        <View style={AppStyles.container}>
            <StatusBar
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <SafeAreaView>
                <BackButton onPress={() => {}} />
                <Text>asdfasdf</Text>
            </SafeAreaView>
        </View>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);