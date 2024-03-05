import { StyleSheet } from 'react-native';

const splashScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      },
      logoContainer1: {
        flex: 1,
        justifyContent: 'center',
      },
      logoContainer2: {
        flex: 0.1,
      },
      logo1: {
        width: 600, // You can adjust this width as needed
        height: 300, // And the height as well
        resizeMode: 'contain', // This ensures the aspect ratio is maintained
      },
      logo2: {
        width: 100, // You can adjust this width as needed
        height: 50, // And the height as well
        resizeMode: 'contain', // This ensures the aspect ratio is maintained
      },
});

export default splashScreenStyles;
