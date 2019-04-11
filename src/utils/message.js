import { MESSAGE } from 'constants';

export default {
  parseMessageJson: function (messageJson) {
    return messageJson.template.outputs.map(output => {
      const type = Object.keys(output)[0];
      const data = output[type];

      if (data.hasOwnProperty('thumbnails')) {
        data.thumbnail = data.thumbnails[0];
        delete data.thumbnails;
      }
      if (data.hasOwnProperty('type')) {
        data.cardType = data.type;
        delete data.type;
      }
      return { type, data };
    });
  },
  normalizeMessageJson: function ({ type, json }) {
    return {
      version: '2.0',
      template: {
        outputs: [
          {
            [type]: json
          }
        ]
      }
    }
  },
  getDefaultMessageJson: function ({ type }) {
    return this.normalizeMessageJson({
      type,
      json: MESSAGE.DEFAULT_DATA[type]
    });
  }
}