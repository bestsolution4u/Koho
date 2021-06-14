import {StyleSheet} from 'react-native';

export const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#ffffff',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
});
