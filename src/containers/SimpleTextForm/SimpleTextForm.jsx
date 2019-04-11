import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SimpleTextForm.scss';

import { FormGroup, Label, Input } from 'reactstrap';

import { MESSAGE } from 'constants';

import useInputText from 'hooks/useInputText';

function SimpleTextForm(props) {
  const { text } = MESSAGE.DEFAULT_DATA[MESSAGE.TYPE.SIMPLE_TEXT];
  const [textValue, textValueChangeHandler] = useInputText(text);

  useEffect(() => {
    props.changeHandler({
      text: textValue
    });
  }, [textValue]);

  return (
    <div className={styles.SimpleTextForm}>
      <FormGroup>
        <Label for="SimpleTextForm__text">text</Label>
        <Input type="text" id="SimpleTextForm__text" placeholder="text.." value={textValue} onChange={textValueChangeHandler} />
      </FormGroup>
    </div>
  );
}

SimpleTextForm.propTypes = {
  changeHandler: PropTypes.func,
};
SimpleTextForm.defaultProps = {
  changeHandler: v => v
};

export default SimpleTextForm;