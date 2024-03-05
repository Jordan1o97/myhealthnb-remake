import { StyleSheet } from 'react-native';
import { Colors } from '../../themes/Colors';

const paragraphStyles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        marginHorizontal: 25,
    },
    pcontainer: {
        alignItems: 'center',
        backgroundColor: Colors.grey2,
        justifyContent: 'flex-start',
        padding: 10,
    },
    paragraph: {
        fontFamily: 'Rubik-Regular',
        fontSize: 10,
        color: Colors.grey1,
    },
});

export default paragraphStyles;
