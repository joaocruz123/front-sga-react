import React from "react";
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';

const InputMaskPhone = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, mask, value, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask={value.length <= 14 ? "(00) 0000-0000" : "(00) 00000-0000"}
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});


InputMaskPhone.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputMaskPhone;
