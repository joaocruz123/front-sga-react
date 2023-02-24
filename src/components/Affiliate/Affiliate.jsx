import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import React, { useState } from "react";
import { connect } from 'react-redux';
import TitleSessionForm from './../../assets/sessions/session1_title.png'
import ButtonSessionForm from './../../assets/sessions/session1_button.png'
import TitleSession2Form from './../../assets/sessions/session2_title.png'
import TimelineSession2Form from './../../assets/sessions/session2_timeline.png'
import DoceSession3 from './../../assets/sessions/session3_doce.png'
import PratoSession3 from './../../assets/sessions/session3_prato.png'
import {
  Img,
  SessionForm,
  Wrapper,
  CustomButton,
  SessionAbout,
  SessionPrato,
} from './styles'
import AffiliateForm from "../AffiliateForm/AffiliateForm";

const scalink_variable_surl = 'https://forms.scalink.com.br/app/render.html';
const scalink_variable_frmtoken = '04ECA5B61281550B71BC8A5AA4BB6B02BECED748CFFC5A27BC9A076C915DB476';
const scalink_variable_parameters = window.location.search.replace('?', '&');
const Affiliate = (props) => {
  const { isMobile } = props
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <SessionForm >
        <Grid container spacing={2} alignItems="center" height={"100%"}>
          {!isMobile && <Grid item xs={4}>
          </Grid>}
          <Grid item md={4} xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Img src={TitleSessionForm} width="100%" alt="titulo session" />
            {!isMobile && <CustomButton onClick={() => handleClickOpen()}>
              <Img src={ButtonSessionForm} width="100%" alt="botão session" />
            </CustomButton>}
          </Grid>
          <Grid item md={4} xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {isMobile && <CustomButton>
              <Img src={ButtonSessionForm} width="100%" alt="botão session" />
            </CustomButton>}
          </Grid>
        </Grid>
      </SessionForm>
      <SessionAbout>
        <Grid container spacing={2} alignItems="center" height={"100%"}>
          <Grid item md={8} xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Img src={TitleSession2Form} alt="titulo session" />
            <Img src={TimelineSession2Form} alt="timeline session" />
          </Grid>
          {!isMobile && <Grid item xs={4}>
          </Grid>}
        </Grid>
      </SessionAbout>
      <SessionPrato>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}
            display="flex"
            flexDirection="column"
            alignItems="start"
          >
            <Img src={PratoSession3} alt="timeline session" />
          </Grid>
          <Grid item md={6} xs={12}
            display="flex"
            flexDirection="column"
            alignItems="end"
          >
            <Img src={DoceSession3} alt="titulo session" />
          </Grid>
        </Grid>
      </SessionPrato>

      <Dialog
        open={open}
        fullWidth={true}
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
					style: {
						height: '500px',
						borderRadius: '.75rem'
					}
				}}
      >
        <DialogTitle id="alert-dialog-title">
          Seja um franqueado
        </DialogTitle>
        <DialogContent>
          <AffiliateForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(
  mapStateToProps, {
})(Affiliate);
