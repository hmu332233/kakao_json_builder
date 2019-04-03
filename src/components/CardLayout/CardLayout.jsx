import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardLayout.scss';

import CardHeader from 'components/CardHeader';
import Profile from 'components/Profile';
import Buttons from 'components/Buttons';

function CardLayout(props) {
  return (
    <div className={styles.CardLayout}>
      {props.header && <CardHeader title={props.header.title} imageUrl={props.header.imageUrl} /> }
      {props.thumbnail && <img className={styles.CardLayout__image} src={props.thumbnail.imageUrl} />}
      <div className={styles.CardLayout__body}>
        {props.profile && <Profile className={styles.CardLayout__body__profile} imageUrl={props.profile.imageUrl} nickname={props.profile.nickname} />}
        {props.children}
        <Buttons className={styles.CardLayout__body__buttons} buttons={props.buttons} />
      </div>
    </div>
  );
}

CardLayout.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string
  }),
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