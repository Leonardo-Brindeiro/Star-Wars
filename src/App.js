import React from 'react';
import './App.css';
import Table from './components/Table';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <h1>Starwars</h1>
      <Table />
    </AppProvider>
  );
}

export default App;
