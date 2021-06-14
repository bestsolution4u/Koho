import React, {memo} from "react";
import {scaleW} from "../../utils/scaling";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const BorderButton = memo(({width = scaleW(375), height = scaleW(34), borderRadius = scaleW(28), color = '#8C52FF', label = '', labelSize = 14, onPress, style}) => {
    return (
        <TouchableOpacity
            style={[
                style,
                {
                    width: width,
                    height: height,
                    borderRadius: borderRadius,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignContent: 'center',
                    borderColor: color,
                    borderWidth: 1
                }]}
            onPress={onPress}>
            <Text style={{color: color, fontSize: labelSize, textAlign: 'center'}}>{label}</Text>
        </TouchableOpacity>
    );
});

export default BorderButton;