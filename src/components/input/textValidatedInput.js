import React, {memo} from "react";
import {scaleW} from "../../utils/scaling";
import {Image, TextInput, View} from "react-native";

const TextValidatedInput = memo(({onValidate, onChangeText, isValid = false, hint = '', style}) => {
    return (
        <View style={[style, {width: scaleW(305), height: scaleW(44), backgroundColor: '#F4F5F7', borderRadius: scaleW(22), paddingHorizontal: scaleW(16), paddingVertical: scaleW(12), alignItems: 'center', flexDirection: 'row'}]}>
            <TextInput
                style={{flex: 1, marginRight: scaleW(16)}}
                placeholder={hint}
                placeholderTextColor="#7A869A"
                onChangeText={(value) => {
                    onValidate && onValidate(value);
                    onChangeText && onChangeText(value);
                }}
            />
            {
                isValid && <Image source={require('../../assets/icons/check.png')} width={scaleW(18)} height={scaleW(18)}/>
            }
        </View>
    );
});

export default TextValidatedInput;