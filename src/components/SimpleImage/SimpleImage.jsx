import React from 'react';
import PropTypes from 'prop-types';
import styles from './SimpleImage.scss';

function SimpleImage(props) {
  return (
    <img className={styles.SimpleImage} src={props.imageUrl} alt={props.altText} />
  );
}

SimpleImage.propTypes = {
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
};
SimpleImage.defaultProps = {
  imageUrl: '',
  altText: ''
};

export default SimpleImage;