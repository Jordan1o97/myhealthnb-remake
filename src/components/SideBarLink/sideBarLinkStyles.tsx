import { StyleSheet } from 'react-native';
import { Colors } from '../../themes/Colors';

const SideBarLinkStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        width: '100%',
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
        alignItems: 'flex-end',
    }, 
    text: {
        flex: 1,
        color: Colors.grey1,
        fontSize: 18,
        fontFamily: 'Rubik-Medium',
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
});

export default SideBarLinkStyles;
