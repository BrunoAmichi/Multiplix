import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        margin: 10
    },
    image: {
        alignSelf: 'center',
        maxHeight: 200,
        resizeMode: 'contain'
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})