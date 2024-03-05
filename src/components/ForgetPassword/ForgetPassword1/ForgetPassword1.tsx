import React from 'react';
import { View, Text } from 'react-native';
import forgetPassword1Styles from './ForgetPassword1Style';
import Textfield from '../../Textfield/Textfield';
import { TextfieldType } from '../../../utils/TextfieldType';
import BigButton from '../../Buttons/BigButton/BigButton';

const ForgetPassword1 = () => {

    const title = 'Forgot Password';
    const description = 'Enter your email for the verification proccesss,\n we will send 4 digits code to your email.'

    return (
        <View>
            <View style={forgetPassword1Styles.textBox}>
                <Text style={forgetPassword1Styles.title}>{title}</Text>
                <Text style={forgetPassword1Styles.desc}>{description}</Text>
            </View>
            <View style={forgetPassword1Styles.spacerBox}>
                <Textfield placeholder="Email" type={TextfieldType.DEFAULT} value={''} />
            </View>
            <View style={forgetPassword1Styles.buttonBox}>
                <BigButton title={'Continue'} type={''} onPress={() => {console.log('click');}}/>
                <BigButton title={'Cancel'} type={'secondary'} onPress={() => {console.log('click');}}/>
            </View>
        </View>
    );
};

export default ForgetPassword1;
