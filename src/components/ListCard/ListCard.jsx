import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListCard.scss';

import CardLayout from 'components/CardLayout';
import ListItem from 'components/ListItem';

function ListCard(props) {
  return (
    <CardLayout
      header={props.header}
      buttons={props.buttons}
    >
      {props.items.map((item, index) => (
        <ListItem
          key={index}
          className={styles.ListCard__item}
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
        />
      ))}
    </CardLayout>
  );
}

ListCard.propTypes = {
  ...CardLayout.propTypes,
};
ListCard.defaultProps = {
};

export default ListCard;