import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import dateFilterStyles from './DateFilterStyles'; 
import Arrow from '../../assets/icons/arrow.svg';
import Calendar from '../../assets/icons/calendaricon.svg';
import SmallButton from '../Buttons/SmallButton/SmallButton';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

interface DateFilterProps {
    onApply: (dates: { start: string, end: string }) => void; // Callback function to handle applying the date filter
    onCancel: () => void; // Callback function to handle canceling the date filter
}

const DateFilter: React.FC<DateFilterProps> = ({ onApply, onCancel }) => {
  const [startDate, setStartDate] = useState(new Date()); // State for the start date
  const [endDate, setEndDate] = useState(new Date()); // State for the end date

  // Function to change the start year based on the increment flag
  const changeStartYear = (increment: boolean) => {
    setStartDate(prevDate => {
        const currentYear = new Date().getFullYear();
        const newYear = increment ? Math.min(prevDate.getFullYear() + 1, currentYear) : Math.max(prevDate.getFullYear() - 1, 1972);
        return new Date(newYear, prevDate.getMonth(), prevDate.getDate());
    });
  };

  // Function to change the end year based on the increment flag
  const changeEndYear = (increment: boolean) => {
    setEndDate(prevDate => {
        const currentYear = new Date().getFullYear();
        const newYear = increment ? Math.min(prevDate.getFullYear() + 1, currentYear) : Math.max(prevDate.getFullYear() - 1, 1972);
        return new Date(newYear, prevDate.getMonth(), prevDate.getDate());
    });
  };

  // Function to handle applying the date filter
  const handleApply = () => {
    // Format dates to string and pass them back through the onApply prop
    onApply({
      start: `${startDate.getFullYear()}-${startDate.getMonth() + 1}`,
      end: `${endDate.getFullYear()}-${endDate.getMonth() + 1}`,
    });
  };

  // Function to get the confirmation text for the selected date range
  const getFilterConfirmationText = () => {
    const startMonth = months[startDate.getMonth()];
    const endMonth = months[endDate.getMonth()];
    return `${startMonth} ${startDate.getFullYear()}  -  ${endMonth} ${endDate.getFullYear()}`;
  };

  return (
    <View>
        {/* Start Date Selection */}
        <View>
            <Text style={dateFilterStyles.header}>START DATE</Text>
            <View style={dateFilterStyles.yearSelector}>
                <TouchableOpacity onPress={() => changeStartYear(false)}>
                    <Arrow style={[dateFilterStyles.arrow, { transform: [{ scaleX: -1 }] }]} />
                </TouchableOpacity>
                <Text style={dateFilterStyles.yearText}>{startDate.getFullYear()}</Text>
                <TouchableOpacity onPress={() => changeStartYear(true)}>
                    <Arrow style={dateFilterStyles.arrow} />
                </TouchableOpacity>
            </View>
            <View style={dateFilterStyles.monthContainer}>
                {months.map((month, index) => (
                    <View key={month} style={dateFilterStyles.monthButtonContainer}>
                        <TouchableOpacity
                            style={[
                                dateFilterStyles.monthButton,
                                startDate.getMonth() === index && dateFilterStyles.selectedMonth,
                            ]}
                            onPress={() => setStartDate(new Date(startDate.getFullYear(), index))}
                        >
                            <Text style={[
                                dateFilterStyles.buttonText,
                                startDate.getMonth() === index && dateFilterStyles.selectedButtonText,
                            ]}>
                                {month}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>

        {/* End Date Selection */}
        <View>
            <Text style={dateFilterStyles.header}>END DATE</Text>
            <View style={dateFilterStyles.yearSelector}>
                <TouchableOpacity onPress={() => changeEndYear(false)}>
                    <Arrow style={[dateFilterStyles.arrow, { transform: [{ scaleX: -1 }] }]} />
                </TouchableOpacity>
                <Text style={dateFilterStyles.yearText}>{endDate.getFullYear()}</Text>
                <TouchableOpacity onPress={() => changeEndYear(true)}>
                    <Arrow style={dateFilterStyles.arrow} />
                </TouchableOpacity>
            </View>
            <View style={dateFilterStyles.monthContainer}>
                {months.map((month, index) => (
                    <View key={month} style={dateFilterStyles.monthButtonContainer}>
                        <TouchableOpacity
                            key={month}
                            style={[
                                dateFilterStyles.monthButton,
                                endDate.getMonth() === index && dateFilterStyles.selectedMonth
                            ]}
                            onPress={() => setEndDate(new Date(endDate.getFullYear(), index))}
                        >
                            <Text style={[
                                dateFilterStyles.buttonText,
                                endDate.getMonth() === index && dateFilterStyles.selectedButtonText,
                            ]}>
                                {month}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
        <View style={dateFilterStyles.filterTextContainer}>
            <Calendar />
            <Text style={dateFilterStyles.filterText}>
            {getFilterConfirmationText()}
            </Text>
        </View>
        <View style={dateFilterStyles.footer}>
            <SmallButton title="Apply" type="primary" onPress={handleApply} />
            <SmallButton title="cancel" type="secondary" onPress={handleApply} />
        </View>
    </View>
  );
};

export default DateFilter;
