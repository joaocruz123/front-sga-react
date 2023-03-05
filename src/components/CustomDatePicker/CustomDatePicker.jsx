import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CustomDatePicker = (props) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker {...props} />
		</LocalizationProvider>
	);
};


export default CustomDatePicker;
