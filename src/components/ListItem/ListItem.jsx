import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.scss';

import classnames from 'classnames';

function ListItem(props) {
  return (
    <div className={classnames(styles.ListItem, props.className)}>
      <div className={styles.ListItem__box}>
        <h6 className={styles.ListItem__box__title}>{props.title}</h6>
        <p className={styles.ListItem__box__description}>{props.description}</p>
      </div>
      <img className={styles.ListItem__image} src={props.imageUrl} alt={'list item th'}/>
    </div>
  );
}

ListItem.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
ListItem.defaultProps = {
  className: '',
  imageUrl: '',
  title: '',
  description: ''
};

export default ListItem;