import React from 'react';
import {Text, View} from 'react-native';
import HeaderStyles from './HeaderStyle';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../themes/Colors';
import HeaderButton from './HeaderButton/HeaderButton';

interface HeaderProps {
  smallTitle: string;
  title: string;
  image: string;
  dob: string;
  healthNumber: string;
}

const NBHeader: React.FC<HeaderProps> = ({smallTitle, title, image, dob, healthNumber}) => {
    let type = 'simple';

    if (dob && healthNumber !== null){
        type = 'complex';
    }

    let header;

    if (type === 'simple'){
        header = (
            <View style={HeaderStyles.container}>
                <LinearGradient
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}
                    colors={[Colors.blue1, Colors.blue2]}
                    style={HeaderStyles.parentView}
                >
                    <View style={HeaderStyles.leftContainer}>
                        <Text style={HeaderStyles.textS}>{smallTitle}</Text>
                        <Text style={HeaderStyles.textL}>{title}</Text>
                    </View>
                    <View style={HeaderStyles.rightContainer}>
                        <HeaderButton img={image} type={'open'}/>
                    </View>
                </LinearGradient>
            </View>
        );
    }

    if (type === 'complex'){
        header = (
            <View style={HeaderStyles.container2}>
                <LinearGradient
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}
                    colors={[Colors.blue1, Colors.blue2]}
                    style={HeaderStyles.parentView2}
                >
                    <HeaderButton type={'close'} img={image}/>
                    <Text style={HeaderStyles.textL2}>{title}</Text>
                    <View style={HeaderStyles.bottomContainer}>
                        <View style={HeaderStyles.leftContainer2}>
                            <Text style={HeaderStyles.textS2}>{'DOB'}</Text>
                            <Text style={HeaderStyles.textM}>{dob}</Text>
                        </View>
                        <View style={HeaderStyles.rightContainer2}>
                            <Text style={HeaderStyles.textM}>{'Health  Care Number'}</Text>
                            <Text style={HeaderStyles.textS2}>{'NB ' + healthNumber}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }

  return (
    header
  );
};

export default NBHeader;
