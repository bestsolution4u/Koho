import React from "react";
import {TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {styles} from "./styles";

const AppMenu = props => {
    return (
        <TouchableOpacity activeOpacity={1} style={styles.container}>
            <TouchableOpacity activeOpacity={1} style={styles.drawer} disabled={false}>
                <ScrollView>

                </ScrollView>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppMenu);