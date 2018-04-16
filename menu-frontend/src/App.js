import React, { Component } from 'react';
import './App.css';
import MenuContainer from './containers/MenuContainer';
import { Container, Header } from "semantic-ui-react";
import ItemDetail from './components/ItemDetail';
// import FlashCardContainer from './containers/FlashCardContainer';
import FlashComponent from './components/FlashComponent'
import RecomendationContainer from './containers/RecomendationContainer';
import RecomendationComponent from './components/RecomendationComponent';


class App extends Component {

  render() {
    return (
      <div>
        <Container>
          <Header block={true} size="huge">
            <Header.Content>Menu Test Kitchen</Header.Content>
            <Header.Subheader>It's alive</Header.Subheader>
          </Header>
       </Container>
          <br/>

              <Container>
                <RecomendationContainer/>
              </Container>

            <div>
              <RecomendationComponent/>
            </div>
          <br/>


      <div id="scroll">
         <MenuContainer/>
       </div>
       <Container>
         <ItemDetail />
       </Container>
       <br/>
       <Container>
         <h3>Flash Cards</h3>
          <FlashComponent />
       </Container>

      </div>
    );
  }
}

export default App;
