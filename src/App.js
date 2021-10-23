import ErrorBoundary from './Wrapper/ErrorBoundary';
import './App.css';
import FrontEndMachine from './Wrapper/FrontEndMachine';

function App() {
  return (
    <ErrorBoundary>
      <FrontEndMachine />
    </ErrorBoundary>
  );
}

export default App;
