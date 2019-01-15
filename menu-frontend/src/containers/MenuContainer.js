
import React from 'react';
import  CategoryList  from '../components/CategoryList'
import { connect } from 'react-redux';
import { fetchMenu } from '../actions/MenuAction'
import uuid from 'uuid'
import { Grid, Header } from 'semantic-ui-react';
import { Parallax } from 'react-parallax';
import Entree from '../pics/Entree.png';
import Appetizer from '../pics/Appetizer.png';
import Sides from '../pics/Sides.png'
import Dessert from '../pics/Dessert.png'





class MenuContainer extends React.Component {



    filterItems = (arr, category) => {
      let filterArr = arr.filter( item => {
        return item.attributes.category === category
      })
      return filterArr.map( menuItem => {
        return <CategoryList key={uuid()} menuItem={menuItem}/>
      })
    }


  render(){
    //
    let menuArr = this.props.menu[0]
    let appetizer=[]
    let entree=[]
    let dessert=[]
    let side_order=[]
    let add_on=[]
    let beverage=[]

    if (menuArr) {
      appetizer.push(this.filterItems(menuArr,"appetizer"))
      entree.push(this.filterItems(menuArr, "entree"))
      dessert.push(this.filterItems(menuArr, "dessert"))
      side_order.push(this.filterItems(menuArr, "side_order"))
      add_on.push(this.filterItems(menuArr, "add_on"))
      beverage.push(this.filterItems(menuArr, "beverage"))
    }


    const styles = {
      fontFamily: 'sans-serif',
      textAlign: 'center',
    };
    const insideStyles = { color:'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

    return (
      <div style={styles}>
    <h1>

      Select a Menu item for more detail.
    </h1>
    <br/>
    <Parallax bgImage={Appetizer}
      strength={500}>
      <div style={{height: 200}}>
        <h2 style={insideStyles}>Appetizers</h2>

      </div>
    </Parallax>
    <br/>
     <div id="scroll">

       {appetizer}
     </div>
    <Parallax bgImage={Entree} blur={{min: -1,max:3}}>
      <div style={{height: 200}}>
        <h2 style={insideStyles}>Entrees</h2>
      </div>
    </Parallax>
    <br/>

    <div id="scroll">
      {entree}
    </div>
    <Parallax bgImage={Sides}
      strength={500}>
      <div style={{height: 200}}>
        <h2 style={insideStyles}>Sides and Adds</h2>
      </div>
    </Parallax>
    <br/>

    <div id="scroll">
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2">
              Side Orders
            </Header>
            {side_order}
          </Grid.Column>
          <Grid.Column>
            <Header as="h2">
              Add-Ons
            </Header>
            {add_on}
          </Grid.Column>
        </Grid.Row>

      </Grid>
      </div>
    <Parallax bgImage={Dessert} strength={-100}>
      <div style={{height: 200}}>
        <h2 style={{padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: 'white'}}>Desserts</h2>
      </div>
    </Parallax>
    <br/>

    <div id="scroll">
      {dessert}
      </div>


  </div>

    )
  }
}


const mapStateToProps = (state) => {

  return (
    {
      menu: state.menu
    }
  )
}
// <div>
//   <div className="ui grid container">
//     <div className="eight wide column">
//       <h3>Appetizers</h3>
//       {appetizer}
//     </div>
//     <div className="eight wide column">
//       <h3>Entrees</h3>
//       {entree}
//     </div>
//     <div className="eight wide column">
//       <h3>Side Orders</h3>
//       {side_order}
//     </div>
//     <div className="eight wide column">
//       <h3>Add Ons</h3>
//       {add_on}
//     </div>
//     <div className="eight wide column">
//       <h3>Beverages</h3>
//       {beverage}
//     </div>
//     <div className="eight wide column">
//       <h3>Desserts</h3>
//       {dessert}
//     </div>
//   </div>
// </div>
export default connect( mapStateToProps, { fetchMenu })(MenuContainer);
