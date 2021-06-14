import React, {memo} from "react";
import {default as MaterialIcon} from "react-native-vector-icons/MaterialIcons";
import {scaleH, scaleW} from "../../utils/scaling";
import {TouchableOpacity} from "react-native";

const BackButton = memo(({color = '#000', onPress}) => {
    return (
        <TouchableOpacity onPress={() => onPress} style={{marginLeft: scaleW(20), marginTop: scaleH(8)}}>
            <MaterialIcon name='arrow-back-ios' color={color} size={scaleW(20)}/>
        </TouchableOpacity>
    );
});

export default BackButton;