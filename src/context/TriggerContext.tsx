import { createContext, useReducer } from 'react';
import { TriggerContextType } from '../types/types';
import {
  initialTriggerState,
  triggerReducer,
} from '../reducers/triggerReducer';

export const TriggerContext = createContext<TriggerContextType>({
  state: { trigger: false },
  dispatch: () => {},
});

type Props = {
  children: React.ReactNode;
};

function TriggerContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(triggerReducer, initialTriggerState);

  return (
    <TriggerContext.Provider value={{ state, dispatch }}>
      {children}
    </TriggerContext.Provider>
  );
}
export default TriggerContextProvider;
