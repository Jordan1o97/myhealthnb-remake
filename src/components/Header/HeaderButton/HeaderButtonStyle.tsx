import {StyleSheet} from 'react-native';

const HeaderButtonStyles = StyleSheet.create({
  container: {
  },
  profileImage: {
    borderRadius: 40, // This should be half of width/height to make it circular
    width: 50,
    height: 50,
  },
  iconOverlay: {
    // Position the icon overlay on the bottom-right of the image
    position: 'absolute',
    right: 0,
    bottom: -10,
    width: 30, // Size of the overlay
    height: 30,
    borderRadius: 15, // Make it round
    alignItems: 'center', // Center the icon horizontally
    justifyContent: 'center', // Center the icon vertically
  },
});

export default HeaderButtonStyles;
