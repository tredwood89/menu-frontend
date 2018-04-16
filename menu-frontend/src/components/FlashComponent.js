import React from 'react';
import { Button, Segment, Image } from "semantic-ui-react";
import { connect } from 'react-redux';
import { getFlashCard,flipCard } from '../actions/MenuAction'



const FlashComponent = (props) => {


    const flashCardDisplay = (prop) => {
      return (
        prop ?
      ( <Segment padded="true" compact="true" textAlign='center'>
        <Image alt=""  size='medium' src={props.flashCard.url}/>
        <p>{props.flashCard.back}</p>
        </Segment> )
           :
      (<Segment padded="very" compact="true">
        {props.flashCard.front}
      </Segment>)
      )
    }

  return (

    <div>
      <div>
        <Button className="mini" onClick={()=>props.getFlashCard()}>
          New FlashCard
        </Button>
      </div>
      <br/>

      <div onClick={()=>props.flipCard()}>
            {flashCardDisplay(props.cardClicked)}
        </div>

    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    flashCard: state.flashCard,
    cardClicked: state.cardClicked
  }

}


export default connect( mapStateToProps, { getFlashCard,flipCard })(FlashComponent);
