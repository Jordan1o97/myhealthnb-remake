import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import DashBoardLinkStyles from './DashBoardLinkStyle';

interface DashboardLinkProps {
    img: string;
    text: string;
}

const DashboardLink: React.FC<DashboardLinkProps> = ({img, text}) => {

  return (
    <TouchableOpacity style={DashBoardLinkStyles.container} onPress={() => console.log('OPEN' + text)}>
        <ImageBackground
            source={img} // Replace with your image URL
            style={DashBoardLinkStyles.dashboardImage}
            borderRadius ={16}
        >
            <View style={DashBoardLinkStyles.textBox}>
                <Text style={DashBoardLinkStyles.text}>{text}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
  );
};

export default DashboardLink;
