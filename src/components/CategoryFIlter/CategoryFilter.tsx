import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SmallButton from '../Buttons/SmallButton/SmallButton';
import CheckBox from '@react-native-community/checkbox';
import categoryFilterStyles from './CategoryFilterStyles';
import { Colors } from '../../themes/Colors';

interface Props {
    title: string;
    categories: string[];
}

const CategoryFilter: React.FC<Props> = ({ title, categories}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean[]>(Array(categories.length).fill(false));

    const handleCheckboxChange = (index: number) => {
        const newToggleCheckBox = [...toggleCheckBox];
        newToggleCheckBox[index] = !newToggleCheckBox[index];
        setToggleCheckBox(newToggleCheckBox);
        // set filtered categories redux;
    };

    return (
        <View>
            <Text style={categoryFilterStyles.header}>{title}</Text>
            {categories.map((category, index) => (
                <TouchableOpacity key={index} style={categoryFilterStyles.check}>
                    <CheckBox
                        boxType="square"
                        onCheckColor={Colors.blue1}
                        onTintColor={Colors.blue1}
                        disabled={false}
                        value={toggleCheckBox[index]}
                        onValueChange={() => handleCheckboxChange(index)}
                    />
                    <Text>{category}</Text>
                </TouchableOpacity>
            ))}
            <View style={categoryFilterStyles.footer}>
                <SmallButton title="Apply" type="primary" onPress={() => {console.log('apply')}} />
                <SmallButton title="cancel" type="secondary" onPress={() => {console.log('close')}} />
            </View>
        </View>
    );
};

export default CategoryFilter;
