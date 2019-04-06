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
    this.state = {
      type: MESSAGE.TYPE.SIMPLE_TEXT,
      messageJson: message.getDefaultMessageJson({ type: MESSAGE.TYPE.SIMPLE_TEXT })
    };
  }
  render() {
    return (
      <div className={styles.MainApp}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ChatPreview chats={message.parseMessageJson(this.state.messageJson)} />
            </div>
            <div className="col-6">
              <JsonEditor value={this.state.messageJson} />
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