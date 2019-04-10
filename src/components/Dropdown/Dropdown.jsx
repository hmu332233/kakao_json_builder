import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.scss';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import useToggle from 'hooks/useToggle';
import useDropdown from 'hooks/useDropdown';

function CustomDropdown(props) {
  const [selectedIndex, selectedItem, handler] = useDropdown(props.items);
  const [isOpen, toggle] = useToggle(false);

  const handleItemClick = useCallback(e => {
    const value = e.currentTarget.value;
    handler(value);
    props.itemClickHandler(value);
  }, []);

  return (
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle
        className={props.className}
        caret
      >
        {selectedItem.label}
      </DropdownToggle>
      <DropdownMenu>
        {props.items.map(item => (
          <DropdownItem key={item.value} value={item.value} onClick={handleItemClick}>{item.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

CustomDropdown.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  itemClickHandler: PropTypes.func,
};
CustomDropdown.defaultProps = {
  className: '',
  items: [],
  itemClickHandler: v => v
};

export default CustomDropdown;
