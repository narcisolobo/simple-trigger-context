import { ActionType, TriggerStateType } from '../types/types';

export const initialTriggerState: TriggerStateType = {
  trigger: false,
};

export const triggerReducer = (state: TriggerStateType, action: ActionType) => {
  switch (action.type) {
    case 'TRIGGER_ON':
      console.log('trigger on');
      return {
        trigger: action.payload,
      };
    case 'TRIGGER_OFF':
      console.log('trigger off');
      return {
        trigger: action.payload,
      };
    default:
      return state;
  }
};
