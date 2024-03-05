import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import BigButtonStyles from './BigButtonStyle'; // Import styles from the separate file

interface BigButtonProps {
  title: string;
  type: string;
  onPress: () => void;
}

const BigButton: React.FC<BigButtonProps> = ({title, type, onPress}) => {
    const [isPressed, setIsPressed] = useState(false);

    let combinedStyles =  [
        BigButtonStyles.buttonPrimary,
        isPressed && BigButtonStyles.buttonPrimaryPressed,
    ];

    if (type === 'secondary'){
        combinedStyles = [
            BigButtonStyles.buttonSecondary,
            isPressed && BigButtonStyles.buttonSecondaryPressed,
        ];
    }

  return (
    <View style={BigButtonStyles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={combinedStyles}
      >
        <Text style={BigButtonStyles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BigButton;
