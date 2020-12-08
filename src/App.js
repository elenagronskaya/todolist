import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import Todos from './pages/todos';
import Header from './components/header';
import TodosDetailsPage from './pages/todos-details';
import TodosList from './components/todos-list';

function App() {
  return (
    <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/"  component={HomePage} />
            <Route exact path="/todos" component={Todos} />
            <Route path="/todos/:todoId" component={TodosDetailsPage} />
          </Switch>
    </BrowserRouter>
  );
}

export default App;
