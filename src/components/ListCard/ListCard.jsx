import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListCard.scss';

import CardLayout from 'components/CardLayout';

function ListCard(props) {
  return (
    <CardLayout
      header={props.header}
      buttons={props.buttons}
    >
      aaa
    </CardLayout>
  );
}

ListCard.propTypes = {
  ...CardLayout.propTypes,
};
ListCard.defaultProps = {
};

export default ListCard;