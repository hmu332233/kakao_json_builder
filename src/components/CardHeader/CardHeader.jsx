import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardHeader.scss';

function CardHeader(props) {
  const style = { backgroundImage: `url(${props.imageUrl})` };
  return (
    <div className={styles.CardHeader} style={style}>
      <div className={styles.CardHeader__titleWrapper}>
        <h6 className={styles.CardHeader__title}>{props.title}</h6>
      </div>
    </div>
  );
}

CardHeader.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string
};
CardHeader.defaultProps = {
  title: '',
  imageUrl: ''
};

export default CardHeader;