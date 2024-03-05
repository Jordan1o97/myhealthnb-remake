import { StyleSheet } from 'react-native';

const screenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
      },
      background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      content: {
        height: '40%',
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
      },
});

export default screenStyles;
