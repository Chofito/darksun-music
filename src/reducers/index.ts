import { combineReducers } from 'redux';

import settings, { SettingsState } from './settings';
import { Id } from '../types/common';

export type AppState = {
  settings: SettingsState;
};

export default combineReducers({
  settings,
});

export const getSetting = (id: Id) => (state: any): any => state.settings[id];
