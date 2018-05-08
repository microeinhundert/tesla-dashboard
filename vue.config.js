// vue.config.js
const fs = require('fs');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/assets/css/globals.scss', 'utf-8'),
      },
    },
  },
};
