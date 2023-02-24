import React from "react";
import { connect } from 'react-redux';
import {
  H6,
  Img,
  Paragraph,
  PrimarySession,
  PrimarySessionTitle,
  SecondarySession,
  SecondarySessionParagraph,
  SessionSubTitle,
  SessionSubTitleHigh,
  SessionTitle,
  Title,
  Wrapper,
} from './styles'
import { Container } from "@mui/system";
import { Avatar, Grid, Stack } from "@mui/material";
import Local from '../../assets/local.png'
import LocalMobile from '../../assets/local_mobile.png'
import BannerSobre from '../../assets/banner-sobre.png'
import BannerSobreResponsivo from '../../assets/banner-sobre-responsivo.png'
import Icon1 from '../../assets/icons/number1.png'
import Icon2 from '../../assets/icons/number2.png'
import Icon3 from '../../assets/icons/number3.png'
import Icon4 from '../../assets/icons/number4.png'
import Icon5 from '../../assets/icons/number5.png'
import Pig from '../../assets/icons/pig.png'
import House from '../../assets/icons/house.png'
import Food from '../../assets/icons/food.png'
import People from '../../assets/icons/people.png'
import Bandeira from '../../assets/icons/bandeira.png'
import facebook from './../../assets/social/face.png'
import instagram from './../../assets/social/insta.png'
import youtube from './../../assets/social/youtube.png'
import linkedin from './../../assets/social/linkedin.png'

