import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatMessageLayout.scss';

import ProfileIcon from 'components/ProfileIcon';

function ChatMessageLayout(props) {
  return (
    <div className={styles.ChatMessageLayout}>
      <ProfileIcon className={styles.ChatMessageLayout__profile} />
      <div className={styles.ChatMessageLayout__body}>
        <div className={styles.ChatMessageLayout__body__name}>{props.name}</div>
        {props.children}
      </div>
    </div>
  );
}

ChatMessageLayout.propTypes = {
  name: PropTypes.string,
};
ChatMessageLayout.defaultProps = {
  name: ''
};

export default ChatMessageLayout;