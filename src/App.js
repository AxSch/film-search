import './App.css';
import Search from './pages/Search/Search';
import { BrowserRouter, Route } from 'react-router-dom'
import Details from './pages/Details/Details';

function App() {
  return (
    <BrowserRouter>
        <Search />
        <Route
          exact
          path="/item/:id"
          component={Details}
        />
      </BrowserRouter>
  );
}

export default App;
