import { StyleSheet } from 'react-native';
import { Colors } from '../../themes/Colors';


const categoryFilterStyles = StyleSheet.create({
    header: {
        fontFamily: 'Rubik-Bold',
        color: Colors.grey1,
        fontSize: 24,
        marginBottom: 10,
    },
    check: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        alignItems: 'center',
        marginTop: 10,
    },
});

export default categoryFilterStyles;
