import {StyleSheet} from 'react-native';
import {Colors, ColorsPressed} from '../../../themes/Colors';

const BigButtonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: Colors.blue1,
    paddingVertical: 12.5,
    paddingHorizontal: 100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimaryPressed: {
    backgroundColor: ColorsPressed.blue1Pressed,
    // iOS shadow
    shadowOpacity: 0.3, // Visible shadow when pressed
    shadowRadius: 5,
    shadowOffset: { height: 2, width: 0 },
    // Android elevation
    elevation: 5, // Visible elevation when pressed
  },
  buttonSecondary: {
    backgroundColor: Colors.grey1,
    paddingVertical: 12.5,
    paddingHorizontal: 100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondaryPressed: {
    backgroundColor: ColorsPressed.grey1Pressed,
    // iOS shadow
    shadowOpacity: 0.3, // Visible shadow when pressed
    shadowRadius: 5,
    shadowOffset: { height: 2, width: 0 },
    // Android elevation
    elevation: 5, // Visible elevation when pressed
  },
  text: {
    width: 100,
    textAlign: 'center',
    color: '#ffffff', // Button text color
    fontSize: 18,
    fontFamily: 'Rubik-Medium',
  },
});

export default BigButtonStyles;
