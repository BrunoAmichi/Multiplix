import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const InputText = (props) => {
    
    return (
        <TextInput style={[styles.input, styles.input2]} value={props.value} onChangeText={(text) => props.onChange(text)} 
            secureTextEntry={props.isPassword} keyboardType={props.isPassword ? 'default' : 'email-address'} />
    )
}

export default InputText;