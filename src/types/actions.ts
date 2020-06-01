export interface GenericActionType {
  type: string;
  payload: any;
}

export interface ConfigurationSetActionType {
  type: 'CONFIGURATION_SET';
  payload: {
    key: string;
    value: any;
  };
}

export interface ConfigurationClearedActionType {
  type: 'CONFIGURATION_CLEARED';
  payload: {
    key: string;
  };
}

export const CONFIGURATION_SET = 'CONFIGURATION_SET';
export const CONFIGURATION_CLEARED = 'CONFIGURATION_CLEARED';
