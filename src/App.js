import ErrorBoundary from './Wrapper/ErrorBoundary';
import './App.css';
import Front_End_Machine from './Wrapper/Front_End_Machine';

function App() {
  return (
    <ErrorBoundary>
      <Front_End_Machine />
    </ErrorBoundary>
  );
}

export default App;
