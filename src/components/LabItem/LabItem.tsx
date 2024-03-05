import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LabItemStyles from './LabItemStyles';
import Arrow from '../../assets/icons/arrow.svg';

interface LabItemProps {
    category: string;
    date: string;
    test: string;
}

const LabItem: React.FC<LabItemProps> = ({ category, date, test }) => {
    return (
        <TouchableOpacity style={LabItemStyles.container}>
            <View style={LabItemStyles.topContainer}>
                <View style={LabItemStyles.midContainer}>
                    <Text style={LabItemStyles.topText}>{category}</Text>
                    <Text style={LabItemStyles.topText}>{date}</Text>
                </View>
                <Arrow/>
            </View>
            <View style={LabItemStyles.bottomContainer}>
                <Text style={LabItemStyles.bottomText}>{test}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default LabItem;
