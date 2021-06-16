import {createStackNavigator} from "react-navigation-stack";
import MainScreen from "../screens/main/MainScreen";
import AppMenu from "../screens/main/AppMenu";
import {connect} from "react-redux";
import React, {useRef} from "react";
import SwipeAbleDrawer from "../components/drawer/swipeAbleDrawer";
import NavigationService from '../navigations/navigationService';

const MainStack = createStackNavigator(
    {
        MainScreen: {screen: MainScreen},
    },
    {
        initialRouteName: 'MainScreen',
        defaultNavigationOptions: {
            headerShown: false,
            headerTitle: null
        }
    }
);

const MainNavigation = props => {

    const defaultScalingDrawerConfig = {
        scalingFactor: 0.6,
        minimizeFactor: 0.6,
        swipeOffset: 20
    };

    const drawerMenu = useRef();
    return (
        <SwipeAbleDrawer
            ref={drawerMenu}
            content={<AppMenu drawer={drawerMenu} />}
            {...defaultScalingDrawerConfig}
            onClose={() => console.log('close')}
            onOpen={() => console.log('open')}>
            <MainStack ref={navigatorRef => {
                NavigationService.setDrawerLevelNavigator(navigatorRef);
            }} />
        </SwipeAbleDrawer>
    );
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation);



