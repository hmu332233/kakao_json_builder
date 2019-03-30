import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatBox.scss';

function ChatBoxHeader(props) {
  return (
    <div className={styles.ChatBoxHeader}>
      <div className={styles.ChatBoxHeader__title}>{props.title}</div>
    </div>
  );
}

function ChatBox(props) {
  return (
    <div className={styles.ChatBox}>
      <ChatBoxHeader title={'카카오 테스트봇'} />
      <div className={styles.ChatBox__body}></div>
    </div>
  );
}

ChatBox.propTypes = {
};
ChatBox.defaultProps = {
};

export default ChatBox;