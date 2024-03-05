import React, { useEffect, useState } from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import HeaderButtonStyles from './HeaderButtonStyle';
import Open from '../../../assets/icons/headerOpen.svg';
import Close from '../../../assets/icons/headerClose.svg';

interface HeaderButtonProps {
    img: string;
    type: string;
}

const NBHeader: React.FC<HeaderButtonProps> = ({img, type}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (type === 'open') {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [type]);

  return (
    <TouchableOpacity style={HeaderButtonStyles.container} onPress={() => setIsMenuOpen(!isMenuOpen)}>
        <Image
            source={img} // Replace with your image URL
            style={HeaderButtonStyles.profileImage}
        />
        <View style={HeaderButtonStyles.iconOverlay}>
            {isMenuOpen ? <Open width={16} height={16} /> : <Close width={16} height={16} />}
        </View>
    </TouchableOpacity>
  );
};

export default NBHeader;
