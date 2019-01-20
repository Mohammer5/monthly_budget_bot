import * as fs from 'fs';

export const getConfig = () => {
  const config = JSON.parse(fs.readFileSync('../config.json', 'utf8'));
  
  if (!config.token || !config.userId) {
    console.log('You must provide a token and an userId in the config.json in the root dir of the bot!');
    process.exit(1);
  }

  return config;
};
