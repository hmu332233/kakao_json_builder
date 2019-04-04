import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.scss';

import { MESSAGE } from 'constants';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import BasicCard from 'components/BasicCard';
import CommerceCard from 'components/CommerceCard';


function Carousel(props) {
  const Item = props.cardType === MESSAGE.TYPE.BASIC_CARD ? BasicCard : CommerceCard;

  const data = props.items.map((item, index) => (
    <Item
      key={index}
      className={styles.Carousel__item}
      {...item}
    />
  ));
  return (
    <div className={styles.Carousel}>
      <ScrollMenu
        data={data}
        transition={0}
        alignCenter={false}
      />
      
    </div>
  );
}

Carousel.propTypes = {
  cardType: PropTypes.oneOf([MESSAGE.TYPE.BASIC_CARD, MESSAGE.TYPE.COMMERCE_CARD]),
  items: PropTypes.array,
};
Carousel.defaultProps = {
  cardType: MESSAGE.TYPE.BASIC_CARD,
  items: []
};

export default Carousel;