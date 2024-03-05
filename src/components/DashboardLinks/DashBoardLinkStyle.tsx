import {StyleSheet} from 'react-native';

const DashBoardLinkStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  dashboardImage: {
    justifyContent: 'flex-end',
    width: 340,
    height: 340,
    padding: 7,

    // Add any other styles for the code container
  },
  textBox: {
    alignItems: 'flex-start',
  },
  text: {
    color: '#ffffff', // Button text color
    fontSize: 36,
    fontFamily: 'Rubik-Medium',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
    elevation: 6,
  },
});

export default DashBoardLinkStyles;
