import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';
import { connect } from "react-redux";

const WrapperBackground = styled.div`
	background-color: ${props => props.theme.colors.white};
    height: 100%;
`

const EvaluationPage = () => {
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <WrapperBackground>
                    <div style={{ margin: "0", width: "100%", height: "100vh", backgroundColor: "#eb610c" }}>
                        <div style={{ height: "100%" }}>
                            <iframe title="iframe" allow="camera" src="https://avaliacoes-fidelidade.somosdx.co/qrcode?marketplaceId=47" frameborder="0" height="100%" width="100%" />
                        </div>
                    </div>
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
})(EvaluationPage);
