import {StyleSheet} from 'react-native';
import {Colors, ColorsPressed} from '../../../themes/Colors';

const SmallButtonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: Colors.blue1,
    paddingHorizontal: 20,
    paddingVertical: 4,
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
    backgroundColor: Colors.white,
    borderColor: Colors.grey1,
    borderWidth: 1,
    paddingVertical: 4,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  buttonSecondaryPressed: {
    backgroundColor: Colors.white,
    borderColor: Colors.grey2,
    borderWidth: 1,
    // iOS shadow
  },
  text: {
    color: '#ffffff', // Button text color
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
  },
  secondayText: {
    color: Colors.grey1, // Button text color
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
  },
});

export default SmallButtonStyles;
