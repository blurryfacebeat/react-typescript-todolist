import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';

// Classic Components - для классов
// React.FC - FUNCTION COMPONENT в библиотеке Component
const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;