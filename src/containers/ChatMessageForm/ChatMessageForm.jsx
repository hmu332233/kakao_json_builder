import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatMessageForm.scss';

import ChatTypeDropdown from 'components/ChatTypeDropdown';
import SimpleTextForm from 'containers/SimpleTextForm';
import { MESSAGE } from 'constants';
import { message } from 'utils';

class ChatMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: MESSAGE.TYPE.SIMPLE_TEXT,
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleChatTypeDropdownItemClick = this.handleChatTypeDropdownItemClick.bind(this)
  }

  handleChatTypeDropdownItemClick(value) {
    this.setState({ type: value });
  }

  handleChange(json) {
    const messageJson = message.normalizeMessageJson({ type: this.state.type, json });
    this.props.changeHandler(JSON.stringify(messageJson, null, 4));
  }

  render() {
    return (
      <div className={styles.ChatMessageForm}>
        <ChatTypeDropdown
          itemClickHandler={this.handleChatTypeDropdownItemClick}
        />
        <SimpleTextForm changeHandler={this.handleChange} />
      </div>
    );
  }
}

ChatMessageForm.propTypes = {
  changeHandler: PropTypes.func,
};
ChatMessageForm.defaultProps = {
  changeHandler: v => v
};

export default ChatMessageForm;