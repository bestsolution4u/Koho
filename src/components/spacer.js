import React, {memo} from "react";
import {View} from "react-native";

const Spacer = memo(() => {
    return (
        <View style={{flex: 1}} />
    );
});

export default Spacer;