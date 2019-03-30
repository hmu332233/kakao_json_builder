import React from 'react';
import PropTypes from 'prop-types';
import styles from './SimpleText.scss';

function SimpleText(props) {
  return (
    <div className={styles.SimpleText}>
      <div className={styles.SimpleText__body}>{props.text}</div>
      <div className={styles.SimpleText__arrow}></div>
    </div>
  );
}

SimpleText.propTypes = {
  text: PropTypes.string,
};
SimpleText.defaultProps = {
  text: ''
};

export default SimpleText;