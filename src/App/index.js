import './App.css';
import React from 'react';
import Settings from '../Settings';
import Dashboard from '../Dashboard'
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Content from '../Shared/Content';


function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar/>
        <Content>
          <Settings/>
          <Dashboard/>
        </Content>
      </AppProvider>
    </AppLayout>
    
  );
}

export default App;
