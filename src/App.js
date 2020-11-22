
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import Todos from './pages/todos';
import Layout from './layout';
import Header from './components/header';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header/>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/todos" component={Todos} />

          </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
