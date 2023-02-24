import React from "react";
import { connect } from 'react-redux';
import { Wrapper } from './styles'
import { affiliateSendForm } from '././../../redux/actions/auth'

const scalink_variable_surl = 'https://forms.scalink.com.br/app/render.html';
const scalink_variable_frmtoken = '04ECA5B61281550B71BC8A5AA4BB6B02BECED748CFFC5A27BC9A076C915DB476';
const scalink_variable_parameters = window.location.search.replace('?', '&');

const AffiliateForm = (props) => {
  return (
    <Wrapper>
      <object style={{ height: "100%", width: "100%" }} data={`${scalink_variable_surl}?token=${scalink_variable_frmtoken}${scalink_variable_parameters}`} />
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(
  mapStateToProps, {
  affiliateSendForm
})(AffiliateForm);
