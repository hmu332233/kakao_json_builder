import React from 'react';
import PropTypes from 'prop-types';
import styles from './JsonEditor.scss';

function JsonEditor(props) {
  const handleTextareaChange = e => {
    const value = e.currentTarget.value;
    props.changeValueHandler(value);
  };
  return (
    <div className={styles.JsonEditor}>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={props.value} onChange={handleTextareaChange}></textarea>
    </div>
  );
}

JsonEditor.propTypes = {
  value: PropTypes.string,
  changeValueHandler: PropTypes.func
};
JsonEditor.defaultProps = {
  value: '',
  changeValueHandler: v => v
};

export default JsonEditor;