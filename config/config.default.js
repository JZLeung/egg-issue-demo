'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523288026188_5125';

  // add your config here
  config.middleware = [];

  return config;
};
