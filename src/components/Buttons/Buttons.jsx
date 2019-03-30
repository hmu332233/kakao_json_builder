import React from 'react';
import PropTypes from 'prop-types';
import styles from './Buttons.scss';

import classnames from 'classnames';

function Button(props) {
  return (
    <button className={styles.Button}>{props.children}</button>
  );
}

function Buttons(props) {
  const buttons = props.buttons.map((button, index) => <Button key={index}>{button.label}</Button>)
  return (
    <div className={classnames(styles.Buttons, props.className)}>
      {buttons}
    </div>
  );
}

Buttons.propTypes = {
  className: PropTypes.string,
  buttons: PropTypes.array,
};
Buttons.defaultProps = {
  className: '',
  buttons: []
};

export default Buttons;