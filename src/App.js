import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import Todos from './pages/todos';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
        <Header/>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/todos" component={Todos} />
          </Switch>
    </BrowserRouter>
  );
}

export default App;
