import React from 'react';
import { View, Text } from 'react-native';
import forgetPassword3Styles from './ForgetPassword3Style';
import Textfield from '../../Textfield/Textfield';
import { TextfieldType } from '../../../utils/TextfieldType';
import BigButton from '../../Buttons/BigButton/BigButton';

const ForgetPassword3 = () => {
    const title = 'Reset Password';
    const description = 'Set the new password for your account so you can login and access all the features.';

    return (
        <View>
            <View style={forgetPassword3Styles.textBox}>
                <Text style={forgetPassword3Styles.title}>{title}</Text>
                <Text style={forgetPassword3Styles.desc}>{description}</Text>
            </View>
            <View style={forgetPassword3Styles.spacerBox}>
                <Textfield placeholder="New Password" type={TextfieldType.PASSWORD} value={''} />
                <Textfield placeholder="Re-enter Password" type={TextfieldType.PASSWORD} value={''} />
            </View>
            <View style={forgetPassword3Styles.buttonBox}>
                <BigButton title={'Continue'} type={''} onPress={() => {console.log('click');}}/>
                <BigButton title={'Cancel'} type={'secondary'} onPress={() => {console.log('click');}}/>
            </View>
        </View>
    );
};

export default ForgetPassword3;
