import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatBox.scss';

import ChatMessage from 'components/ChatMessage';
import QuickReplies from 'components/QuickReplies';

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
      <div className={styles.ChatBox__body}>
        <ChatMessage text={'간단한 텍스트 요소입니다.'} />
        <QuickReplies
          items={[
            {
              label: '가',
              action: 'message',
              messageText: '가'
            },
            {
              label: '나',
              action: 'message',
              messageText: '다'
            },
            {
              label: '다',
              action: 'message',
              messageText: '다'
            }
          ]} 
        />
      </div>
    </div>
  );
}

ChatBox.propTypes = {
};
ChatBox.defaultProps = {
};

export default ChatBox;