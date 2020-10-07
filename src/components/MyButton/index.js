import React from 'react';

import { Pressable, Text } from 'react-native';
import styles from './styles';

const MyButton = (props) => {
    return (
        <Pressable style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    );
}

export default MyButton;