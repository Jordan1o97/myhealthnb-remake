import { StyleSheet } from 'react-native';
import { Colors } from '../../../themes/Colors';


const forgetPassword1Styles = StyleSheet.create({
    textBox: {
        marginTop: 7.5,
        marginBottom: 15,
    },
    spacerBox: {
        marginBottom: 15,
        gap: 10,
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
