import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Beer from '../beer';
import Brewery from '../brewery';

const App = () => (
  <BrowserRouter>
    <div className="main">
      <Route exact path="/" component={Beer} />
      <Route exact path="/brewery" component={Brewery} />
      <Route exact path="/brewery/:id" component={Brewery} />
    </div>
  </BrowserRouter>
);

export default App;