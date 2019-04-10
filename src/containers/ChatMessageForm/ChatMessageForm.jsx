import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatMessageForm.scss';

import ChatTypeDropdown from 'components/ChatTypeDropdown';

class ChatMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={styles.ChatMessageForm}>
        <ChatTypeDropdown />
      </div>
    );
  }
}

ChatMessageForm.propTypes = {
};
ChatMessageForm.defaultProps = {
};

export default ChatMessageForm;