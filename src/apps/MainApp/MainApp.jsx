import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import { MESSAGE } from 'constants';
import { message } from 'utils';

import ChatPreview from 'components/ChatPreview';
import JsonEditor from 'components/JsonEditor';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    const defaultMessageJson = message.getDefaultMessageJson({ type: MESSAGE.TYPE.CAROUSEL });
    this.state = {
      isError: false,
      type: MESSAGE.TYPE.CAROUSEL,
      editorValue: JSON.stringify(defaultMessageJson, null, 4),
      chats: message.parseMessageJson(defaultMessageJson)
    };

    this.handleChangeEditorValue = this.handleChangeEditorValue.bind(this)
  }

  handleChangeEditorValue(e) {
    const { value } = e.currentTarget;
    this.setState({ editorValue: value });

    try {
      const parsedValue = JSON.parse(value);
      this.setState({ chats: message.parseMessageJson(parsedValue) });
    } catch (e) {
      this.setState({ isError: true });
    }
  }
  render() {
    return (
      <div className={styles.MainApp}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ChatPreview chats={this.state.chats} />
            </div>
            <div className="col-6">
              <JsonEditor
                changeValueHandler={this.handleChangeEditorValue}
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