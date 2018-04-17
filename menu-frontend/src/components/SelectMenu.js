
import React from 'react';
import { Menu, Dropdown } from "semantic-ui-react";
import { connect } from 'react-redux';
import { menuSelect , fetchMenu } from '../actions/MenuAction';



class SelectMenu extends React.Component {

  state = {
    menuSelection:[]
  }

  fetchMenuOptions = () => {
    fetch('http://localhost:3001/api/v1/menus')
      .then( res => res.json())
      .then(menus => this.setState({
        ...this.state,
          menuSelection:menus
      }))
  }

  componentDidMount(){
    this.fetchMenuOptions()

  }

  createOptions = (arr) =>{
    let i = 0
    return arr.map( el => {
      ++i
      return {key:`${i}`, text:`${el}`, value:`${i}`}
    })
  }

  handleOnChange = (event, data) => {
    let menuTitle = event.target.innerText
    this.props.menuSelect(menuTitle)
    this.props.fetchMenu()
  }

  render(){

      let menuTitles = this.state.menuSelection
      let options
      if (menuTitles){
        options = this.createOptions(menuTitles)
      }

    return(
      <div>
        <Menu compact>
          <Dropdown  placeholder="Select Menu" options={options} simple item onChange={this.handleOnChange} />
        </Menu>
      </div>
    )
  }
}


export default connect(null, { menuSelect, fetchMenu })(SelectMenu);
