import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatMessage.scss';

import ChatMessageLayout from 'components/ChatMessageLayout';
import SimpleText from 'components/SimpleText';
function ChatMessage(props) {
  return (
    <ChatMessageLayout name={'테스트 봇'}>
      <SimpleText text={'간단한 텍스트 요소입니다.'} />
    </ChatMessageLayout>
  );
}

ChatMessage.propTypes = {
};
ChatMessage.defaultProps = {
};

export default ChatMessage;