import {createStackNavigator} from "react-navigation-stack";
import MainScreen from "../screens/main/MainScreen";
import {createDrawerNavigator} from "react-navigation-drawer";
import AppMenu from "../screens/main/AppMenu";
import {createAppContainer} from "react-navigation";
import HomeScreen from "../screens/main/HomeScreen";
import {View} from "react-native";
import {connect} from "react-redux";
import React, {useRef} from "react";
import SwipeAbleDrawer from "../components/drawer/swipeAbleDrawer";

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
            <MainStack />
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



