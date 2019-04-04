import React from 'react';
import PropTypes from 'prop-types';
import styles from './CommerceCard.scss';

import CardLayout from 'components/CardLayout';

function CommerceCard(props) {
  const currencyText = '원';
  const salePrice = props.price - props.discount;
  const priceText = `${salePrice}${currencyText}`;
  const discountText = `${props.discount}${currencyText} 할인`;
  return (
    <CardLayout
      className={props.className}
      thumbnail={props.thumbnail}
      profile={props.profile}
      buttons={props.buttons}
    >
      <div className={styles.CommerceCard__contents}>
        <div className={styles.CommerceCard__contents__priceRow}>
          <span className={styles.CommerceCard__contents__priceRow__price}>{priceText}</span>
          <span className={styles.CommerceCard__contents__priceRow__discount}>{props.discount}</span>
        </div>
        <div className={styles.CommerceCard__contents__discount}>{discountText}</div>
        <p className={styles.CommerceCard__contents__description}>{props.description}</p>
      </div>
    </CardLayout>
  );
}

CommerceCard.propTypes = {
  ...CardLayout.propTypes,
  description: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
};
CommerceCard.defaultProps = {
  description: '',
  price: 0,
  discount: 0
};

export default CommerceCard;