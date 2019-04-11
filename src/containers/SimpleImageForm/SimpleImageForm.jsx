import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SimpleImageForm.scss';

import { FormGroup, Label, Input } from 'reactstrap';

import { MESSAGE } from 'constants';

import useInputText from 'hooks/useInputText';

function SimpleImageForm(props) {
  const { imageUrl, altText } = MESSAGE.DEFAULT_DATA[MESSAGE.TYPE.SIMPLE_IMAGE];
  const [imageUrlValue, imageUrlValueChangeHandler] = useInputText(imageUrl);
  const [altTextValue, altTextValueChangeHandler] = useInputText(altText);

  useEffect(() => {
    props.changeHandler({
      imageUrl: imageUrlValue,
      altText: altTextValue
    });
  }, [imageUrlValue, altTextValue]);

  return (
    <div className={styles.SimpleImageForm}>
      <FormGroup>
        <Label for="SimpleImageForm__image">image</Label>
        <Input type="text" id="SimpleImageForm__image" value={imageUrlValue} onChange={imageUrlValueChangeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="SimpleImageForm__altText">altText</Label>
        <Input type="text" id="SimpleImageForm__altText" value={altTextValue} onChange={altTextValueChangeHandler} />
      </FormGroup>
    </div>
  );
}

SimpleImageForm.propTypes = {
};
SimpleImageForm.defaultProps = {
};

export default SimpleImageForm;