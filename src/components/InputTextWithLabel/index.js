import React from 'react'
import InputText from '../InputText'
import { TextInput, Text, View, StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const InputTextWithLabel = ({label}) => {

    return (
       <View style={style.container} > 
            <Text style={style.label}>{label}</Text>
            <TextInput style={style.input}></TextInput> 
       </View> 
    )

}

const style = StyleSheet.create({
    container: {                                            
            flexDirection: 'row',
            backgroundColor: colors.red,
            marginBottom: 10,
            
        },
    input : {
        backgroundColor: colors.gray,
        flex: 8.8
    },
    label : {
        flex: 1.2,
        backgroundColor: colors.yellow,
        alignSelf: "center"
    }
})  

export default InputTextWithLabel