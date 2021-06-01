import './App.css';
import Search from './pages/Search/Search';
import { BrowserRouter, Route } from 'react-router-dom'
import Details from './pages/Details/Details';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <BrowserRouter>
        <Search />
        <ErrorBoundary>
          <Route
            exact
            path="/item/:id"
            component={Details}
          />
        </ErrorBoundary>

        </BrowserRouter>
  );
}

export default App;
