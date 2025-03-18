import React, { FC } from 'react';
import { Background } from './App.styles';
import ExpandCard from './components/ExpandCard/ExpandCard';
import PatientTable from './components/PatientTable/PatientTable';

const App: FC = () => {
  return (
    <Background>
      <ExpandCard headingText='Janeiro'>
        <PatientTable />
      </ExpandCard>
    </Background>
  )
} 

export default App;
