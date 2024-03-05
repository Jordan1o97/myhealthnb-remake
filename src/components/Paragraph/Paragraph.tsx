import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import paragraphStyles from './ParagraphStyles';

interface ParagraphProps {
    text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
    return (
        <View style={paragraphStyles.container}>
            <ScrollView contentContainerStyle={paragraphStyles.pcontainer}>
                <Text style={paragraphStyles.paragraph}>{text}</Text>
            </ScrollView>
        </View>
    );
};

export default Paragraph;
