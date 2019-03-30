import React from 'react';
import PropTypes from 'prop-types';
import styles from './Buttons.scss';

function Button(props) {
  return (
    <button className={styles.Button}>{props.children}</button>
  );
}

function Buttons(props) {
  const buttons = props.buttons.map((button, index) => <Button key={index}>{button.label}</Button>)
  return (
    <div className={styles.Buttons}>
      {buttons}
    </div>
  );
}

Buttons.propTypes = {
  buttons: PropTypes.array,
};
Buttons.defaultProps = {
  buttons: []
};

export default Buttons;