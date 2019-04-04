import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatMessage.scss';

import { MESSAGE } from 'constants';

import ChatMessageLayout from 'components/ChatMessageLayout';
import SimpleText from 'components/SimpleText';
import SimpleImage from 'components/SimpleImage';
import BasicCard from 'components/BasicCard';
import CommerceCard from 'components/CommerceCard';
import ListCard from 'components/ListCard';
import Carousel from 'components/Carousel';

function ChatMessage({ type, ...props }) {
  let MessageComponent;
  switch (type) {
    case MESSAGE.TYPE.SIMPLE_TEXT:
      MessageComponent = SimpleText;
    break;
    case MESSAGE.TYPE.SIMPLE_IMAGE:
      MessageComponent = SimpleImage;
    break;
    case MESSAGE.TYPE.BASIC_CARD:
      MessageComponent = BasicCard;
    break;
    case MESSAGE.TYPE.COMMERCE_CARD:
      MessageComponent = CommerceCard;
    break;
    case MESSAGE.TYPE.LIST_CARD:
      MessageComponent = ListCard;
    break;
    case MESSAGE.TYPE.CAROUSEL:
      MessageComponent = Carousel;
    break;
  }
  return (
    <ChatMessageLayout name={'테스트 봇'}>
      <MessageComponent {...props} />
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
      {/*<CommerceCard
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
      />*/}
      {/*<ListCard
        header={{
          title: '카카오 i 디벨로퍼스를 소개합니다',
          imageUrl:
            'http://k.kakaocdn.net/dn/xsBdT/btqqIzbK4Hc/F39JI8XNVDMP9jPvoVdxl1/2x1.jpg'
        }}
        items={[
          {
            title: 'Kakao i Developers',
            description: '새로운 AI의 내일과 일상의 변화',
            imageUrl:
              'http://k.kakaocdn.net/dn/APR96/btqqH7zLanY/kD5mIPX7TdD2NAxgP29cC0/1x1.jpg',
            link: {
              web:
                'https://namu.wiki/w/%EB%9D%BC%EC%9D%B4%EC%96%B8(%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88)'
            }
          },
          {
            title: 'Kakao i Open Builder',
            description: '플러스친구 챗봇 만들기',
            imageUrl:
              'http://k.kakaocdn.net/dn/N4Epz/btqqHCfF5II/a3kMRckYml1NLPEo7nqTmK/1x1.jpg',
            link: {
              web:
                'https://namu.wiki/w/%EB%AC%B4%EC%A7%80(%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88)'
            }
          },
          {
            title: 'Kakao i Voice Service',
            description: '보이스봇 / KVS 제휴 신청하기',
            imageUrl:
              'http://k.kakaocdn.net/dn/bE8AKO/btqqFHI6vDQ/mWZGNbLIOlTv3oVF1gzXKK/1x1.jpg',
            link: {
              web: 'https://namu.wiki/w/%EC%96%B4%ED%94%BC%EC%B9%98'
            }
          }
        ]}
        buttons={[
          {
            label: '구경가기',
            action: 'webLink',
            webLinkUrl:
              'https://namu.wiki/w/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88'
          }
        ]}
      />*/}
      {/*
      <Carousel
        type={Carousel.TYPE.BASIC_CARD}
        items={[
          {
            title: '보물상자',
            description: '보물상자 안에는 뭐가 있을까',
            thumbnail: {
              imageUrl:
                'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg'
            },
            buttons: [
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
            ]
          },
          {
            title: '보물상자2',
            description: '보물상자2 안에는 뭐가 있을까',
            thumbnail: {
              imageUrl:
                'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg'
            },
            buttons: [
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
            ]
          },
          {
            title: '보물상자3',
            description: '보물상자3 안에는 뭐가 있을까',
            thumbnail: {
              imageUrl:
                'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg'
            },
            buttons: [
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
            ]
          }
        ]}
      />*/}
      {/*<Carousel type={Carousel.TYPE.COMMERCE_CARD} />*/}
    </ChatMessageLayout>
  );
}

ChatMessage.propTypes = {
  type: PropTypes.string,
};
ChatMessage.defaultProps = {
  type: MESSAGE.TYPE.SIMPLE_TEXT
};

export default ChatMessage;