const About = (props) => {
  const { isMobile } = props
  return (
    <Wrapper>
      <SessionTitle>Nosso Manifesto</SessionTitle>
      <SessionSubTitle>Comer no giraffas é muito mais do que matar a fome!</SessionSubTitle>
      <Container maxWidth="lg" sx={{
        padding: "1rem 3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <iframe
          width="100%"
          height={!isMobile ? "580" : "280"}
          src="https://www.youtube.com/embed/Tgd1jdlxzEs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </Container>

      <SessionTitle>Nosso Propósito</SessionTitle>
      <SessionSubTitleHigh>Nossa paixão cria sabores<br /> e momentos de alegria<br /><strong>para todos</strong></SessionSubTitleHigh>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ padding: isMobile ? "2rem 2rem 0 2rem" : "3rem 3rem 0 3rem" }}>
          <Grid item xs={12} md={2}>
            <Title>Nossa</Title>
            <Paragraph>Acreditamos no poder do coletivo. No valor
              de sonhar junto e realizar junto, em família.
              Só assim podemos ir mais longe.</Paragraph>
          </Grid>
          <Grid item xs={12} md={2}>
            <Title>Paixão</Title>
            <Paragraph>Giraffas é fruto da nossa dedicação máxima
              para entregar sempre o melhor.<br /><br />Esse é o nosso motor criativo,
              que nasceu da paixão do nosso fundador e contagia a todos, dentro e fora da empresa.</Paragraph>
          </Grid>
          <Grid item xs={12} md={2}>
            <Title>Cria</Title>
            <Paragraph>Não nos contentamos com o básico.
              Por isso inventamos, testamos, transformamos, ressignificamos tudo que produzimos.</Paragraph>
          </Grid>
          <Grid item xs={12} md={2}>
            <Title>Sabores</Title>
            <Paragraph>Fazer o alimento gostoso é o coração do nosso negócio. É a nossa forma de existir no mundo.<br /><br />
              O sabor é nosso
              veículo para levar a mensagem
              de mais carinho para os brasileiros.</Paragraph>
          </Grid>
          <Grid item xs={12} md={2}>
            <Title>Momentos de Alegria</Title>
            <Paragraph>Queremos alimentar não só o corpo, mas também a alma.<br /><br />
              Por isso, buscamos inspirar mais leveza no mundo e despertar mais  sorrisos em tudo que fazemos.</Paragraph>
          </Grid>
          <Grid item xs={12} md={2}>
            <Title>Para todos</Title>
            <Paragraph>Queremos
              compartilhar tudo isso com mais e mais pessoas.
              Para a alma demográfica de Giraffas, só faz sentido se esse sabor e alegria puderem abraçar a todos.</Paragraph>
          </Grid>
        </Grid>
      </Container>

      <Img src={Local} style={{ padding: "2rem 0" }} width="100%" alt="titulo session" />
      <Container maxWidth="lg">
        {isMobile ? <Img src={BannerSobreResponsivo} width="100%" alt="titulo session" /> :
          <Img src={BannerSobre} width="100%" alt="titulo session" />}
      </Container>
      <SessionTitle>Nossos Talentos</SessionTitle>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ padding: isMobile ? "2rem 2rem 0 2rem" : "3rem 3rem 0 3rem", height: "350px" }}>
          <Grid item xs={12} md={4}>
            <PrimarySession>
              <Img src={Icon1} width="60px" alt="titulo session" />
              <PrimarySessionTitle>Trazemos o prato gostoso que cabe no bolso</PrimarySessionTitle>
            </PrimarySession>
            <SecondarySession>
              <Img src={Pig} width="60px" alt="titulo session" />
              <SecondarySessionParagraph>O Giraffas alcança muitas pessoas: pratos e preços atendem a todos.
                Ele dá acesso a uma boa comida com sabor, qualidade e preços acessíveis.</SecondarySessionParagraph>
            </SecondarySession>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "end" }}>
            <PrimarySession>
              <Img src={Icon2} width="60px" alt="titulo session" />
              <PrimarySessionTitle>Entregamos a casa fora de casa </PrimarySessionTitle>
            </PrimarySession>
            <SecondarySession>
              <Img src={House} width="60px" alt="titulo session" />
              <SecondarySessionParagraph>O espírito de proximidade e família no Giraffas permeia todas as relações: entre as lideranças, franqueados, colaboradores e clientes.
                Esse sentimento nasce na gestão e transborda para os pratos. Giraffas traz o aconchego da comida bem feita, como a feita em casa.</SecondarySessionParagraph>
            </SecondarySession>
          </Grid>
          <Grid item xs={12} md={4}>
            <PrimarySession>
              <Img src={Icon3} width="60px" alt="titulo session" />
              <PrimarySessionTitle>Alimentamos a paixão por comer bem</PrimarySessionTitle>
            </PrimarySession>
            <SecondarySession>
              <Img src={Food} width="60px" alt="titulo session" />
              <SecondarySessionParagraph>Foi o coração do empreendedor que concebeu a empresa e trouxe-a até aqui. Foi com o coração que muitos outros se juntaram à jornada da marca.
                Mas não é um coração que bate desordenado, ao contrário, ele é um coração apaixonado pela qualidade.</SecondarySessionParagraph>
            </SecondarySession>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: isMobile ? "0 2rem" : "0 3rem" }}>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={5}>
            <PrimarySession>
              <Img src={Icon4} width="60px" alt="titulo session" />
              <PrimarySessionTitle>Inspiramos o lado divertido de cada um</PrimarySessionTitle>
            </PrimarySession>
            <SecondarySession>
              <Img src={People} width="60px" alt="titulo session" />
              <SecondarySessionParagraph>Somos o espaço de ludicidade, diversão, alegria e celebração dos bons momentos.
                E somos assim porque temos liberdade para criar.</SecondarySessionParagraph>
            </SecondarySession>
          </Grid>
          <Grid item xs={12} md={5}>
            <PrimarySession>
              <Img src={Icon5} width="60px" alt="titulo session" />
              <PrimarySessionTitle>Carregamos o plural do nosso brasil</PrimarySessionTitle>
            </PrimarySession>
            <SecondarySession>
              <Img src={Bandeira} width="60px" alt="titulo session" />
              <SecondarySessionParagraph>Com seus sabores e ingredientes únicos. O Giraffas se destaca de um jeito muito autêntico.
                Seu cardápio variado, traz influências da culinária brasileira e de outras partes do mundo.
                Do prato ao sanduíche passando por sobremesas deliciosas.</SecondarySessionParagraph>
            </SecondarySession>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
        </Grid>
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
})(About);
