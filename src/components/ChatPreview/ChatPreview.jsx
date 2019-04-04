import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatPreview.scss';

import ChatBox from 'components/ChatBox';

function ChatPreview(props) {
  return (
    <div className={styles.ChatPreview}>
      <ChatBox chats={props.chats} />
    </div>
  );
}

ChatPreview.propTypes = {
};
ChatPreview.defaultProps = {
};

export default ChatPreview;