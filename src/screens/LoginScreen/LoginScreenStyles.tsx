import { StyleSheet } from 'react-native';
import { Colors } from '../../themes/Colors';

const loginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      },
      logoContainer1: {
        flex: 1,
        justifyContent: 'flex-start',
      },
      logoContainer2: {
        flex: 0.2,
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
      textBoxContainer: {
        gap: 20,
        alignItems: 'center',
        flex: 1,
      },
      text: {
        color: Colors.grey1,
      },
      text2: {
        color: Colors.grey1,
        marginBottom: 30,
      },
});

export default loginScreenStyles;
