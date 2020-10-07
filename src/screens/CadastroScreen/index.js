import React, { useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, Alert } from 'react-native'
import {  MyButton } from '../../components'
import InputTextWithLabel from '../../components/InputTextWithLabel'
import colors from '../../constants/colors'

const CadastroScreen = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <SafeAreaView style={style.container}>             
            <InputTextWithLabel label='Nome:' value={nome} onChange={setNome} ></InputTextWithLabel>
            <InputTextWithLabel label='Email:' value={email} onChange={setEmail}></InputTextWithLabel>
            <InputTextWithLabel label='Senha:' password={true} value={senha} onChange={setSenha}></InputTextWithLabel>
            <MyButton title="cadastrar" onPress={ () => enviarCadastro(nome)}></MyButton>
        </SafeAreaView>                
    )

}

const enviarCadastro = (param) => {
    Alert.alert("Cadastro enviado com sucesso!!! " + param)
}

const style = StyleSheet.create ({
    container:{
        flex: 1,        
        justifyContent: "center"
    }

})

export default CadastroScreen