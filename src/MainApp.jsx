import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import AppWithTheme from './components/AppWithTheme';

function MainApp() {
  return (
    <AppWithTheme>
      <Router>
        <App />
      </Router>
    </AppWithTheme>
  );
}

export default MainApp;