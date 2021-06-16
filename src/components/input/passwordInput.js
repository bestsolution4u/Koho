import React, {memo, useState} from "react";
import {scaleW} from "../../utils/scaling";
import {Image, TextInput, TouchableOpacity, View} from "react-native";

const PasswordInput = memo(({onChangeText, hint = ''}) => {
    const [visible, setVisible] = useState(false);

    return (
        <View style={{width: scaleW(305), height: scaleW(44), backgroundColor: '#F4F5F7', borderRadius: scaleW(22), paddingLeft: scaleW(16), paddingVertical: scaleW(12), alignItems: 'center', flexDirection: 'row'}}>
            <TextInput
                style={{flex: 1}}
                secureTextEntry={visible}
                placeholder={hint}
                placeholderTextColor="#7A869A"
                onChangeText={(value) => {
                    onChangeText && onChangeText(value);
            }} />
            <TouchableOpacity onPress={() => {
                setVisible(!visible);
            }} style={{paddingHorizontal: scaleW(16)}}>
                <Image source={require('../../assets/icons/visible.png')} style={{tintColor: !visible ? '#8C52FF' : '#7A869A'}} resizeMode={'contain'} width={scaleW(18)} height={scaleW(18)}/>
            </TouchableOpacity>
        </View>
    );
});

export default PasswordInput;