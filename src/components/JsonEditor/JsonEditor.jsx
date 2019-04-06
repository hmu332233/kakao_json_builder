import React from 'react';
import PropTypes from 'prop-types';
import styles from './JsonEditor.scss';

function JsonEditor(props) {
  const value = JSON.stringify(props.value);
  return (
    <div className={styles.JsonEditor}>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={value}></textarea>
    </div>
  );
}

JsonEditor.propTypes = {
};
JsonEditor.defaultProps = {
};

export default JsonEditor;