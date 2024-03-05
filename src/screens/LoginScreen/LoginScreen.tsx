import React from 'react';
import { View, Image, Text } from 'react-native';
import loginScreenStyles from './LoginScreenStyles';
import myHealthNB from '../../assets/images/myhealthnb.png';
import verosource from '../../assets/images/verosource.png';
import Textfield from '../../components/Textfield/Textfield';
import { TextfieldType } from '../../utils/TextfieldType';
import BigButton from '../../components/Buttons/BigButton/BigButton';


const LoginScreen = () => {
    return (
        <View style={loginScreenStyles.container}>
            <View style={loginScreenStyles.logoContainer1}>
                <Image source={myHealthNB} style={loginScreenStyles.logo1}/>
            </View>
            <View style={loginScreenStyles.textBoxContainer}>
                <Textfield type={TextfieldType.DEFAULT} placeholder="Email" value={''}/>
                <Textfield type={TextfieldType.PASSWORD} placeholder="Password" value={''} />
                <BigButton title="Login" type="primary" onPress={() => {console.log('Login')}}/>
                <Text style={loginScreenStyles.text}> {'Forget Password?'}</Text>
            </View>
            <Text style={loginScreenStyles.text2}> {'Don’t have an account? Join us'}</Text>
            <View style={loginScreenStyles.logoContainer2}>
                <Image source={verosource} style={loginScreenStyles.logo2}/>
            </View>
        </View>
    );
};

export default LoginScreen;
