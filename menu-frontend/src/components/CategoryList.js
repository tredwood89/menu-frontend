import React from 'react';
import { connect } from 'react-redux'
import { selectItem } from '../actions/MenuAction'
import { Image, Modal, Header  } from "semantic-ui-react";


const CategoryList = (props) => {
  const  { attributes } = props.menuItem

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1)
  }
  const capitalizeArr = (arr) => {
   let capArr = arr.map( word => {
    return  capitalize(word)
    })
    return capArr.join(", ")
   }

  return(
    <div>
      <div className="modalCard">
      </div>

      <Modal trigger={<div className="modalCard">
        <h4>{attributes.name}</h4>
        <p>{attributes.description}</p>
        <br/>
      </div>}>
        <Modal.Header>
          {attributes.name}
        </Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={attributes.url} />
       <Modal.Description>
        <Header>{attributes.description}</Header>
          <p>Ingredients: {attributes.ingredients}</p>
          <p>Allergens: {capitalizeArr(attributes.allergens)}</p>
          <p>Flavor Profile: {capitalize(attributes.flavor)}</p>
          <p>Main Protien: {capitalize(attributes.protien)}</p>
      </Modal.Description>

      </Modal.Content>
      </Modal>
    </div>
  )
}

export default connect(null, { selectItem })(CategoryList)
