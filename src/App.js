import React from 'react';
import './App.css';
import './bootstrap.css';
import './components/HeaderComponent'
import ParentComponent from './components/ParentComponent'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faCoffee)

function App() {
  return (
    <div className="App">
      <ParentComponent/>
    </div>
  );
}

export default App;
