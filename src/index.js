import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button_component_for_state_testing from './components/button_components/Button'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* declaring our components here */}
    <Button_component_for_state_testing />
  </React.StrictMode>
);

