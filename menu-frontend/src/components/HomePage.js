import React from 'react';
import SelectMenu from '../components/SelectMenu'
import { Container } from 'semantic-ui-react';


const HomePage = () => {


  return (
    <div>
      <Container textAlign="center">
        <h1>Select a Menu to Begin</h1>
        <SelectMenu/>
      </Container>
    </div>
  )
}


export default HomePage
