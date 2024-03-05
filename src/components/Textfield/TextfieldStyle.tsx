import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/Colors';

const TextfieldStyles = StyleSheet.create({
  textinput: {
    backgroundColor: Colors.white,
    color: Colors.grey1,
    borderColor: Colors.grey2,
    borderWidth: 1,
    paddingVertical: 12.5,
    paddingLeft: 27,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 33,
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    minWidth: '80%',
  },

  textinputLittle: {
    backgroundColor: Colors.white,
    color: Colors.grey1,
    borderColor: Colors.grey2,
    borderWidth: 1,
    paddingVertical: 132,
    paddingLeft: 27,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 11,
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    
  },

  textinputMedium: {
    backgroundColor: Colors.white,
    color: Colors.grey1,
    borderColor: Colors.grey2,
    borderWidth: 1,
    paddingVertical: 12.5,
    paddingLeft: 27,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
  },

  textinputPassword: {
    backgroundColor: Colors.white,
    color: Colors.grey1,
    paddingVertical: 12.5,
    paddingLeft: 27,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
  },

  textinputDate: {
    backgroundColor: Colors.white,
    color: Colors.grey1,
    paddingVertical: 12.5,
    paddingLeft: 27,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    minWidth: '80%',
  },

  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.grey2,
    borderWidth: 1,
    marginHorizontal: 33,
    minWidth: '80%',
  },
  passwordInput: {
    flex: 1,
    // Adjust padding if necessary due to the addition of the visibility toggle
  },
  visibilityToggle: {
    // Style for your visibility toggle button
    paddingRight: 27,
  },
  dateInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.grey2,
    borderWidth: 1,
    marginHorizontal: 33,
  },
  dateinput: {
    flex: 1,
  },
  calendarToggle: {
    paddingRight: 27,
  },
});

export default TextfieldStyles;
