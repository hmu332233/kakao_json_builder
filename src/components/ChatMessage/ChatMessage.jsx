import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatMessage.scss';

import ChatMessageLayout from 'components/ChatMessageLayout';
import SimpleText from 'components/SimpleText';
import SimpleImage from 'components/SimpleImage';
import BasicCard from 'components/BasicCard';
import CommerceCard from 'components/CommerceCard';

function ChatMessage(props) {
  return (
    <ChatMessageLayout name={'테스트 봇'}>
      {/*<SimpleText text={'간단한 텍스트 요소입니다.'} />
      <SimpleImage
        imageUrl={'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg'}
        altText={'보물상자입니다'}
      />*/}
      {/*<BasicCard
        title={'보물상자'}
        description={'보물상자 안에는 뭐가 있을까?'}
        thumbnail={{ imageUrl: 'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg' }}
        profile={{ imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM', nickname: '보물상자' }}
        buttons={[
          {
            action: 'message',
            label: '열어보기',
            messageText: '짜잔! 우리가 찾던 보물입니다'
          },
          {
            action: 'webLink',
            label: '구경하기',
            webLinkUrl: 'https://e.kakao.com/t/hello-ryan'
          }
        ]}
      />*/}
      <CommerceCard
        description={'따끈따끈한 보물 상자 팝니다'}
        price={10000}
        discount={1000}
        currency={'won'}
        thumbnail={{
          imageUrl:
            'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg'
        }}
        profile={{
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM',
          nickname: '보물상자 팝니다'
        }}
        buttons={[
          {
            label: '구매하기',
            action: 'webLink',
            webLinkUrl: 'https://store.kakaofriends.com/kr/products/1542'
          },
          {
            label: '전화하기',
            action: 'phone',
            phoneNumber: '354-86-00070'
          },
          {
            label: '공유하기',
            action: 'share'
          }
        ]}
      />
    </ChatMessageLayout>
  );
}

ChatMessage.propTypes = {};
ChatMessage.defaultProps = {};

export default ChatMessage;
