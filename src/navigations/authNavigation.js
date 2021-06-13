import {createStackNavigator} from "react-navigation-stack";
import WelcomeScreen from "../screens/auth/WelcomeScreeen";
import SplashScreen from "../screens/auth/SplashScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import RegistrationScreen from "../screens/auth/RegistrationScreen";
import PasswordSetupScreen from "../screens/auth/PasswordSetupScreen";
import EmailVerificationScreen from "../screens/auth/EmailVerificationScreen";
import GetStartedScreen from "../screens/auth/GetStartedScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";

export const AuthNavigation = createStackNavigator(
    {
        Splash: {screen: SplashScreen},
        Welcome: {screen: WelcomeScreen},
        Signup: {screen: SignupScreen},
        Register: {screen: RegistrationScreen},
        PasswordSetup: {screen: PasswordSetupScreen},
        EmailVerify: {screen: EmailVerificationScreen},
        GetStarted: {screen: GetStartedScreen},
        Login: {screen: LoginScreen},
        ForgotPassword: {screen: ForgotPasswordScreen}
    },
    {
        initialRouteName: 'Splash',
        defaultNavigationOptions: {
            headerShown: false,
            headerTitle: null
        }
    }
);