import React, { useState } from 'react';
import { TextInput, View, Platform, TouchableOpacity} from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import TextfieldStyles from './TextfieldStyle';
import { TextfieldType } from '../../utils/TextfieldType';
import HideIcon from '../../assets/icons/passwordicon-hide.svg';
import ShowIcon from '../../assets/icons/passwordicon-show.svg';
import CalendarIcon from '../../assets/icons/calendaricon.svg';

interface TextfieldProps {
    type: TextfieldType;
    value: string;
    placeholder?: string;
}

const Textfield: React.FC<TextfieldProps> = ({
    type,
    value,
    placeholder,
  }) => {

    const [inputValue, setInputValue] = useState<string>('');

    function handleInputChange(text: string) {
        setInputValue(text); // Update state
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const toggleDatePicker = () => {
        setDatePickerVisibility(!isDatePickerVisible);
      };

    let inputComponent = (
      <TextInput
        style={TextfieldStyles.textinput}
        onChangeText={handleInputChange}
        value={inputValue}
        placeholder={placeholder}
        secureTextEntry={false}
      />
    );

    if (type === TextfieldType.DATE) {
        inputComponent = (
          <View style={TextfieldStyles.dateInputContainer}>
            <TextInput
              style={TextfieldStyles.textinputDate}
              value={inputValue}
              placeholder={placeholder}
              editable={false} // Disable keyboard input
            />
            <TouchableOpacity
              style={TextfieldStyles.calendarToggle}
              onPress={toggleDatePicker}>
              <CalendarIcon width={16} height={16}/>
            </TouchableOpacity>
          </View>
        );
      }

    if (type === TextfieldType.PASSWORD) {
        inputComponent = (
            <View style={TextfieldStyles.passwordContainer}>
              <TextInput
                style={[TextfieldStyles.textinputPassword, TextfieldStyles.passwordInput]}
                onChangeText={handleInputChange}
                value={inputValue}
                placeholder={placeholder}
                secureTextEntry={!isPasswordVisible}
              />
              <TouchableOpacity
                style={TextfieldStyles.visibilityToggle}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                {isPasswordVisible ? <HideIcon width={16} height={16} /> : <ShowIcon width={16} height={16} />}
              </TouchableOpacity>
            </View>
          );
    }

    if (type === TextfieldType.LITTLE) {
        inputComponent = (
            <TextInput
                style={TextfieldStyles.textinputLittle}
                onChangeText={handleInputChange}
                value={inputValue}
                placeholder={placeholder}
                secureTextEntry={false}
          />
        );
    }

    if (type === TextfieldType.MEDIUM) {
        inputComponent = (
            <TextInput
                style={TextfieldStyles.textinputMedium}
                onChangeText={handleInputChange}
                value={inputValue}
                placeholder={placeholder}
                secureTextEntry={false}
          />
        );
    }

    return (
        <View>
            {inputComponent}
            {isDatePickerVisible && (
            <DateTimePicker
                value={value ? new Date(value) : new Date()}
                mode="date"
                display="spinner"
                onChange={(event, date) => {
                setDatePickerVisibility(Platform.OS === 'ios'); // For iOS, you may want to keep the picker open after selection
                date && handleInputChange(date.toISOString().split('T')[0]);
                }}
                onTouchCancel={() => setDatePickerVisibility(false)} // Hide picker if the user cancels the interaction
            />
            )}
        </View>
    );
  };

  export default Textfield;
