import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.webHost = 'http://127.0.0.1:7001';

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1625267294140_3558';

  // add your egg config in here
  config.middleware = [ 'errorHandler' ];
  // 仅作用于api路径
  config.errorHandler = {
    match: '/api',
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // 自定义请求头
  config.csrf = {
    headerName: 'x-csrf-token',
  };

  config.sequelize = {
    dialect: 'sqlite',
    storage: 'app/data/yugong.sqlite',
    define: {
      freezeTableName: true,
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
