import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatTypeDropdown.scss';

import { MESSAGE } from 'constants';

import Dropdown from 'components/Dropdown';

function ChatTypeDropdown(props) {
  const items = [{
    label: MESSAGE.TYPE.SIMPLE_TEXT,
    value: MESSAGE.TYPE.SIMPLE_TEXT
  }, {
    label: MESSAGE.TYPE.SIMPLE_IMAGE,
    value: MESSAGE.TYPE.SIMPLE_IMAGE
  }, {
    label: MESSAGE.TYPE.BASIC_CARD,
    value: MESSAGE.TYPE.BASIC_CARD
  }, {
    label: MESSAGE.TYPE.COMMERCE_CARD,
    value: MESSAGE.TYPE.COMMERCE_CARD
  }, {
    label: MESSAGE.TYPE.LIST_CARD,
    value: MESSAGE.TYPE.LIST_CARD
  }, {
    label: MESSAGE.TYPE.CAROUSEL,
    value: MESSAGE.TYPE.CAROUSEL
  }];

  return (
    <Dropdown
      className={styles.ChatTypeDropdown}
      items={items}
      itemClickHandler={console.log}
    />
  );
}

ChatTypeDropdown.propTypes = {
};
ChatTypeDropdown.defaultProps = {
};

export default ChatTypeDropdown;