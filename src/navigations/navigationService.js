import { NavigationActions } from 'react-navigation';

let _appLevelNavigator, _drawerLevelNavigator, _mainTabLevelNavigator;

const setAppLevelNavigator = ref => {
    _appLevelNavigator = ref;
}

const setDrawerLevelNavigator = ref => {
    _drawerLevelNavigator = ref;
}

const setMainTabLevelNavigator = ref => {
    _mainTabLevelNavigator = ref;
}

const navigateAppLevel = (routeName, params) => {
    _appLevelNavigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

const navigateDrawerLevel = (routeName, params) => {
    _appLevelNavigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

const navigateMainTabLevel = (routeName, params) => {
    _appLevelNavigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}


export default {
    setAppLevelNavigator,
    setDrawerLevelNavigator,
    setMainTabLevelNavigator,
    navigateAppLevel,
    navigateDrawerLevel,
    navigateMainTabLevel,
};