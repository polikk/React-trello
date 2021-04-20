import React from 'react';
import {AppContainer} from './styles'
import {Card} from './Card';
import {Column} from './Column';


function App() {
  return (
    <AppContainer>
        <Column text ='To do'>
          <Card text ='Generate app scaffpld'/>
        </Column>
        <Column text ='In progress'>
          <Card text ='Generate app scaffpld'/>
        </Column>
        <Column text ='Done'>
          <Card text ='Generate app scaffpld'/>
        </Column>
    </AppContainer>
  );
}

export default App;
