import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileIcon.scss';

import classnames from 'classnames';

function ProfileIcon(props) {
  return (
    <div className={classnames(styles.ProfileIcon, props.className)}>
    </div>
  );
}

ProfileIcon.propTypes = {
  className: PropTypes.string,
};
ProfileIcon.defaultProps = {
  className: ''
};

export default ProfileIcon;