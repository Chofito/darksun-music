import { CONFIGURATION_SET, GenericActionType } from '../types/actions';
import { Id } from '../types/common';

export type SettingsState = {
  [key in Id]: any;
};

const defaultSettings: any = {
  isDark: true,
  userLang: null,
  firstTime: true,
};

const settings = (state = defaultSettings, action: GenericActionType): any => {
  const { payload } = action;

  switch (action.type) {
    case CONFIGURATION_SET:
      return {
        ...state,
        [payload.key]: payload.value,
      };
    default:
      return state;
  }
};

export default settings;
