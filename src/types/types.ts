export type TriggerStateType = {
  trigger: boolean;
};

export type ActionType =
  | { type: 'TRIGGER_ON', payload: true }
  | { type: 'TRIGGER_OFF', payload: false };

export type TriggerContextType = {
  state: TriggerStateType;
  dispatch: React.Dispatch<ActionType>;
};
