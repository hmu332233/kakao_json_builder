import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatMessage.scss';

import ChatMessageLayout from 'components/ChatMessageLayout';
import SimpleText from 'components/SimpleText';
import SimpleImage from 'components/SimpleImage';

function ChatMessage(props) {
  return (
    <ChatMessageLayout name={'테스트 봇'}>
      {/* <SimpleText text={'간단한 텍스트 요소입니다.'} /> */}
      <SimpleImage
        imageUrl={'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg'}
        altText={'보물상자입니다'}
      />
    </ChatMessageLayout>
  );
}

ChatMessage.propTypes = {
};
ChatMessage.defaultProps = {
};

export default ChatMessage;