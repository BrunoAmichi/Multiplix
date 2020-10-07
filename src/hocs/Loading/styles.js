const { StyleSheet } = require("react-native");
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    spinnerContainer: {
        flex: 1,
        backgroundColor: colors.transparent,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;