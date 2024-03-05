import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import SmallButtonStyles from './SmallButtonStyles'; // Import styles from the separate file

interface SmallButtonProps {
    title: string;
    type: string;
    onPress: () => void;
}

const SmallButton: React.FC<SmallButtonProps> = ({title, type, onPress}) => {
        const [isPressed, setIsPressed] = useState(false);

        let combinedStyles =  [
                SmallButtonStyles.buttonPrimary,
                isPressed && SmallButtonStyles.buttonPrimaryPressed,
        ];

        let combinedText = SmallButtonStyles.text

        if (type === 'secondary'){
                combinedStyles = [
                        SmallButtonStyles.buttonSecondary,
                        isPressed && SmallButtonStyles.buttonSecondaryPressed,
                ];
                combinedText = SmallButtonStyles.secondayText;
        }

    return (
        <View style={SmallButtonStyles.container}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                style={combinedStyles}
            >
                <Text style={combinedText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SmallButton;
