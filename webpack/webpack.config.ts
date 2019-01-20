const path = require('path');
import { size, assign } from 'lodash';
import { getMainConfig } from './mainConfig';
import { getClientConfig } from './getClientConfig';
import { getServerConfig } from './getServerConfig';

const exportConfigs = [];
const PROJECT_PATH = path.join(__dirname, '..');
const mainConfig = getMainConfig(PROJECT_PATH, 'development');

const SERVER_ENTRY_FILE_PATH = 'src';
const serverEntryFiles = [ 'monthly-budget-bot.ts' ];
const serverConfig = getServerConfig(PROJECT_PATH, SERVER_ENTRY_FILE_PATH, serverEntryFiles);
exportConfigs.push({ ...mainConfig, ...serverConfig });

// tslint:disable:no-default-export
export default exportConfigs;
