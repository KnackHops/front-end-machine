import ErrorBoundary from './Wrapper/ErrorBoundary';
import './App.css';
import FroneEndMachine from './Wrapper/FrontEndMachine';

function App() {
  return (
    <ErrorBoundary>
      <FroneEndMachine />
    </ErrorBoundary>
  );
}

export default App;
