import React from "react";
import {View} from "react-native";
import {connect} from 'react-redux';
import {AppStyles} from "../../../constants/appStyles";
import {styles} from './styles';

const CommunitiesScreen = props => {
    return (
        <View style={AppStyles.container}>

        </View>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommunitiesScreen);