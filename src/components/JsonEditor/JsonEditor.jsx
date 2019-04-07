import React from 'react';
import PropTypes from 'prop-types';
import styles from './JsonEditor.scss';

function JsonEditor(props) {
  return (
    <div className={styles.JsonEditor}>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={props.value} onChange={props.changeValueHandler}></textarea>
    </div>
  );
}

JsonEditor.propTypes = {
  value: PropTypes.object,
  changeValueHandler: PropTypes.func
};
JsonEditor.defaultProps = {
  value: '',
  changeValueHandler: v => v
};

export default JsonEditor;