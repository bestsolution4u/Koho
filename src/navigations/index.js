import React, {useEffect, memo} from 'react';
import {BackHandler, Platform} from 'react-native';
import {connect} from 'react-redux';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {AuthNavigation} from "./authNavigation";
import MainNavigation from "./mainNavigation";
import FlashMessage from "react-native-flash-message";
import NavigationService from "./navigationService";

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        Auth: {screen: AuthNavigation},
        Main: {screen: MainNavigation}
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
            <AppContainer ref={navRef => NavigationService.setAppLevelNavigator(navRef)} />
            <FlashMessage position="top" />
        </React.Fragment>
    );
});

const mapStateToProps = state => ({nav: state.nav});

export default connect(mapStateToProps)(AppNavigation);