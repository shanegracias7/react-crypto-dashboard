import './App.css';
import React from 'react';
import Settings from '../Settings';
import styled,{css} from 'styled-components';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';


function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar/>
        <Settings/>  
      </AppProvider>
    </AppLayout>
    
  );
}

export default App;
