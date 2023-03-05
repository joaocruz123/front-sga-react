import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const CustomSelect = (props) => {
	const { id, labelId, labelText, value, handleChange, itens, variant, margin } = props;
	return (
		<FormControl variant={variant} fullWidth margin={margin}>
			<InputLabel id={id}>{labelText}</InputLabel>
			<Select
				labelId={labelId}
				id={id}
				value={value}
				onChange={handleChange}
				label="Age"
			>
				{itens?.length > 0 &&
					itens.map((item, index) => (
						<MenuItem
							value={item.uo ? item.uo : item.id}
							key={index}
							name={item.uo ? item.uo : item.nome}
						>
							{item.nome ? item.nome : item.uo}
						</MenuItem>
					))}
			</Select>
		</FormControl>

	);
}

export default CustomSelect;
