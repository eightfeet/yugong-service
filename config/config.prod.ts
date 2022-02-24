import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.webHost = 'https://yugong.dawenxi.art';
  return config;
};
