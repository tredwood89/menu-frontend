import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchMenu } from './actions/MenuAction'
import MenuContainer from './containers/MenuContainer';
import { Container, Header, Grid } from "semantic-ui-react";
import FlashComponent from './components/FlashComponent'
import RecomendationContainer from './containers/RecomendationContainer';
import { Route, withRouter } from 'react-router-dom'
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'

class App extends Component {



  render() {
    let title
      let menuTitle = this.props.menuTitle

      if (menuTitle){
        title = "Current Menu: "+menuTitle
      } else {
        title = "Hey, Pick a Menu"
      }



    return (
      <div>
        <Container>
          <Header block={true} size="huge" textAlign="right">
            <Header.Content  color="red">WELCOME TO SERVICE SIDE</Header.Content>
            <Grid columns="equal">
              <Grid.Row>
                <Grid.Column>
                  <Header.Subheader>{ menuTitle ? <NavBar/> : null }</Header.Subheader>
                </Grid.Column>
                <Grid.Column>
                  <Header.Content style={{color:"green"}}>{title}</Header.Content>
               </Grid.Column>
            </Grid.Row>
           </Grid>

          </Header>

          <Route exact path="/recommendations" component={RecomendationContainer}/>
          <Route exact path="/menu" component={MenuContainer}/>
          <Route exact path="/flashcards" component={FlashComponent}/>
          <Route exact path='/' component={HomePage}/>


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
const mapStateToProps = (state) => {
  return {
    menuTitle:state.menuTitle
  }
}


export default withRouter(connect(mapStateToProps, { fetchMenu })( App));
