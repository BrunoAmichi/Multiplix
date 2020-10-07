import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import { InputText } from '../../components'
import InputTextWithLabel from '../../components/InputTextWithLabel'

const CadastroScreen = () => {

    return (
        <SafeAreaView>            
            <InputTextWithLabel label='Nome:' ></InputTextWithLabel>
            <InputTextWithLabel label='Email:' ></InputTextWithLabel>
            <InputTextWithLabel label='Senha:' ></InputTextWithLabel>
        </SafeAreaView>                
    )

}

export default CadastroScreen