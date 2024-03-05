import {StyleSheet} from 'react-native';
import { Colors } from '../../themes/Colors';

const DigitboxStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // Add any other styles for the code container
  },
  codeInput: {
    padding: 10,
    fontSize: 22,
    textAlign: 'center',
    width: 50,
    height: 60,
    margin: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey2,
    color: Colors.blue1,
    // Add any other styles for the digit boxes
  },
});

export default DigitboxStyles;
