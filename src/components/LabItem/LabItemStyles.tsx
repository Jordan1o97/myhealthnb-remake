import { StyleSheet } from 'react-native';
import { Colors } from '../../themes/Colors';

const LabItemStyles = StyleSheet.create({
    container: {
        flex: 0.2,
        flexDirection: 'column',
        margin: 20,
        backgroundColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowRadius: 5,
        shadowOpacity: 0.20,
        borderRadius: 10,
        justifyContent: 'center',
        padding: 10,
    },
    topContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    midContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    topText: {
        fontFamily: 'Rubik-Light',
        fontSize: 12,
        color: Colors.grey1,
        marginRight: 50,
    },
    bottomText: {
        fontFamily: 'Rubik-Medium',
        fontSize: 16,
        color: Colors.grey1,
    },
});

export default LabItemStyles;
