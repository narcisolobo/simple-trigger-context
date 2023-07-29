import { useContext } from 'react';
import { TriggerContext } from './context/TriggerContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { state, dispatch } = useContext(TriggerContext);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="display-1">
            {state.trigger ? '{ trigger: true }' : '{ trigger: false }'}
          </h1>
          <div className="vstack gap-3">
            <button
              className="btn btn-primary w-100"
              onClick={() => dispatch({ type: 'TRIGGER_ON', payload: true })}>
              TRIGGER ON
            </button>
            <button
              className="btn btn-primary w-100"
              onClick={() => dispatch({ type: 'TRIGGER_OFF', payload: false })}>
              TRIGGER OFF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
