import React from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField, DatePicker, DesktopDatePicker, MobileDatePicker, StaticDatePicker } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { makeStyles, styled } from "@mui/styles";

const useStyles = makeStyles(theme => ({
	root: {
		color: '#FF72B1',
	},
}));

const StyleDatePicker = styled(DatePicker)(({ theme }) => ({
	'& .MuiInputBase-input': {
		padding: "8.5px 14px",
	},
	'& .MuiFormLabel-root': {
		lineHeight: ".5em",
		overflow: "initial"
	}
}));

const CustomDatePicker = (props) => {
	const classes = useStyles()
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DemoContainer
				sx={{ paddingTop: "16px" }}
				components={[
					'DatePicker',
					'MobileDatePicker',
					'DesktopDatePicker',
					'StaticDatePicker',
					'DateField'
				]}
			>
				<DemoItem >
					<StyleDatePicker
						classes={{ root: classes.root }}
						format="dd/MM/yyyy" {...props} />
				</DemoItem>
			</DemoContainer >
		</LocalizationProvider>
	);
};


export default CustomDatePicker;
