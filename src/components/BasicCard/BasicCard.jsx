import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicCard.scss';

import CardLayout from 'components/CardLayout';

function BasicCard(props) {
  return (
    <CardLayout
      thumbnail={props.thumbnail}
      profile={props.profile}
      buttons={props.buttons}
    >
      <div className={styles.BasicCard__contents}>
        <h6 className={styles.BasicCard__contents__title}>{props.title}</h6>
        <p className={styles.BasicCard__contents__description}>{props.description}</p>
      </div>
    </CardLayout>
  );
}

BasicCard.propTypes = {
  ...CardLayout.propTypes,
  title: PropTypes.string,
  description: PropTypes.string
};
BasicCard.defaultProps = {
  title: '',
  description: ''
};

export default BasicCard;