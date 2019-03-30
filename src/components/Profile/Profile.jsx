import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.scss';

import classnames from 'classnames';

function Profile(props) {
  return (
    <div className={classnames(styles.Profile, props.className)}>
      <img className={styles.Profile__image} src={props.imageUrl} />
      <span className={styles.Profile__name}>{props.nickname}</span>
    </div>
  );
}

Profile.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  nickname: PropTypes.string,
};
Profile.defaultProps = {
  className: '',
  imageUrl: '',
  nickname: ''
};

export default Profile;