import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button_component_for_prop_testing from './components/data_component/data'
import Button_component_for_state_testing from './components/button_components/Button'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* declaring our components here */}
    <Button_component_for_state_testing />
    <Button_component_for_prop_testing />
  </React.StrictMode>
);

