import {StyleSheet} from 'react-native';
import {scaleW} from "../../../utils/scaling";

export const styles = StyleSheet.create({
    bgArt: {
        width: '100%',
        height: scaleW(406)
    },
    logo: {
        position: 'absolute',
        top: scaleW(253),
        left: scaleW(91),
        width: scaleW(202),
        height: scaleW(202)
    },
    description: {
        position: 'absolute',
        width: scaleW(271),
        top: scaleW(419),
        left: scaleW(52),
        fontSize: 13,
        color: '#7C7D7E',
        textAlign: 'center'
    }
});
