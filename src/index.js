import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import CardList from './CardList';
import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <CardList robots={robots}/>
    </div>
    
  </React.StrictMode>
);
