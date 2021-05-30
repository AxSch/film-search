import './App.css';
import Search from './pages/Search/Search';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/">
          <Redirect to="search" />
        </Route>
        <Route path="/search" component={Search} />
      </BrowserRouter>
  );
}

export default App;
