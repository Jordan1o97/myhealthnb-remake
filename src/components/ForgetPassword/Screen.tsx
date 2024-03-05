import React from 'react';
import { Modal, View } from 'react-native';
import screenStyles from './ScreenStyles';

type ScreenProps = {
    children: React.ReactNode;
    isVisible: boolean;
    height: number;
};

const Screen: React.FC<ScreenProps> = ({ children, isVisible, height }) => {
    return (
        <Modal
            visible={isVisible}
            transparent
            animationType="slide"
            >
            <View style={screenStyles.container}>
                <View style={screenStyles.background} />
                <View style={[screenStyles.content, { height: `${height}%` }]}>{children}</View>
            </View>
        </Modal>
    );
};

export default Screen;
