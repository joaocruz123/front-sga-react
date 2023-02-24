import { Avatar, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DashboardLayout from "../../themes/dashboard/DashboardLayout";
import Title from "../../themes/dashboard/Title";
import { ContentButton } from "./styles";
import { fetchMembers } from '../../redux/actions/members'

const Members = (props) => {
	const { fetchMembers, members } = props;
	const [rows, setRows] = useState(null);

	useEffect(() => {
		fetchMembers(1);
	}, []);

	useEffect(() => {
		if (members && members.length > 0) {
			setRows(members);
		}
	}, [members]);

	return (
		<>
			<DashboardLayout>
				<Grid container spacing={3}>
					<Grid item xs={6} md={8} lg={8}><Title>Membros</Title></Grid>
					<ContentButton item xs={6} md={4} lg={4}><Button variant="contained">Cadastar</Button></ContentButton>
					<Grid item xs={12} md={12} lg={12}>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell align="center"></TableCell>
										<TableCell align="center">Nome</TableCell>
										<TableCell align="center">CPF</TableCell>
										<TableCell align="center">Telefone</TableCell>
										<TableCell align="center">Afastado?</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows && rows.length > 0 && rows.map((row) => (
										<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
											<TableCell align="center">
												<Avatar
													alt={row.avatar}
													src={`http://localhost/uploads/avatars/${row.avatar}`}
													sx={{ width: 56, height: 56 }}
												/></TableCell>
											<TableCell align="center" component="th" scope="row">
												{row.name}
											</TableCell>
											<TableCell align="center">{row.cpf}</TableCell>
											<TableCell align="center">{row.phone}</TableCell>
											<TableCell align="center">{row.away}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</DashboardLayout>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		members: state.member && state.member.members || null
	};
}

export default connect(
	mapStateToProps, {
	fetchMembers
})(Members);