import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.scss';

import ScrollMenu from 'react-horizontal-scrolling-menu';

import BasicCard from 'components/BasicCard';
import CommerceCard from 'components/CommerceCard';

const TYPE = {
  BASIC_CARD: 'basicCard',
  COMMERCE_CARD: 'commerceCard'
};

function Carousel(props) {
  const Item = props.type === TYPE.BASIC_CARD ? BasicCard : CommerceCard;

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

Carousel.TYPE = TYPE;
Carousel.propTypes = {
  type: PropTypes.oneOf([TYPE.BASIC_CARD, TYPE.COMMERCE_CARD]),
  items: PropTypes.array,
};
Carousel.defaultProps = {
  type: TYPE.BASIC_CARD,
  items: []
};

export default Carousel;