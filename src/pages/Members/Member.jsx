import { Divider, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { CustomInput } from "../../components/Common/CustomInput/CustomInput";
import CustomDatePicker from "../../components/CustomDatePicker";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import DashboardLayout from "../../themes/dashboard/DashboardLayout";
import Title from "../../themes/dashboard/Title";

const sexList = [
	{
		id: 'masculino',
		nome: 'Masculino'
	}, {
		id: 'feminino',
		nome: 'Feminino'
	}
]

const Member = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [cpf, setCpf] = useState("");
	const [sex, setSex] = useState("");
	const [phone, setPhone] = useState("");
	const [cellPhone, setCellPhone] = useState("");
	const [birthDate, setbirthDate] = useState(null);

	const handleSexChange = async (event) => {
		setSex(event.target.value);
	};

	return (
		<>
			<DashboardLayout>
				<Grid container spacing={3}>
					<Grid item xs={12} md={12} lg={12}>
						<Title>Cadastrar Membro</Title>
						<Paper
							sx={{
								p: 2,
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<Divider variant="middle">Dados Pessoais</Divider>
							<Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
								<Grid item xs={12} md={6} lg={6}>
									<CustomInput
										margin={"normal"}
										required
										fullWidth
										id={"name"}
										label={"Nome"}
										name={"name"}
										autoComplete={"name"}
										inputtype={"input"}
										size={'small'}
										variant={"outlined"}
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12} md={6} lg={6}>
									<CustomInput
										margin={"normal"}
										required
										fullWidth
										id={"email"}
										label={"E-mail"}
										name={"email"}
										autoComplete={"email"}
										inputtype={"input"}
										size={'small'}
										variant={"outlined"}
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12} md={4} lg={4}>
									<CustomInput
										margin={"normal"}
										label="CPF"
										required
										fullWidth
										size={'small'}
										value={cpf}
										onChange={(e) => setCpf(e.target.value)}
										name="cpf"
										id="cpf"
										maskType={"cpf"}
										autoComplete={"email"}
										inputtype={"mask"}
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12} md={4} lg={4}>
									<CustomSelect
										variant={"outlined"}
										margin={"normal"}
										labelId={"sex"}
										size={'small'}
										labelText={"Sexo"}
										value={sex}
										handleChange={handleSexChange}
										itens={sexList}
									/>
								</Grid>
								<Grid item xs={12} md={4} lg={4}>
									<CustomInput
										margin={"normal"}
										label="Telefone"
										required
										fullWidth
										size={'small'}
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										name="phone"
										id="phone"
										maskType={"phone"}
										autoComplete={"phone"}
										inputtype={"mask"}
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12} md={4} lg={4}>
									<CustomInput
										margin={"normal"}
										label="Celular"
										required
										fullWidth
										size={'small'}
										value={cellPhone}
										onChange={(e) => setCellPhone(e.target.value)}
										name="cellPhone"
										id="cellPhone"
										maskType={"phone"}
										autoComplete={"cellPhone"}
										inputtype={"mask"}
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12} md={4} lg={4}>
									<CustomDatePicker
										label={"Data de Nascimento"}
										value={birthDate}
										size={'small'}
										margin={"normal"}
										onChange={(newValue) => setbirthDate(newValue)}
									/>
								</Grid>
							</Grid>
							<Divider variant="middle">Dados de endereço</Divider>
							<Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
								<Grid item xs={12} md={4} lg={4}>
									<CustomInput
										margin={"normal"}
										required
										fullWidth
										id={"name"}
										label={"Nome"}
										name={"name"}
										autoComplete={"name"}
										inputtype={"input"}
										size={'small'}
										variant={"standard"}
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12} md={4} lg={4}>
									<CustomInput
										margin={"normal"}
										required
										fullWidth
										id={"email"}
										label={"E-mail"}
										name={"email"}
										autoComplete={"email"}
										inputtype={"input"}
										size={'small'}
										variant={"standard"}
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12} md={4} lg={4}>
									<CustomInput
										margin={"normal"}
										label="CPF"
										required
										fullWidth
										size={'small'}
										value={cpf}
										onChange={(e) => setCpf(e.target.value)}
										name="cpf"
										id="cpf"
										maskType={"cpf"}
										autoComplete={"email"}
										inputtype={"mask"}
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12} md={4} lg={4}>
									<CustomSelect
										variant={"standard"}
										margin={"normal"}
										labelId={"sex"}
										labelText={"Sexo"}
										value={sex}
										handleChange={handleSexChange}
										itens={sexList}
									/>
								</Grid>
								<Grid item xs={12} md={4} lg={4}>
									<CustomInput
										margin={"normal"}
										label="Telefone"
										required
										fullWidth
										size={'small'}
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										name="phone"
										id="phone"
										maskType={"phone"}
										autoComplete={"phone"}
										inputtype={"mask"}
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12} md={4} lg={4}>
									<CustomInput
										margin={"normal"}
										label="Celular"
										required
										fullWidth
										size={'small'}
										value={cellPhone}
										onChange={(e) => setCellPhone(e.target.value)}
										name="cellPhone"
										id="cellPhone"
										maskType={"phone"}
										autoComplete={"cellPhone"}
										inputtype={"mask"}
										variant="standard"
									/>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</DashboardLayout>
		</>
	);
};

const mapStateToProps = (state) => {
	return {};
}

export default connect(
	mapStateToProps, {
})(Member);
