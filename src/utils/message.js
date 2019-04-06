import { MESSAGE } from 'constants';

export default {
  parseMessageJson: messageJson => {
    return messageJson.template.outputs.map(output => {
      console.log(output);
      const type = Object.keys(output)[0];
      return {
        type,
        data: output[type]
      }
    });
  },
  getDefaultMessageJson: ({ type }) => {
    return {
      version: '2.0',
      template: {
        outputs: [
          {
            [type]: MESSAGE.DEFAULT_DATA[type]
          }
        ]
      }
    }
  }
}