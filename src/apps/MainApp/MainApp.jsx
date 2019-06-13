import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import { MESSAGE } from 'constants';
import { message } from 'utils';

import ChatPreview from 'components/ChatPreview';
import JsonEditor from 'components/JsonEditor';

import ChatMessageForm from 'containers/ChatMessageForm';

const defaultMessageJson = message.getDefaultMessageJson({ type: MESSAGE.TYPE.CAROUSEL });

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      editorValue: JSON.stringify(defaultMessageJson, null, 4),
      chats: message.parseMessageJson(defaultMessageJson)
    };
    this.handleChangeValue = this.handleChangeValue.bind(this)
  }

  handleChangeValue(value) {
    try {
      const parsedValue = JSON.parse(value);
      this.setState({
        isError: false,
        editorValue: value,
        chats: message.parseMessageJson(parsedValue)
      });
    } catch (e) {
      this.setState({
        isError: true,
        editorValue: value
      });
    }
  }
  render() {
    return (
      <div className={styles.MainApp}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <ChatPreview chats={this.state.chats} />
            </div>
            {/*
            <div className="col-6">
              <ChatMessageForm changeHandler={this.handleChangeValue} />
            </div>
            */}
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <JsonEditor
                changeValueHandler={this.handleChangeValue}
                value={this.state.editorValue}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MainApp.propTypes = {
};
MainApp.defaultProps = {
};

export default MainApp;