import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Registration Form</h1>
        <RegistrationForm />
      </div>
    </Provider>
  );
};

export default App;