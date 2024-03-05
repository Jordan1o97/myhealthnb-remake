import React from 'react';
import { View, Text } from 'react-native';
import forgetPassword2Styles from './ForgetPassword2Style';
import BigButton from '../../Buttons/BigButton/BigButton';
import Digitbox from '../../DigitBox/DigitBox';

const ForgetPassword2 = () => {
    const title = 'Enter 4 Digit Code';
    const description = 'Enter the 4 digit code that you received on your email.';

    return (
        <View>
            <View style={forgetPassword2Styles.textBox}>
                <Text style={forgetPassword2Styles.title}>{title}</Text>
                <Text style={forgetPassword2Styles.desc}>{description}</Text>
            </View>
            <View style={forgetPassword2Styles.spacerBox}>
                <Digitbox />
            </View>
            <View style={forgetPassword2Styles.buttonBox}>
                <BigButton title={'Continue'} type={''} onPress={() => {console.log('click');}}/>
                <BigButton title={'Cancel'} type={'secondary'} onPress={() => {console.log('click');}}/>
            </View>
        </View>
    );
};

export default ForgetPassword2;
