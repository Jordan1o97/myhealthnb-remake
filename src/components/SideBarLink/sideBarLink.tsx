import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Arrow from '../../assets/icons/arrow.svg';
import SideBarLinkStyles from './sideBarLinkStyles';

interface SideBarLinkProps {
    imageSource: any;
    text: string;
}

const SideBarLink: React.FC<SideBarLinkProps> = ({ imageSource, text }) => {
    return (
        <TouchableOpacity style={SideBarLinkStyles.container}>
            <Image source={imageSource} style={SideBarLinkStyles.image} />
            <Text style={SideBarLinkStyles.text}>{text}</Text>
            <Arrow style={SideBarLinkStyles.icon}/>
        </TouchableOpacity>
    );
};

export default SideBarLink;
