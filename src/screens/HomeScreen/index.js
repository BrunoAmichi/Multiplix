import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, Text, View } from 'react-native';
import { 
    MyButton,
    InputText
} from '../../components';
import styles from './styles';
import { withLoading } from '../../hocs';
import strings from '../../constants/strings'

const HomeScreen = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onsubmit = () => {
        props.setIsLoading(true);
        // Alert.alert("Login Efetuado", "O usuário é " + email + " e a senha é " + password + ".", 
        // [{ text: "OK", onPress: () => console.log("OK Pressed") }], {cancelable: false})
    }

    const newUser = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../../assets/images/placeholder.png")} style={styles.image}/> 
            <View style={styles.input}>
                <Text>Email: </Text>
                <InputText value={email} onChange={setEmail} />
            </View>
            <View style={styles.input}>
                <Text>Senha: </Text>
                <InputText value={password} onChange={setPassword} isPassword={true} />
            </View>
            <MyButton title={strings.SAVE_BTN} onPress={() => onsubmit()} />
            <MyButton title={strings.NOVO_USR} onPress={() => newUser()} />
        </SafeAreaView>
    );
}

export default withLoading(HomeScreen);