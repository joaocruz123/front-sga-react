import React, { useEffect } from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDeviceLayout } from "../../components/utilities/useCustomLayout";
import { CustomInput } from "../../components/Common/CustomInput/CustomInput";
import Logo from '../../assets/logo.png';
import { login } from "../../redux/actions/auth";
import { useSnackbar } from "react-simple-snackbar";
import { ErrorOptions } from "../../utils/styleNotification";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                SGAM
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const WrapperBackground = styled.div`
	background-color: #f5f6ff;
    width: 100vw;
    height: 100vh;
`

const LoginPage = (props) => {
    const { login, setLoading } = props;
    const [openErrorSnackbar] = useSnackbar(ErrorOptions({ modal: true }))

    const isMobile = useDeviceLayout({ isMobile: true });

    useEffect(() => { }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        const data = new FormData(event.currentTarget);
        if (data.get('email') && data.get('password')) {
            const result = await login({
                email: data.get('email'),
                password: data.get('password'),
            })

            if (result.success && result.accessToken) {
                setLoading(false)

                return
            } else if (!result.success) {
                openErrorSnackbar(result.message, 50000)
                setLoading(false)

                return
            } else {
                openErrorSnackbar('Falha ao tentar fazer o login. Tente novamente!')
                setLoading(false)
            }
        } else {
            openErrorSnackbar('Preenchar o campo de email e senha!')
            setLoading(false)
        }

    };

    return (
        <>
            <React.Fragment>
                <WrapperBackground>
                    <Container component="main" maxWidth="xs"
                        sx={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            justifyContent: 'center', flexWrap: 'wrap', height: '100%'
                        }} >
                        <Box sx={{
                            position: 'relative', display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'
                        }}>
                            <Avatar
                                alt="logo SGM"
                                src={Logo}
                                sx={{ width: 200, height: 106 }}
                                variant="square"
                            />
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <CustomInput
                                    margin={"normal"}
                                    required
                                    fullWidth
                                    id={"email"}
                                    label={"Email"}
                                    name={"email"}
                                    autoComplete={"email"}
                                    autoFocus
                                    inputtype={"input"}
                                    size={'small'}
                                    variant={"standard"}
                                />
                                <CustomInput
                                    margin={"normal"}
                                    required
                                    fullWidth
                                    name={"password"}
                                    label={"Senha"}
                                    type={"password"}
                                    id={"password"}
                                    autoComplete={"current-password"}
                                    inputtype={"input"}
                                    size={'small'}
                                    variant={"standard"}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Lembre-me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Entrar
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Esqueceu a senha?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Não tem uma conta? Inscrever-se"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Container>
                </WrapperBackground>
            </React.Fragment>
        </>
    );
};

const mapStateToProps = (state) => {
    return {};
}

export default connect(
    mapStateToProps, {
    login
})(LoginPage);