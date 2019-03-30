import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicCard.scss';

import Profile from 'components/Profile';
import Buttons from 'components/Buttons';

function BasicCard(props) {
  return (
    <div className={styles.BasicCard}>
      <img className={styles.BasicCard__image} src={props.thumbnail.imageUrl} />
      <div className={styles.BasicCard__body}>
        <Profile className={styles.BasicCard__body__profile} imageUrl={props.profile.imageUrl} nickname={props.profile.nickname} />
        <div className={styles.BasicCard__body__contents}>
          <h6 className={styles.BasicCard__body__contents__title}>{props.title}</h6>
          <p className={styles.BasicCard__body__contents__description}>{props.description}</p>
        </div>
        <Buttons buttons={props.buttons} />
      </div>
    </div>
  );
}

BasicCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.shape({
    imageUrl: PropTypes.string
    // 더있음
  }),
  profile: PropTypes.shape({
    imageUrl: PropTypes.string,
    nickname: PropTypes.string
  }),
  buttons: PropTypes.array
};
BasicCard.defaultProps = {
  title: '',
  description: ''
};

export default BasicCard;