import React, { useRef, useState } from 'react';
import { View, TextInput } from 'react-native';
import DigitboxStyles from './DigitboxStyle';

interface DigitboxProps {

}

const Digitbox: React.FC<DigitboxProps> = () => {
    const [code, setCode] = useState(['', '', '', '']);
    // Explicitly type the ref array to hold TextInput elements
    const inputRefs = useRef<(TextInput | null)[]>([]);

    const focusNext = (index: number, value: string) => {
        if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
        } else if (!value && index > 0) {
        inputRefs.current[index - 1]?.focus();
        }
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
    };

    return (
        <View style={DigitboxStyles.container}>
            <View style={DigitboxStyles.codeContainer}>
                {code.map((digit, index) => (
                <TextInput
                    key={index}
                    // eslint-disable-next-line no-return-assign
                    ref={el => inputRefs.current[index] = el}
                    style={DigitboxStyles.codeInput}
                    maxLength={1}
                    keyboardType="number-pad"
                    onChangeText={(value) => focusNext(index, value)}
                    value={digit}
                    textContentType="oneTimeCode" // iOS only, to suggest autofill from SMS
                />
                ))}
            </View>
        </View>
    );
};

export default Digitbox;
