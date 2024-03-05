import React from 'react';
import { View, Image } from 'react-native';
import splashScreenStyles from './SplashScreenStyles';
import myHealthNB from '../../assets/images/myhealthnb.png';
import verosource from '../../assets/images/verosource.png';

const SplashScreen = () => {
    return (
        <View style={splashScreenStyles.container}>
            <View style={splashScreenStyles.logoContainer1}>
                <Image source={myHealthNB} style={splashScreenStyles.logo1}/>
            </View>
            <View style={splashScreenStyles.logoContainer2}>
                <Image source={verosource} style={splashScreenStyles.logo2}/>
            </View>
        </View>
    );
};

export default SplashScreen;
