import { Attribution } from './components/attribution/attribution.component';
import {  PageWrapper } from './components/layout/layout.component';
import './index.css'
import { StatBlock } from './components/stat-block/stat-block.component';
import { Header } from './components/header/header.component';
import { StyledMap } from './components/map/map.styles';



function App() {
  return (
    <>
      <PageWrapper>
     <Header/>
        <StatBlock />
        <StyledMap />
      </PageWrapper>
      <Attribution /></>

  );
}

export default App;
