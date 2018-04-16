import React from 'react';
import { connect } from 'react-redux'
import { selectItem } from '../actions/MenuAction'

const CategoryList = (props) => {
  const  { attributes } = props.menuItem

  const handleClick = () => {
     props.selectItem(attributes)
    // props.openModal(attributes)
  }

  return(
    <div>
      <div onClick={()=>handleClick()}>
        <h5>{attributes.name}</h5>
        <p>{attributes.description}</p>
        <br/>
      </div>
    </div>
  )
}

export default connect(null, { selectItem })(CategoryList)
