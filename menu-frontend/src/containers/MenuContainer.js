
import React from 'react';
import  CategoryList  from '../components/CategoryList'
import { connect } from 'react-redux';
import { fetchMenu } from '../actions/MenuAction'
import uuid from 'uuid'




class MenuContainer extends React.Component {

    componentDidMount(){
      this.props.fetchMenu()
    }

    filterItems = (arr, category) => {
      let filterArr = arr.filter( item => {
        return item.attributes.category === category
      })
      return filterArr.map( menuItem => {
        return <CategoryList key={uuid()} menuItem={menuItem}/>
      })
    }


  render(){

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


    return(
        <div>
          <div className="ui grid container">
            <div className="eight wide column">
              <h3>Appetizers</h3>
              {appetizer}
            </div>
            <div className="eight wide column">
              <h3>Entrees</h3>
              {entree}
            </div>
            <div className="eight wide column">
              <h3>Side Orders</h3>
              {side_order}
            </div>
            <div className="eight wide column">
              <h3>Add Ons</h3>
              {add_on}
            </div>
            <div className="eight wide column">
              <h3>Beverages</h3>
              {beverage}
            </div>
            <div className="eight wide column">
              <h3>Desserts</h3>
              {dessert}
            </div>
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

export default connect( mapStateToProps, { fetchMenu })(MenuContainer);
