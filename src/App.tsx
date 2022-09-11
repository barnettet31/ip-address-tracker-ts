import React from 'react'
import { Attribution } from './components/attribution/attribution.component';
import { Input } from './components/input/input.component';
import { InputHeader, PageWrapper } from './components/layout/layout.component';
import { Title } from './components/typography/text.component';
import { Map } from './components/map/map.component';
import './index.css'

function App() {
  return (
    <>
 <PageWrapper>   
  <InputHeader>
  <Title>IP Address Tracker</Title>
  <Input/>
  </InputHeader>
  <Map/>
 </PageWrapper>
  <Attribution/></>

  );
}

export default App;
