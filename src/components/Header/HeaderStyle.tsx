import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/Colors';

const HeaderStyles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  parentView: {
    backgroundColor: Colors.blue1,
    padding : 12.5,
    height: 156,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  leftContainer: {
    width: '75%',
    alignItems: 'flex-start',
  },
  rightContainer: {
    width: '25%',
    alignItems: 'flex-end',
  },
  textS: {
    color: '#ffffff', // Button text color
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
  },
  textL: {
    color: '#ffffff', // Button text color
    fontSize: 24,
    fontFamily: 'Rubik-Regular',
  },

  container2: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  parentView2: {
    backgroundColor: Colors.blue1,
    padding : 12.5,
    paddingTop: 52.5,
    height: 156,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  leftContainer2: {
    width: '50%',
    alignItems: 'center',
  },
  rightContainer2: {
    width: '50%',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
  },
  textL2: {
    color: '#ffffff', // Button text color
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    marginVertical: 4,
  },
  textS2: {
    color: '#ffffff', // Button text color
    fontSize: 10,
    fontFamily: 'Rubik-Light',
  },
  textM: {
    color: '#ffffff', // Button text color
    fontSize: 10,
    fontFamily: 'Rubik-Regular',
  },
});

export default HeaderStyles;
