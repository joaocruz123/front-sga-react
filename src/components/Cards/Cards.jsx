import { Container, Grid } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux';

function Cards(props) {
    const { feed } = props;

    const openRoute = (index) => {
        if (index === 0) {
            window.open(`https://giraffasdelivery.voceqpad.com.br/`);
        } else if (index === 1) {
            window.location.href = `${window.location.href}promocoes`;
        } else if (index === 2) {
            window.location.href = `${window.location.href}cardapio`;
        }

    }

    return (
        <Container component="main" sx={{ pt: 4, pb: 4 }}>
            <Grid container spacing={2}>
                {feed && feed.map((item, index) => {
                    const key = `card-image-${index}`

                    return <Grid item xs={12} md={4} key={key}>
                        <img style={{ cursor: "pointer" }} key={key} src={item.image} onClick={() => openRoute(index)} width="100%" alt="Imagem do card" />
                    </Grid>
                })}

            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        feed: state.ui.feed
    };
}

export default connect(
    mapStateToProps, {
})(Cards);
