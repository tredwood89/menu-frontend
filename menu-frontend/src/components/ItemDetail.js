import React from 'react';
import { connect } from 'react-redux';
import { Image, Modal, Header  } from "semantic-ui-react";


const ItemDetail = (props) => {
  const { name, description, url, ingredients, allergens, flavor, protien} = props.selectedItem


  const showItem = (prop) => {
    return (
      prop ?
          (<Modal trigger={<div className="modalCard"></div>}>
            <Modal.Content image>
          <Image wrapped size='medium' src={url} />
           <Header>{name}</Header>
           <Modal.Description>
            <p>{description}</p>
          </Modal.Description>
          <Modal.Description as="meta">
            <p>Ingredients: {ingredients}</p>
            <p>Allergens: {allergens}</p>
            <p>Flavor Profile: {flavor}</p>
            <p>Main Protien: {protien}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>)
     :
        null
      )
    }

//
//     <Modal.Content image="true">
//     <Image wrapped="true" size='medium' src={url} />
//      <Header>{name}</Header>
//      <Modal.Description>
//       <p>{description}</p>
//     </Modal.Description>
//     <Modal.Description as="meta">
//       <p>Ingredients: {ingredients}</p>
//       <p>Allergens: {allergens}</p>
//       <p>Flavor Profile: {flavor}</p>
//       <p>Main Protien: {protien}</p>
//     </Modal.Description>
//   </Modal.Content>
//

  return (

    <div>

        {showItem(props.selectedItem.name)}

     </div>
  )
}


const mapStateToProps = (state) => {
  return (
    {
      selectedItem: state.selectedItem
    }
  )
}


// <div className="ui centered card">
//   <Segment>
// <div className="image">
//   <Image alt="" size="medium" src={url}/>
// </div>
//   </Segment>
//
//   <div className="content">
//     <p className="header">{name}</p>
//     <div className="description">
//       {description}
//     </div>
//   </div>
//     <div className="extra content">
//       <a>
//         Ingredients: {ingredients}
//         <br/>
//         Allergens: {allergens}
//         <br/>
//         Flavor Profile: {flavor}
//         <br/>
//         Main protien: {protien}
//       </a>
//     </div>
//   </div>

export default connect( mapStateToProps )(ItemDetail);
