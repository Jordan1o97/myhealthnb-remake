import { StyleSheet } from 'react-native';
import { Colors } from '../../../themes/Colors';


const forgetPassword1Styles = StyleSheet.create({
    textBox: {
        marginTop: 10,
        marginBottom: 30,
    },
    spacerBox: {
        marginBottom: 30,
    },
    buttonBox: {
        gap: 10,
    },
    title: {
        color: '#000000',
        fontSize: 24,
        fontFamily: 'Rubik-Medium',
        marginBottom: 6,
    },
    desc: {
        color: Colors.grey1,
        fontSize: 14,
        fontFamily: 'Rubik-Regular',
    },
});

export default forgetPassword1Styles;
