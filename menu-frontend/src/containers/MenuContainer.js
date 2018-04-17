
import React from 'react';
import  CategoryList  from '../components/CategoryList'
import { connect } from 'react-redux';
import { fetchMenu } from '../actions/MenuAction'
import uuid from 'uuid'
import { Grid, Container, Header } from 'semantic-ui-react';
import { Parallax, Background } from 'react-parallax';





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
  const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
  const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
  const image2 = "https://v478pa.bn1.livefilestore.com/y2m2yJeC7UfWJ9AiIG8Lm4_K5BiN1yRU84tMlBtxQ-7Llr9oV4XYEYyr8l0j8eXPbFroKrD1f9KKjY_jURbKC5lA_rS6h6mOBZVgCeZknD6I9VAl126yEzdzPTXk0KX_Tdd/air.jpg?psid=1";
  const image3 = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";

    return (
      <div style={styles}>
    <h1>Menu</h1>
    <Parallax bgImage={image1}
      strength={500}>
      <div style={{height: 200}}>
        <div style={insideStyles}>Appetizers</div>
      </div>
    </Parallax>
     <div id="scroll">
       {appetizer}
     </div>
    <Parallax bgImage={image3} blur={{min: -1,max:3}}>
      <div style={{height: 200}}>
        <div style={insideStyles}>Entrees</div>
      </div>
    </Parallax>
    <div id="scroll">
      {entree}
    </div>
    <Parallax bgImage={image1}
      strength={500}>
      <div style={{height: 200}}>
        <div style={insideStyles}>Sides and Adds</div>
      </div>
    </Parallax>

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
    <Parallax bgImage={image2} strength={-100}>
      <div style={{height: 200}}>
        <div style={insideStyles}>Desserts</div>
      </div>
    </Parallax>
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
