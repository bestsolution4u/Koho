import {createStackNavigator} from "react-navigation-stack";
import MainScreen from "../screens/main/MainScreen";
import {createDrawerNavigator} from "react-navigation-drawer";
import AppMenu from "../screens/main/AppMenu";
import {createAppContainer} from "react-navigation";

const MainStackNavigation = createStackNavigator(
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

const AppDrawerNavigation = createDrawerNavigator(
    {
        Main: {screen: MainStackNavigation}
    },
    {
        initialRouteName: 'Main',
        drawerWidth: 275,
        drawerPosition: 'left',
        drawerType: 'push-screen',
        contentComponent: AppMenu
    }
);

const AppMainContainer = createAppContainer(AppDrawerNavigation);

