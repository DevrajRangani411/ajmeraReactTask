import React from 'react';
import './App.css';
import Home from './component/Home';
import {Provider} from "react-redux"
import {store} from "./store/index"

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <Home/>
        </div>
    </Provider>
    
  );
}

export default App;
