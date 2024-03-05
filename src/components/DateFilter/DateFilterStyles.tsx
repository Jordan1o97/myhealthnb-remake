import { StyleSheet } from 'react-native';
import { Colors } from '../../themes/Colors';


const dateFilterStyles = StyleSheet.create({
    header: {
        fontFamily: 'Rubik-Bold',
        color: Colors.grey1,
        fontSize: 24,
        marginBottom: 10,
    },
    yearSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrow: {
        marginHorizontal: 10, // Adjust spacing as needed 
    },
    yearText: {
        fontSize: 24,
        fontFamily: 'Rubik-Bold',
        color: Colors.grey1,
    },
    monthContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 15,
        width: '100%', // Take full width to contain the 3x4 grid
    },
    monthButtonContainer: {
        width: '30%',
        alignItems: 'center',
    },
    monthButton: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        marginHorizontal: '1.333%', // Spacing between buttons, 1.333% * 3 = ~4% spacing total
        marginBottom: 10, // Spacing between rows
        borderRadius: 20,
    },
    selectedMonth: {
        backgroundColor: Colors.blue1,
    },
    buttonText: {
        color: Colors.grey1,
        textAlign: 'center',
        fontFamily: 'Rubik-light',
    },
    selectedButtonText: {
        color: 'white',
    },
    filterTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        marginBottom: 10,
    },
    filterText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 14,
        color: Colors.grey1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        alignItems: 'center',
        marginTop: 10,
    },
});

export default dateFilterStyles;
