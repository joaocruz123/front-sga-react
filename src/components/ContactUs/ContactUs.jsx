import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useSnackbar } from 'react-simple-snackbar'
import { ErrorOptions, SuccessOptions } from "../../utils/styleNotification";
import { fetchFederationUnits, fetchDistrictsByFederationUnits, setDistricts, postMessageContactUs } from './../../redux/actions/contact'
import {
  Wrapper,
  H1,
  CustomButton,
  Title,
  Subtitle
} from './styles'
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, styled, TextField, Typography } from "@mui/material";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#ED8B26',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#d36b01',
  },
  '& .MuiInputLabel-root': {
    fontSize: '14px !important'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ED8B26',
      //background: '#F5F5F5'
    },
    '& .error': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: '#d36b01',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ED8B26',
    },
  },
});

const CssFormControl = styled(FormControl)({
  '& label.Mui-focused': {
    color: '#ED8B26',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#d36b01',
  },
  '& .MuiInputLabel-root': {
    fontSize: '14px !important'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ED8B26',
      //background: '#F5F5F5'
    },
    '&:hover fieldset': {
      borderColor: '#d36b01',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ED8B26',
    },
  },
});

function ContactUs(props) {
  const {
    fetchFederationUnits,
    fetchDistrictsByFederationUnits,
    federationUnits,
    districts,
    setDistricts,
    postMessageContactUs,
    isMobile
  } = props
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [store, setStore] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);
  const [openErrorSnackbar] = useSnackbar(ErrorOptions({ modal: false }))
  const [openSuccessSnackbar] = useSnackbar(SuccessOptions({ modal: false }))

  useEffect(() => {
    fetchFederationUnits()
    setDistricts(null)
  }, [])
  const clearForm = () => {
    setFullName("")
    setEmail("")
    setPhone("")
    setState("")
    setCity("")
    setStore("")
    setSubject("")
    setMessage("")
  }

  const handleChangeState = (event) => {
    setState(event.target.value);

    const idState = federationUnits && federationUnits.find((item) => item.nome === event.target.value)
    fetchDistrictsByFederationUnits(idState.id)
  }

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  }

  const isValidation = () => {
    if (!fullName || !email || !phone || !state || !city || !subject || !message) {
      return false
    }

    return true
  }

  const handleFormContactUs = () => {
    console.log({
      fullName,
      email,
      phone,
      state,
      city,
      store,
      subject,
      message
    })
    if (!isValidation()) {
      openErrorSnackbar('É necessário preencher todos os campos obrigatórios!', 10000)
      return
    }

    postMessageContactUs([{
      name: 'message-contact',
      type: 'error',
      callback: () => {
        clearForm()
        openErrorSnackbar('Erro ao enviar mensagem! :(')
      }
    }, {
      name: 'message-contact',
      type: 'success',
      callback: () => {
        clearForm()
        openSuccessSnackbar('Menssagem enviada com sucesso!')
      }
    },
    {
      name: 'message-contact',
      type: 'data',
      data: {
        fullName,
        email,
        phone,
        state,
        city,
        store,
        subject,
        message
      }
    }])
  }

  const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  return (
    <Container disableGutters component="main" sx={{ p: 10 }} style={{ padding: isMobile ? "10px" : '' }}>
      <Title>Fale Conosco</Title>
      <Subtitle>Para dúvidas, reclamações ou sugestões, utilize o formulário abaixo e retornaremos o mais breve possível.</Subtitle>
      <form onSubmit={(event) => {
        event.preventDefault()
        handleFormContactUs()
      }}>
        <Wrapper>
          <H1>Preencha os campos e envie sua menssagem.</H1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CssTextField
                className="error"
                label="Nome Completo"
                id="form-full-name"
                size="small"
                fullWidth
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                label="E-mail"
                id="form-email"
                size="small"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CssTextField
                label="Telefone"
                id="form-phone"
                size="small"
                fullWidth
                value={phone}
                required
                onChange={(e) => setPhone(phoneMask(e.target.value))}
                inputProps={{
                  maxLength: 15,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CssFormControl fullWidth size="small">
                <InputLabel id="select-label-state">Estado</InputLabel>
                <Select
                  labelId="select-label-state"
                  id="select-state"
                  value={state}
                  label="Estado"
                  name="Estado"
                  onChange={handleChangeState}
                >
                  {federationUnits && federationUnits.length > 0 && federationUnits.map((state) => (
                    <MenuItem
                      key={state.id}
                      value={state.nome}
                    >
                      {state.nome}
                    </MenuItem>
                  ))}
                </Select>
              </CssFormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CssFormControl fullWidth size="small">
                <InputLabel id="select-label-city">Cidade</InputLabel>
                <Select
                  labelId="select-label-city"
                  id="select-city"
                  value={city}
                  label="Cidade"
                  name="Cidade"
                  onChange={handleChangeCity}
                >
                  {districts && districts.length > 0 && districts.map((state) => (
                    <MenuItem
                      key={state.id}
                      value={state.nome}
                    >
                      {state.nome}
                    </MenuItem>
                  ))}
                </Select>
              </CssFormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                label="Loja"
                id="form-store"
                size="small"
                fullWidth
                value={store}
                onChange={(e) => setStore(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                label="Assunto"
                id="form-subject"
                size="small"
                fullWidth
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                label="Mensagem"
                id="form-message"
                size="small"
                fullWidth
                multiline
                minRows={4}
                maxRows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}
              display="flex"
              flexDirection="row"
              justifyContent="end"
            >
              <CustomButton type="submit">
                Enviar
              </CustomButton>
            </Grid>
          </Grid>
        </Wrapper>
      </form>

    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    federationUnits: state.contact.federationUnits || [],
    districts: state.contact.districts || []
  };
}

export default connect(
  mapStateToProps, {
  fetchFederationUnits,
  fetchDistrictsByFederationUnits,
  setDistricts,
  postMessageContactUs
})(ContactUs);
