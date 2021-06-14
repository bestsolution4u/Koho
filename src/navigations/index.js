import React, {useEffect, memo} from 'react';
import {BackHandler, Platform} from 'react-native';
import {connect} from 'react-redux';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {AuthNavigation} from "./authNavigation";
import {AppMainContainer} from "./mainNavigation";
import FlashMessage from "react-native-flash-message";

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        Auth: {screen: AuthNavigation},
        Main: {screen: AppMainContainer}
    },
    {
        initialRouteName: 'Auth',
        defaultNavigationOptions: {
            cardStyle: {
                backgroundColor: '#ffffff'
            }
        }
    }
));

const AppNavigation = memo(({dispatch, nav}) => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', undefined);
        }
    }, []);

    return (
        <React.Fragment>
            <AppContainer />
            <FlashMessage position="top" />
        </React.Fragment>
    );
});

const mapStateToProps = state => ({nav: state.nav});

export default connect(mapStateToProps)(AppNavigation);