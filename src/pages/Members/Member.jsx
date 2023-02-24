import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { useContext, useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { CustomInput } from "../../components/Common/CustomInput/CustomInput";
import InputMask from "../../components/InputMask/InputMask";
import DashboardLayout from "../../themes/dashboard/DashboardLayout";
import Title from "../../themes/dashboard/Title";

const Member = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

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
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} lg={6}>
                                    <CustomInput
                                        margin={"normal"}
                                        required
                                        fullWidth
                                        id={"name"}
                                        label={"Nome"}
                                        name={"name"}
                                        autoComplete={"name"}
                                        autoFocus
                                        inputtype={"input"}
                                        size={'small'}
                                        variant={"standard"}
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
                                        autoFocus
                                        inputtype={"input"}
                                        size={'small'}
                                        variant={"standard"}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={6}>

                                    <TextField
                                        label="react-number-format"
                                        // value={values.numberformat}
                                        // onChange={handleChange}
                                        name="numberformat"
                                        id="formatted-numberformat-input"
                                        InputProps={{
                                            inputComponent: InputMask,
                                        }}
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