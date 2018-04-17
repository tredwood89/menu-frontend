import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchMenu } from './actions/MenuAction'
import MenuContainer from './containers/MenuContainer';
import { Container, Header } from "semantic-ui-react";
import ItemDetail from './components/ItemDetail';
// import FlashCardContainer from './containers/FlashCardContainer';
import FlashComponent from './components/FlashComponent'
import RecomendationContainer from './containers/RecomendationContainer';
import RecomendationComponent from './components/RecomendationComponent';
import { Route, NavLink, withRouter } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax';
import HomePage from './components/HomePage';

class App extends Component {



  render() {
    return (
      <div>
        <Container>
          <Header block={true} size="huge">
            <Header.Content>Menu Test Kitchen</Header.Content>
            <Header.Subheader>It's alive</Header.Subheader>
          </Header>

          <NavLink activeStyle={{color:"red"}} to="/home">Home</NavLink>
          <NavLink activeStyle={{color:"red"}}to="/recommendations">| RecomendationStation |</NavLink>
          <NavLink activeStyle={{color:"red"}} to="/menu"> Full Menu |</NavLink>
          <NavLink activeStyle={{color:"red"}} to="/flashcards"> Flash Cards |</NavLink>
            <Route exact path="/recommendations" component={RecomendationContainer}/>
            <Route exact path="/menu" component={MenuContainer}/>
            <Route exact path="/flashcards" component={FlashComponent}/>
            <Route exact path='/home' component={HomePage}/>
        </Container>


      </div>
    )
    ;
  }
}

// <Container>
//   <Header block={true} size="huge">
//     <Header.Content>Menu Test Kitchen</Header.Content>
//     <Header.Subheader>It's alive</Header.Subheader>
//   </Header>
// </Container>
//   <br/>
//
//       <Container>
//         <RecomendationContainer/>
//       </Container>
//
//     <div>
//       <RecomendationComponent/>
//     </div>
//   <br/>
//
//
// <div id="scroll">
//  <MenuContainer/>
// </div>
// <br/>
// <Container>
//  <ItemDetail />
// </Container>
// <br/>
// <Container>
//  <h3>Flash Cards</h3>
//   <FlashComponent />
// </Container>


export default withRouter(connect(null, { fetchMenu })( App));
