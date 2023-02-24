import React from "react";
import { connect } from 'react-redux';
import {
  CustomButton,
  H6,
  Wrapper,
} from './styles'
import { Avatar, Container, Stack } from "@mui/material";
import facebook from './../../assets/social/face.png'
import instagram from './../../assets/social/insta.png'
import youtube from './../../assets/social/youtube.png'
import linkedin from './../../assets/social/linkedin.png'

const WorkWithUs = (props) => {
  const { isMobile } = props
  return (
    <Wrapper>
      <Container maxWidth="lg" sx={{
        padding: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <iframe
          width="100%"
          height={!isMobile ? "580" : "280"}
          src="https://www.youtube.com/embed/o9M8D3sqpKY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
        {!isMobile && <CustomButton onClick={() => {
          window.open(`https://giraffas.extranet.com.br/curriculos_externos/cadastro_curriculo.php`)
        }}>
          Quero fazer parte do time!
        </CustomButton>}
      </Container>
      <Container disableGutters component="main" sx={{ pt: 4, pb: 4 }}>
        <H6>Siga nossas redes!</H6>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={-2}>
          <a href='https://www.facebook.com/redegiraffas' target="_blank" rel="noreferrer">
            <Avatar alt="Facebook" src={facebook} sx={{ width: 80, height: 80 }} />
          </a>
          <a href='https://www.instagram.com/redegiraffas' target="_blank" rel="noreferrer">
            <Avatar alt="Instagram" src={instagram} sx={{ width: 80, height: 80 }} />
          </a>
          <a href='https://www.youtube.com/channel/UCKWWKktqqDirIHEhNdRfp3A' target="_blank" rel="noreferrer">
            <Avatar alt="Youtube" src={youtube} sx={{ width: 80, height: 80 }} />
          </a>
          <a href='https://www.linkedin.com/company/giraffas/?originalSubdomain=br' target="_blank" rel="noreferrer">
            <Avatar alt="Linkedin" src={linkedin} sx={{ width: 80, height: 80 }} />
          </a>
        </Stack>
      </Container>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(
  mapStateToProps, {
})(WorkWithUs);
