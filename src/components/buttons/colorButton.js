import React, {memo} from "react";
import {scaleW} from "../../utils/scaling";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const ColorButton = memo(({width = scaleW(375), height = scaleW(34), borderRadius = scaleW(28), color = '#8C52FF', textColor = '#fff', label = '', labelSize = 14, onPress, style}) => {
    return (
        <TouchableOpacity
            style={[
                style,
                {
                    width: width, 
                    height: height,
                    borderRadius: borderRadius,
                    backgroundColor: color,
                    justifyContent: 'center',
                    alignContent: 'center'
                }]}
            onPress={onPress}>
            <Text style={{color: textColor, fontSize: labelSize, textAlign: 'center'}}>{label}</Text>
        </TouchableOpacity>
    );
});

export default ColorButton;