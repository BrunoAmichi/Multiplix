import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.red,
        borderRadius: 9,
        padding: 10
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }
})

export default styles;