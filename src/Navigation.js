import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const styles = {
    container: {
        height: 60,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {

    },
    buttonTitle: {
        color: 'white',
        fontSize: 20,
    },
    hide: {
        display: 'none',
    }
}

const Navigation = ({ onBackPress, onForwardPress, canGoForward, canGoBack }) => (
    <View style={canGoBack || canGoForward ? styles.container : styles.hide }>
        {canGoBack && <TouchableOpacity onPress={onBackPress} style={styles.button}>
            <Text style={styles.buttonTitle}> Back </Text>
        </TouchableOpacity>}
        {canGoForward && <TouchableOpacity onPress={onForwardPress} style={styles.button}>
            <Text style={styles.buttonTitle}> Forward</Text>
        </TouchableOpacity>}
    </View>
)

export default Navigation;