import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardLayout.scss';

import Profile from 'components/Profile';
import Buttons from 'components/Buttons';

function CardLayout(props) {
  return (
    <div className={styles.CardLayout}>
      <img className={styles.CardLayout__image} src={props.thumbnail.imageUrl} />
      <div className={styles.CardLayout__body}>
        <Profile className={styles.CardLayout__body__profile} imageUrl={props.profile.imageUrl} nickname={props.profile.nickname} />
        {props.children}
        <Buttons buttons={props.buttons} />
      </div>
    </div>
  );
}

CardLayout.propTypes = {
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
CardLayout.defaultProps = {
};

export default CardLayout;