import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuickReplies.scss';

import ScrollMenu from 'react-horizontal-scrolling-menu';
import classnames from 'classnames';

function MessageBox(props) {
  return (
    <div className={classnames(styles.MessageBox, props.className)}>{props.label}</div>
  );
}

function QuickReplies(props) {
  const data = props.items.map(item => <MessageBox className={styles.QuickReplies__item} label={item.label} />);
  return (
    <div className={styles.QuickReplies}>
      <ScrollMenu
        data={data}
        transition={0}
        alignCenter={false}
      />
    </div>
  );
}

QuickReplies.propTypes = {
};
QuickReplies.defaultProps = {
};

export default QuickReplies;