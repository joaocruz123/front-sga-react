import React from "react";
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';

const InputMaskCPF = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, mask, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000.000.000-00"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});


InputMaskCPF.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputMaskCPF;
